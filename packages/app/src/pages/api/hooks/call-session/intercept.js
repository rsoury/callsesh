/**
 * Twilio Proxy Service Intercept Callback Url.
 * Fires on each interaction.
 * Used to prevent Operator from making interactions.
 */

import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import get from "lodash/get";

import * as comms from "@/comms";
import getHandler from "@/middleware";
import * as authManager from "@/auth-manager";
import handleException from "@/utils/handle-exception";
import { CALL_SESSION_USER_TYPE } from "@/constants";

const handler = getHandler();

handler.post(async (req, res) => {
	const { inboundParticipantSid, interactionSessionSid } = req.body;

	// Get participant in call session
	const participant = await comms
		.getProxyService()
		.sessions(interactionSessionSid)
		.participants(inboundParticipantSid)
		.fetch();
	const { identifier: phoneNumber } = participant;

	const logParams = { phoneNumber, participant };

	const handleErr = (errMessage) => {
		req.log.error(errMessage, logParams);
		handleException(ono(new Error(errMessage), logParams));
	};

	// Use participant identifier to determine user
	const users = await authManager.getClient().getUsers({
		search_engine: "v3",
		page: 0,
		per_page: 10,
		q: `phone_number:"${phoneNumber}"`
	});

	// Handle an exception here where user isn't found by phone number
	if (isEmpty(users)) {
		handleErr("No users found for a user in a session");
		return res.status(403).end();
	}

	// Handle an exception here where multiple users are found by phone number
	if (users.length > 1) {
		handleErr("Multiple users found for a user in a session");
		return res.status(403).end();
	}

	const [user] = users;

	// Check this user is in this call session
	const callSession = get(user, "app_metadata.callSession", {});
	if (callSession.id !== interactionSessionSid) {
		handleErr("Application user call session does not match inbound session");
		return res.status(403).end();
	}

	// Make sure this user is the caller in this call session
	if (callSession.as !== CALL_SESSION_USER_TYPE.caller) {
		req.log.info(
			"Application user is not the caller in this session",
			logParams
		);
		return res.status(403).end();
	}

	// Return 200.
	return res.end();
});

export default handler;
