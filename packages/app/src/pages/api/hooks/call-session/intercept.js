/**
 * Twilio Proxy Service Intercept Callback Url.
 * Fires on each interaction.
 * Used to prevent Operator from making interactions.
 */

import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import truncate from "lodash/truncate";

import * as comms from "@/comms";
import getHandler from "@/middleware";
import * as authManager from "@/auth-manager";
import handleException from "@/utils/handle-exception";
import stripe from "@/stripe";
import { CALL_SESSION_USER_TYPE, SERVICE_FEE } from "@/constants";

const handler = getHandler();

handler.post(async (req, res) => {
	const { inboundParticipantSid, interactionSessionSid } = req.body;

	const logParams = { requestBody: { ...req.body } };

	try {
		// Get participant in call session
		const participant = await comms
			.getProxyService()
			.sessions(interactionSessionSid)
			.participants(inboundParticipantSid)
			.fetch();
		const { identifier: phoneNumber } = participant;

		logParams.participant = participant;

		// Use participant identifier to determine user
		const user = await authManager.getUserByPhoneNumber(phoneNumber, {
			withContext: true
		});
		if (isEmpty(user)) {
			throw new Error("No caller user found in session");
		}

		const { callSession, stripeCustomerId } = user;

		logParams.callSession = callSession;
		logParams.stripeCustomerId = stripeCustomerId;

		// Check this user is in this call session
		if (callSession.id !== interactionSessionSid) {
			throw new Error(
				"Application user call session does not match interaction session"
			);
		}

		// Make sure this user is the caller in this call session
		if (callSession.as !== CALL_SESSION_USER_TYPE.caller) {
			req.log.info(
				"Application user is not the caller in this session",
				logParams
			);
			return res.status(403).end();
		}

		// Check caller in callSession to find if callSession.preAuthorisation (stripe id) exists.
		if (isEmpty(callSession.preAuthorisation)) {
			// We need the currency to charge in. Get the user that is in session with caller.
			const operatorUser = await authManager.getUserByUsername(
				callSession.with
			);
			if (isEmpty(operatorUser)) {
				throw new Error("Cannot find the operator user in call session");
			}

			// If not, authorise amount
			const preAuthCharge = await stripe.charges.create({
				amount: SERVICE_FEE,
				currency: operatorUser.currency,
				customer: stripeCustomerId,
				description: "Call session pre-authorisation",
				statement_descriptor_suffix: truncate(operatorUser.givenName, 22),
				capture: false
			});

			// Add pre auth charge id to application user data
			await authManager.updateUser(user.id, {
				metadata: {
					app: {
						callSession: {
							...callSession,
							preAuthorisation: preAuthCharge.id
						}
					}
				}
			});
		}

		// Return 200.
		return res.end();
	} catch (err) {
		req.log.error(err.message, logParams);
		handleException(ono(err, logParams));
		// Status 403 Forbidden required to end the call.
		return res.status(403).end();
	}
});

export default handler;
