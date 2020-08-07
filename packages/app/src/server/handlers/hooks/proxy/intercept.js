/**
 * Twilio Proxy Service Intercept Callback Url.
 * Fires on each interaction.
 * Used to prevent Operator from making the first call inititation.
 */

import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";

import * as comms from "@/server/comms";
import * as authManager from "@/server/auth-manager";
import handleException from "@/utils/handle-exception";
import { CALL_SESSION_USER_TYPE } from "@/constants";

export default async function proxyInterceptHook(req, res) {
	const { inboundParticipantSid, interactionSessionSid } = req.body;

	req.log.info(`Start call session interaction intercept`);

	try {
		// Get participant in call session
		const participant = await comms
			.getProxyService()
			.sessions(interactionSessionSid)
			.participants(inboundParticipantSid)
			.fetch();
		const { identifier: phoneNumber } = participant;

		req.log.info(`Inbound participant retrieved`, { id: participant.sid });

		// Use participant identifier (phoneNumber) to determine user
		const user = await authManager.getUserByPhoneNumber(phoneNumber, {
			withContext: true
		});
		if (isEmpty(user)) {
			throw new Error("No caller user found in session");
		}

		req.log.info(`Application user retrieved for inbound participant`, {
			username: user.username
		});

		// Check if user is the operator.
		if (user.callSession.as === CALL_SESSION_USER_TYPE.operator) {
			// Check if a call has been initiated previously.
			const lastCallInitiation = await comms.getLastCallInitiation(
				interactionSessionSid
			);
			// If not, throw an error. This prevents the Operator from making the first call.
			if (isEmpty(lastCallInitiation)) {
				throw new Error("Operator cannot make the first call in a session");
			}
		}

		// Return 200.
		return res.end();
	} catch (err) {
		const params = { requestBody: { ...req.body } };
		req.log.error(err.message, params);
		handleException(ono(err, params));

		// Status 403 Forbidden required to end the call.
		return res.status(403).end();
	}
}
