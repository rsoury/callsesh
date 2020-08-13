/**
 * Create a Twilio Proxy Session where participants are the currently authed user and the operator in url param
 * 1. Check if both users exist and are active
 * 2. Check if operator is live and available
 * 3. Check if caller is a valid customer
 * 4. Initiate session
 *
 * If both parties are not available, check if they're already in a session together.
 */

import isEmpty from "is-empty";
import truncate from "lodash/truncate";
import ono from "@jsdevtools/ono";

import * as authManager from "@/server/auth-manager";
import * as comms from "@/server/comms";
import stripe from "@/server/stripe";
import { onNoMatch } from "@/server/middleware";
import { getUser } from "@/server/middleware/auth";
import isUserOperator from "@/utils/is-operator";
import {
	ERROR_TYPES,
	CALL_SESSION_USER_TYPE,
	CALL_SESSION_STATUS
} from "@/constants";
import checkCallSession from "@/utils/check-call-session";
import { delayEndSession } from "@/server/workflows";
import syncIds from "@/utils/sync-identifiers";
import * as fees from "@/utils/fees";
import { publicUrl } from "@/env-config";
import * as routes from "@/routes";

import * as utils from "./utils";

export default async function createCallSession(req, res) {
	// Get operator username from request body
	const { with: counterpartUsername, as: userType, message = "" } = req.body;

	if (!Object.values(CALL_SESSION_USER_TYPE).includes(userType)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: `User type must be valid. ie. ${Object.values(
				CALL_SESSION_USER_TYPE
			).join(", ")}`
		});
	}

	if (userType === CALL_SESSION_USER_TYPE.caller) {
		req.log.info(`Caller is starting session`);
	} else if (userType === CALL_SESSION_USER_TYPE.operator) {
		req.log.info(`Operator is starting session`);
	}

	const counterpartUser = await authManager.getUserByUsername(
		counterpartUsername,
		{
			withContext: true
		}
	);

	// If not found, return not found.
	if (isEmpty(counterpartUser)) {
		return onNoMatch(req, res);
	}

	req.log.info(`Counterpart user found`, {
		id: counterpartUser.id,
		username: counterpartUser.username
	});

	// Now that we have the counterpartUser...
	// Get the authed user
	const user = await getUser(req, { withContext: true });

	// Determine role of each user, as both roles can call this API endpoint
	const callerUser =
		userType === CALL_SESSION_USER_TYPE.caller ? user : counterpartUser;
	const operatorUser =
		userType === CALL_SESSION_USER_TYPE.operator ? user : counterpartUser;

	// Make sure Operator user is an operator
	if (!isUserOperator(operatorUser)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorRequired,
			message: "An operator user is required to start a call session"
		});
	}

	req.log.info(`Operator user has role operator`);

	const logger = req.log.child(utils.logParams(operatorUser, callerUser));

	// Check that both user's are not already in call session
	const inSession = checkCallSession(callerUser, operatorUser);
	if (inSession.isCaller) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionExists,
			message: "Caller user already in session"
		});
	}
	logger.info(`Caller user is available for session`);

	if (inSession.isOperator) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorBusy,
			message: "Operator user is busy"
		});
	}
	logger.info(`Operator user is available for session`);

	// Make sure operatorUser is live only when initiating user is the caller.
	if (userType === CALL_SESSION_USER_TYPE.caller && !operatorUser.isLive) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorUnavailable,
			message: "Operator user is unavailable"
		});
	}

	// Make sure authed user is a stripe customer
	if (isEmpty(callerUser.stripeCustomerId)) {
		return res
			.status(utils.customerErrResponse.code)
			.json(utils.customerErrResponse);
	}

	// Check if a default payment method is set.
	const customer = await stripe.customers.retrieve(callerUser.stripeCustomerId);
	if (isEmpty(customer.invoice_settings.default_payment_method)) {
		return res
			.status(utils.customerErrResponse.code)
			.json(utils.customerErrResponse);
	}

	logger.info(`Caller user is a customer`);

	// Initiate PreAuthorisation to ensure payment method associated with Caller is valid
	let preAuthorisation = null;
	try {
		// The payment intent can error if authentication is required
		// -- setup intent is in use to prevent this, but not guaranteed
		const paymentMethodId = customer.invoice_settings.default_payment_method;
		const preAuthParams = {
			amount: fees.preAuth().toInt(),
			currency: operatorUser.currency,
			customer: callerUser.stripeCustomerId,
			payment_method: paymentMethodId,
			description: "Call session pre-authorisation",
			metadata: {
				callerName: callerUser.nickname,
				callerUsername: callerUser.username,
				operatorName: operatorUser.nickname,
				operatorUsername: operatorUser.username,
				initiatingAs: userType
			},
			statement_descriptor_suffix: `OP: ${truncate(
				operatorUser.givenName,
				18
			)}`,
			off_session: true,
			confirm: true,
			error_on_requires_action: true,
			capture_method: "manual"
		};
		preAuthorisation = await stripe.paymentIntents.create(preAuthParams);

		logger.info(`Pre-authorisation complete`, { id: preAuthorisation.id });
	} catch (e) {
		if (userType === CALL_SESSION_USER_TYPE.caller) {
			// SMS Caller of issue with payment if initiated by caller
			await comms.sms(
				callerUser.phoneNumber,
				`There seems to have been an issue with your payment method. Please configure or add a new payment method through your Callsesh Wallet. ${publicUrl}${routes.page.settings.wallet}`
			);
		}

		logger.error(`Pre-authorisation failed`, e);

		return res.status(utils.customerErrResponse.code).json({
			...utils.customerErrResponse,
			type: ERROR_TYPES.paymentMethodInvalid,
			message: "Payment method invalid"
		});
	}

	// Create the proxy call session
	const createSessionParams = {
		uniqueName: `Caller: ${truncate(callerUser.nickname, {
			length: 65
		})} and Operator: ${truncate(operatorUser.nickname, {
			length: 65
		})} - ${Date.now()}`
	};
	if (userType === CALL_SESSION_USER_TYPE.operator) {
		createSessionParams.uniqueName = `Contacts Session - ${createSessionParams.uniqueName}`;
		// Prolong call session when initiated by Operator
		const dateExpiry = new Date();
		dateExpiry.setDate(dateExpiry.getDate() + 1);
		createSessionParams.dateExpiry = dateExpiry;
	}
	const {
		session: proxySession,
		caller: { proxyIdentifier: callerProxyPhoneNumber },
		operator: { proxyIdentifier: operatorProxyPhoneNumber }
	} = await comms.createSession(
		{
			name: callerUser.nickname,
			phoneNumber: callerUser.phoneNumber
		},
		{
			name: operatorUser.nickname,
			phoneNumber: operatorUser.phoneNumber
		},
		createSessionParams
	);

	if (isEmpty(callerProxyPhoneNumber)) {
		throw ono(new Error("No proxy phone number found for caller"), {
			type: ERROR_TYPES.proxyPhoneNumberRequired,
			context: {
				callSessionId: proxySession.sid,
				callerId: callerUser.id,
				operatorId: operatorUser.id
			}
		});
	}

	if (isEmpty(operatorProxyPhoneNumber)) {
		throw ono(new Error("No proxy phone number found for operator"), {
			type: ERROR_TYPES.proxyPhoneNumberRequired,
			context: {
				callSessionId: proxySession.sid,
				callerId: callerUser.id,
				operatorId: operatorUser.id
			}
		});
	}

	// Update pre-authorisation with call session id.
	await stripe.paymentIntents.update(preAuthorisation.id, {
		metadata: {
			callSessionId: proxySession.sid
		}
	});
	logger.info(`Updated pre-authorisation with call session identifer`);

	// Call session to return to authed user.
	const callerCallSession = {
		id: proxySession.sid,
		with: operatorUser.username,
		as: CALL_SESSION_USER_TYPE.caller,
		proxyPhoneNumber: callerProxyPhoneNumber
	};
	const operatorCallSession = {
		id: proxySession.sid,
		with: callerUser.username,
		as: CALL_SESSION_USER_TYPE.operator,
		proxyPhoneNumber: operatorProxyPhoneNumber,
		// Start session in metering state
		// Start meter by initialising meterStamps for operator user.
		meterStamps:
			userType === CALL_SESSION_USER_TYPE.operator ? [[Date.now()]] : []
	};

	// Store sessions against each use
	await Promise.all([
		authManager.updateUser(operatorUser.id, {
			metadata: {
				app: {
					callSession: operatorCallSession
				}
			}
		}),
		authManager.updateUser(callerUser.id, {
			metadata: {
				app: {
					callSession: {
						...callerCallSession,
						preAuthorisation: preAuthorisation.id
					}
				}
			}
		})
	]);

	await Promise.all(
		[
			// Create sync document for Live Operator user
			// -- This document should have automatically been created on frontend once operator went live
			comms.updateDocument(syncIds.getLiveOperator(operatorUser.id), {
				callSession: operatorCallSession
			})
		].concat(
			userType === CALL_SESSION_USER_TYPE.operator
				? [
						// For user type operator, Create CallSession Sync document and set metering status
						comms.createDocument(syncIds.getCallSession(proxySession.sid), {
							status: CALL_SESSION_STATUS.metering
						})
				  ]
				: []
		)
	);

	if (userType === CALL_SESSION_USER_TYPE.operator) {
		// SMS the Caller User notifying about the session creation
		await comms.sms(
			callerUser.phoneNumber,
			`${
				operatorUser.givenName
			} has started a metered call session to complete work for you${
				message ? `: "${message}"` : `.`
			} To end the session visit ${publicUrl}${routes.build.user(
				operatorUser.username
			)}`
		);
	} else if (userType === CALL_SESSION_USER_TYPE.caller) {
		await Promise.all([
			// Notify operator of an incoming caller.
			comms.sms(
				operatorUser.phoneNumber,
				`You have a Callsesh caller! ${callerUser.givenName} will call you from ${operatorProxyPhoneNumber}. Check your session at ${publicUrl}`
			),
			// Notify caller with proxy phone number
			comms.sms(
				callerUser.phoneNumber,
				utils.getUserSMSMessage(callerProxyPhoneNumber, operatorUser.givenName)
			)
		]);

		await delayEndSession(proxySession.sid, callerUser.id);
	}

	// Response should be both user call sessions
	return res.json({
		success: true,
		callSession: {
			caller: callerCallSession,
			operator: operatorCallSession
		}
	});
}
