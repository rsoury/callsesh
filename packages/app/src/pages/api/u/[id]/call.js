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
import { nanoid } from "nanoid";
import ono from "@jsdevtools/ono";
import pick from "lodash/pick";

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
	code: 402,
	type: ERROR_TYPES.paymentMethodRequired,
	message: "Payment method required"
};

const logParams = (viewUser = {}, user = {}) => ({
	viewUser: { id: viewUser.id || "", username: viewUser.username || "" },
	user: { id: user.id || "", username: user.username || "" }
});

const getUserSMSMessage = (proxyPhoneNumber) =>
	`Call your operator using this number: ${proxyPhoneNumber}. This number will be unavailable in a minute.`;

const checkSessionWithViewUser = async (user, viewUser) => {
	// Check if user and viewUser share session data
	if (
		user.callSession.with === viewUser.username &&
		viewUser.callSession.with === user.username &&
		user.callSession.as === CALL_SESSION_USER_TYPE.caller &&
		viewUser.callSession.as === CALL_SESSION_USER_TYPE.operator &&
		user.callSession.id === viewUser.callSession.id
	) {
		// Retrieve session and check if its still open (ie. not failed or closed).
		const session = await comms
			.getProxyService()
			.sessions(user.callSession.id)
			.fetch();
		if (["closed", "failed"].includes(session.status)) {
			return false;
		}

		return true;
	}
	return false;
};

