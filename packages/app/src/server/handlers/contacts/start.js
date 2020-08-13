import isEmpty from "is-empty";
import truncate from "lodash/truncate";
import ono from "@jsdevtools/ono";

import * as authManager from "@/server/auth-manager";
import { getUser } from "@/server/middleware/auth";
import { onNoMatch } from "@/server/middleware";
import checkCallSession from "@/utils/check-call-session";
import {
	ERROR_TYPES,
	CALL_SESSION_STATUS,
	CALL_SESSION_USER_TYPE
} from "@/constants";
import syncIds from "@/utils/sync-identifiers";
import * as comms from "@/server/comms";
import stripe from "@/server/stripe";
import * as fees from "@/utils/fees";
import { publicUrl } from "@/env-config";

const customerErrResponse = {
	success: false,
	code: 402,
	type: ERROR_TYPES.paymentMethodRequired,
	message: "Payment method required"
};

export default async function startContactsSession(req, res) {
	const { contact: callerUsername, message = "" } = req.query;

	// Get caller user
	const callerUser = await authManager.getUserByUsername(callerUsername, {
		withContext: true
	});

	// If not found, return not found.
	if (isEmpty(callerUser)) {
		return onNoMatch(req, res);
	}

	req.log.info(`Caller user found`, {
		id: callerUser.id,
		username: callerUser.username
	});

	// Get currently authenticated user
	const user = await getUser(req, { withContext: true });

	const logger = req.log.child({
		operatorUser: {
			id: user.id || "",
			username: user.username || ""
		},
		callerUser: { id: callerUser.id || "", username: callerUser.username || "" }
	});

	// Check that both user's are not already in call session
	const inSession = checkCallSession(callerUser, user);
	if (inSession.isCaller) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionExists,
			message: "Caller user already in session"
		});
	}
	if (inSession.isOperator) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorBusy,
			message: "Operator user is busy"
		});
	}

	logger.info(`Operator and Caller are available to start a session`);

	// Make sure authed user is a stripe customer
	if (isEmpty(callerUser.stripeCustomerId)) {
		return res.status(customerErrResponse.code).json(customerErrResponse);
	}

	// Check if a default payment method is set.
	const customer = await stripe.customers.retrieve(callerUser.stripeCustomerId);
	if (isEmpty(customer.invoice_settings.default_payment_method)) {
		return res.status(customerErrResponse.code).json(customerErrResponse);
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
			currency: user.currency,
			customer: callerUser.stripeCustomerId,
			payment_method: paymentMethodId,
			description: "Call session pre-authorisation",
			metadata: {
				callerName: callerUser.nickname,
				callerUsername: callerUser.username,
				operatorName: user.nickname,
				operatorUsername: user.username,
				contacts: true
			},
			statement_descriptor_suffix: `OP: ${truncate(user.givenName, 18)}`,
			off_session: true,
			confirm: true,
			error_on_requires_action: true,
			capture_method: "manual"
		};
		preAuthorisation = await stripe.paymentIntents.create(preAuthParams);

		logger.info(`Pre-authorisation complete`, { id: preAuthorisation.id });
	} catch (e) {
		logger.error(`Pre-authorisation failed`, e);

		return res.status(customerErrResponse.code).json({
			...customerErrResponse,
			type: ERROR_TYPES.paymentMethodInvalid,
			message: "Payment method invalid"
		});
	}

	// Create the PROLONGED proxy call session
	const dateExpiry = new Date();
	dateExpiry.setDate(dateExpiry.getDate() + 1);
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
			name: user.nickname,
			phoneNumber: user.phoneNumber
		},
		{
			uniqueName: `Contacts Session - Caller: ${truncate(callerUser.nickname, {
				length: 65
			})} and Operator: ${truncate(user.nickname, {
				length: 65
			})} - ${Date.now()}`,
			dateExpiry
		}
	);

	if (isEmpty(callerProxyPhoneNumber)) {
		throw ono(new Error("No proxy phone number found for caller"), {
			type: ERROR_TYPES.proxyPhoneNumberRequired,
			context: {
				callSessionId: proxySession.sid,
				callerId: callerUser.id,
				operatorId: user.id
			}
		});
	}

	if (isEmpty(operatorProxyPhoneNumber)) {
		throw ono(new Error("No proxy phone number found for operator"), {
			type: ERROR_TYPES.proxyPhoneNumberRequired,
			context: {
				callSessionId: proxySession.sid,
				callerId: callerUser.id,
				operatorId: user.id
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
		with: user.username,
		as: CALL_SESSION_USER_TYPE.caller,
		proxyPhoneNumber: callerProxyPhoneNumber
	};
	const operatorCallSession = {
		id: proxySession.sid,
		with: callerUser.username,
		as: CALL_SESSION_USER_TYPE.operator,
		proxyPhoneNumber: operatorProxyPhoneNumber,
		// Start meter by initialising meterStamps for operator user.
		meterStamps: [[Date.now()]]
	};

	// Store sessions against each use
	await Promise.all([
		authManager.updateUser(user.id, {
			metadata: {
				app: {
					callSession: operatorCallSession
				}
			}
		}),
		authManager.updateUser(user.id, {
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

	await Promise.all([
		// Create sync document for Live Operator user
		// -- This document should have automatically been created on frontend once operator went live
		comms.updateDocument(syncIds.getLiveOperator(user.id), {
			callSession: operatorCallSession
		}),
		// Update CallSession Sync document to set metering state
		comms.updateDocument(syncIds.getCallSession(operatorCallSession.id), {
			status: CALL_SESSION_STATUS.metering
		})
	]);

	// SMS the Caller User notifying about the session creation
	await comms.sms(
		callerUser.phoneNumber,
		`${user.givenName} has started a session to work for you${
			message ? `: "${message}"` : `.`
		} Check your session at ${publicUrl}`
	);

	return res.json({
		success: true,
		callSession: {
			operator: operatorCallSession,
			caller: callerCallSession
		}
	});
}
