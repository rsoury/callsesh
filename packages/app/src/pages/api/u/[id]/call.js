/**
 * Create a Twilio Proxy Session where participants are the currently authed user and the operator in url param
 * 1. Check if both users exist and are active
 * 2. Check if operator is live and available
 * 3. Check if caller is a valid customer
 * 4. Initiate session
 */

import isEmpty from "is-empty";
import truncate from "lodash/truncate";

import * as comms from "@/comms";
import getHandler, { onNoMatch } from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import isUserOperator from "@/utils/is-operator";
import stripe from "@/stripe";
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";

const handler = getHandler();

const customerErrResponse = {
	success: false,
	code: 400,
	type: ERROR_TYPES.paymentMethodRequired,
	message: "Payment method required"
};

handler.use(requireAuthentication).post(async (req, res) => {
	// Get username from query.
	const {
		query: { id: viewUsername }
	} = req;

	// Get view user
	const viewUser = await authManager.getViewUserByUsername(viewUsername, {
		withContext: true
	});

	// If not found, return not found.
	if (isEmpty(viewUser)) {
		return onNoMatch(req, res);
	}

	// Make sure view user is an operator
	if (!isUserOperator(viewUser)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorRequired,
			message: "An operator user is required to start a call session"
		});
	}

	// Make sure viewUser is live
	if (!viewUser.isLive) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorUnavailable,
			message: "Operator user is unavailable"
		});
	}

	// Make sure viewUser is not in session
	if (!isEmpty(viewUser.session)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.operatorBusy,
			message: "Operator user is busy"
		});
	}

	// Get user
	const user = await getUser(req, { withContext: true });

	// Make sure authed user is a stripe customer
	if (isEmpty(user.stripeCustomerId)) {
		return res.status(customerErrResponse.code).json(customerErrResponse);
	}

	// Check if a default payment method is set.
	const customer = await stripe.customer.retrieve(user.stripeCustomerId);
	if (isEmpty(customer.invoice_settings.default_payment_method)) {
		return res.status(customerErrResponse.code).json(customerErrResponse);
	}

	// Make sure authed user is not already in a session
	if (!isEmpty(user.callSession)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionExists,
			message: "Caller user already in session"
		});
	}

	// Create the call session
	const {
		session: callSession,
		caller: { proxy_identifier: proxyPhoneNumber }
	} = await comms.createSession(
		{
			name: user.nickname,
			phoneNumber: user.phoneNumber
		},
		{
			name: viewUser.nickname,
			phoneNumber: viewUser.phoneNumber
		},
		{
			uniqueName: `Call session - Caller: ${truncate(user.nickname, {
				length: 74
			})} and Operator: ${truncate(viewUser.nickname, { length: 74 })}`
		}
	);

	// Call session to return to authed user.
	const newUserCallSession = {
		with: viewUser.username,
		as: CALL_SESSION_USER_TYPE.caller
	};
	// Store sessions against each use
	await Promise.all([
		authManager.updateUser(viewUser.id, {
			metadata: {
				app: {
					callSession: {
						id: callSession.sid,
						with: user.username,
						as: CALL_SESSION_USER_TYPE.operator
					}
				}
			}
		}),
		authManager.updateUser(req, {
			metadata: {
				app: {
					callSession: {
						id: callSession.sid,
						...newUserCallSession
					}
				}
			}
		})
	]);

	// Notify operator of an incoming caller.
	await comms.sms(
		viewUser.phoneNumber,
		`You have a caller! You should receive a call within a minute. If you do not, this means the caller has abandoned the session.`
	);

	// Response should be the proxy phone number
	return res.json({
		success: true,
		proxyPhoneNumber,
		callSession: newUserCallSession
	});
});

export default handler;