handler
	.use(requireAuthentication)
	.get(async (req, res) => {
		// Handler for retreving existing session between user and viewUser
		const {
			query: { id: viewUsername }
		} = req;

		// Get view user
		const viewUser = await authManager.getUserByUsername(viewUsername, {
			withContext: true
		});

		// If not found, return not found.
		if (isEmpty(viewUser)) {
			return onNoMatch(req, res);
		}

		req.log.info(`View user found`, logParams(viewUser));

		const user = await getUser(req, { withContext: true });

		if (!isEmpty(user.callSession)) {
			if (!isEmpty(viewUser.callSession)) {
				const isInSessionWithViewUser = await checkSessionWithViewUser(
					user,
					viewUser
				);
				if (isInSessionWithViewUser) {
					// Get session details to find if status is still open.
					req.log.info(`User in call session with view user`, {
						...logParams(viewUser, user),
						callSessionId: user.callSession.id
					});

					return res.json({
						success: true,
						callSession: {
							caller: pick(user.callSession, ["as", "with"]),
							operator: pick(viewUser.callSession, ["as", "with"])
						}
					});
				}
			}
		}

		return res.json({
			success: true,
			callSession: {
				caller: {},
				operator: {}
			}
		});
	})
	.post(async (req, res) => {
		// Get username from query.
		const {
			query: { id: viewUsername }
		} = req;

		// Get view user
		const viewUser = await authManager.getUserByUsername(viewUsername, {
			withContext: true
		});

		// If not found, return not found.
		if (isEmpty(viewUser)) {
			return onNoMatch(req, res);
		}

		req.log.info(`View user found`, logParams(viewUser));

		// Make sure view user is an operator
		if (!isUserOperator(viewUser)) {
			return res.status(400).json({
				success: false,
				code: 400,
				type: ERROR_TYPES.operatorRequired,
				message: "An operator user is required to start a call session"
			});
		}

		req.log.info(`View user is operator`, logParams(viewUser));

		// Now that we have the viewUser...
		// Get the authed user
		const user = await getUser(req, { withContext: true });

		// Make sure authed user is not already in a session
		// If they are, check if they're already in a session with the viewUser
		if (!isEmpty(user.callSession)) {
			if (!isEmpty(viewUser.callSession)) {
				const isInSessionWithViewUser = await checkSessionWithViewUser(
					user,
					viewUser
				);
				if (isInSessionWithViewUser) {
					// Both users are already in a session together.
					// Return the params for successful session creation.
					const proxyPhoneNumber = await comms
						.getProxyService()
						.sessions(user.callSession.id)
						.participants.list({ limit: 20 })
						.then(
							(participants) =>
								(
									participants.find(
										({ identifier }) => identifier === user.phoneNumber
									) || {}
								).proxyIdentifier
						);

					if (isEmpty(proxyPhoneNumber)) {
						throw ono(new Error("No proxy phone number found for caller"), {
							type: ERROR_TYPES.proxyPhoneNumberRequired,
							context: {
								callSessionId: user.callSession.id,
								callerId: user.id,
								operatorId: viewUser.id
							}
						});
					}

					req.log.info(`User already in call session with view user`, {
						...logParams(viewUser, user),
						callSessionId: user.callSession.id,
						proxyPhoneNumber
					});

					// Notify caller with proxy phone number
					await comms.sms(
						user.phoneNumber,
						getUserSMSMessage(proxyPhoneNumber)
					);

					return res.json({
						success: true,
						proxyPhoneNumber,
						callSession: {
							caller: pick(user.callSession, ["as", "with"]),
							operator: pick(viewUser.callSession, ["as", "with"])
						}
					});
				}
			}

			req.log.info(`User already in call session`, logParams(viewUser, user));

			return res.status(400).json({
				success: false,
				code: 400,
				type: ERROR_TYPES.callSessionExists,
				message: "Caller user already in session"
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

		req.log.info(`View user is live`, logParams(viewUser, user));

		// Make sure viewUser is not in session
		if (!isEmpty(viewUser.callSession)) {
			return res.status(400).json({
				success: false,
				code: 400,
				type: ERROR_TYPES.operatorBusy,
				message: "Operator user is busy"
			});
		}

		req.log.info(
			`View user is available for a call`,
			logParams(viewUser, user)
		);

		// Make sure authed user is a stripe customer
		if (isEmpty(user.stripeCustomerId)) {
			return res.status(customerErrResponse.code).json(customerErrResponse);
		}

		// Check if a default payment method is set.
		const customer = await stripe.customers.retrieve(user.stripeCustomerId);
		if (isEmpty(customer.invoice_settings.default_payment_method)) {
			return res.status(customerErrResponse.code).json(customerErrResponse);
		}

		req.log.info(`User is a customer`, logParams(viewUser, user));

		// Create the call session
		const {
			session: callSession,
			caller: { proxyIdentifier: proxyPhoneNumber }
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
				uniqueName: `Caller: ${truncate(user.nickname, {
					length: 70
				})} and Operator: ${truncate(viewUser.nickname, {
					length: 70
				})} - ${nanoid(20)}`
			}
		);

		if (isEmpty(proxyPhoneNumber)) {
			throw ono(new Error("No proxy phone number found for caller"), {
				type: ERROR_TYPES.proxyPhoneNumberRequired,
				context: {
					callSessionId: user.callSession.id,
					callerId: user.id,
					operatorId: viewUser.id
				}
			});
		}

		// Call session to return to authed user.
		const callerCallSession = {
			with: viewUser.username,
			as: CALL_SESSION_USER_TYPE.caller
		};
		const operatorCallSession = {
			with: user.username,
			as: CALL_SESSION_USER_TYPE.operator
		};
		// Store sessions against each use
		await Promise.all([
			authManager.updateUser(viewUser.id, {
				metadata: {
					app: {
						callSession: {
							id: callSession.sid,
							...operatorCallSession
						}
					}
				}
			}),
			authManager.updateUser(user.id, {
				metadata: {
					app: {
						callSession: {
							id: callSession.sid,
							...callerCallSession
						}
					}
				}
			})
		]);

		await Promise.all([
			// Notify operator of an incoming caller.
			comms.sms(
				viewUser.phoneNumber,
				`You have a caller named ${user.givenName}! You should receive a call within a minute. If you do not, this means the caller has abandoned the session.`
			),
			// Notify caller with proxy phone number
			comms.sms(user.phoneNumber, getUserSMSMessage(proxyPhoneNumber))
		]);

		// Response should be the proxy phone number
		return res.json({
			success: true,
			proxyPhoneNumber,
			callSession: {
				caller: callerCallSession,
				operator: operatorCallSession
			}
		});
	});

export default handler;
