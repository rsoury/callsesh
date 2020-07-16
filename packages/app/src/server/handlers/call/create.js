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
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";
import checkCallSession from "@/utils/check-call-session";
import * as syncDocumentName from "@/utils/get-sync-document-name";
import { delayEndSession } from "@/server/workflows";

import * as utils from "./utils";

export default async function createCallSession(req, res) {
	// Get operator username from request body
	const { operator: operatorUsername } = req.body;

	// Get operator user
	const operatorUser = await authManager.getUserByUsername(operatorUsername, {
		withContext: true
	});

	// If not found, return not found.
	if (isEmpty(operatorUser)) {
		return onNoMatch(req, res);
	}

	req.log.info(`Operator user found`, {
		id: operatorUser.id,
		username: operatorUser.username
	});

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

	// Now that we have the operatorUser...
	// Get the authed user
	const user = await getUser(req, { withContext: true });

	const logger = req.log.child(utils.logParams(operatorUser, user));

	// Make sure authed user is not already in a session
	// If they are, check if they're already in a session with the operatorUser
	const inSession = checkCallSession(user, operatorUser);
	if (inSession.isCaller) {
		if (inSession.isOperator && inSession.isSame) {
			const valid = await utils.isSessionValid(user.callSession.id);
			if (valid) {
				// Both users are already in a session together.
				// Return the params for successful session creation.
				const proxyPhoneNumber = await utils.getProxyPhoneNumber(user);

				logger.info(`User already in call session with Operator user`, {
					callSessionId: user.callSession.id,
					proxyPhoneNumber
				});

				// Notify caller with proxy phone number
				await comms.sms(
					user.phoneNumber,
					utils.getUserSMSMessage(proxyPhoneNumber)
				);

				return res.json({
					success: true,
					proxyPhoneNumber,
					callSession: {
						caller: user.callSession,
						operator: operatorUser.callSession
					}
				});
			}
		}

		logger.info(`User already in call session`);

		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionExists,
			message: "Caller user already in session"
		});
	}

	// Make sure operatorUser is live
	if (!operatorUser.isLive) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorUnavailable,
			message: "Operator user is unavailable"
		});
	}

	logger.info(`Operator user is live`);

	// Make sure operatorUser is not in session
	if (!isEmpty(operatorUser.callSession)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorBusy,
			message: "Operator user is busy"
		});
	}

	logger.info(`Operator user is available for a call`);

	// Make sure authed user is a stripe customer
	if (isEmpty(user.stripeCustomerId)) {
		return res
			.status(utils.customerErrResponse.code)
			.json(utils.customerErrResponse);
	}

	// Check if a default payment method is set.
	const customer = await stripe.customers.retrieve(user.stripeCustomerId);
	if (isEmpty(customer.invoice_settings.default_payment_method)) {
		return res
			.status(utils.customerErrResponse.code)
			.json(utils.customerErrResponse);
	}

	logger.info(`User is a customer`);

	// Create the proxy call session
	const {
		session: proxySession,
		caller: { proxyIdentifier: proxyPhoneNumber }
	} = await comms.createSession(
		{
			name: user.nickname,
			phoneNumber: user.phoneNumber
		},
		{
			name: operatorUser.nickname,
			phoneNumber: operatorUser.phoneNumber
		},
		{
			uniqueName: `Caller: ${truncate(user.nickname, {
				length: 75
			})} and Operator: ${truncate(operatorUser.nickname, {
				length: 75
			})} - ${Date.now()}`
		}
	);

	if (isEmpty(proxyPhoneNumber)) {
		throw ono(new Error("No proxy phone number found for caller"), {
			type: ERROR_TYPES.proxyPhoneNumberRequired,
			context: {
				callSessionId: proxySession.sid,
				callerId: user.id,
				operatorId: operatorUser.id
			}
		});
	}

	// Call session to return to authed user.
	const callerCallSession = {
		id: proxySession.sid,
		with: operatorUser.username,
		as: CALL_SESSION_USER_TYPE.caller
	};
	const operatorCallSession = {
		id: proxySession.sid,
		with: user.username,
		as: CALL_SESSION_USER_TYPE.operator
	};

	// Create sync document for Live Operator user
	// -- This document should have automatically been created on frontend once operator went live
	await comms.updateDocument(
		syncDocumentName.getLiveOperatorDocument(operatorUser.id),
		{
			callSession: operatorCallSession
		}
	);

	// Store sessions against each use
	await Promise.all([
		authManager.updateUser(operatorUser.id, {
			metadata: {
				app: {
					callSession: operatorCallSession
				}
			}
		}),
		authManager.updateUser(user.id, {
			metadata: {
				app: {
					callSession: callerCallSession
				}
			}
		})
	]);

	await Promise.all([
		// Notify operator of an incoming caller.
		comms.sms(
			operatorUser.phoneNumber,
			`You have a caller named ${user.givenName}! You should receive a call within a minute. If you do not, this means the caller has abandoned the session.`
		),
		// Notify caller with proxy phone number
		comms.sms(user.phoneNumber, utils.getUserSMSMessage(proxyPhoneNumber))
	]);

	await delayEndSession(proxySession.sid, user.id);

	// Response should be the proxy phone number
	return res.json({
		success: true,
		proxyPhoneNumber,
		callSession: {
			caller: callerCallSession,
			operator: operatorCallSession
		}
	});
}
