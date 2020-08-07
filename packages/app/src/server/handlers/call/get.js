import isEmpty from "is-empty";
import * as comms from "@/server/comms";
import * as authManager from "@/server/auth-manager";

import { onNoMatch } from "@/server/middleware";
import { getUser } from "@/server/middleware/auth";
import checkCallSession from "@/utils/check-call-session";
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";

import * as utils from "./utils";

export default async function getCallSession(req, res) {
	// Handler for retreving existing session between user and counterpartUser
	const {
		query: { sms }
	} = req;

	const user = await getUser(req, { withContext: true });

	if (isEmpty(user.callSession)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionRequired,
			message: "Call session does not exist"
		});
	}

	const shouldSMS = sms === "true" || sms === true;

	// Get counterpart user
	const counterpartUser = await authManager.getUserByUsername(
		user.callSession.with,
		{
			withContext: true
		}
	);

	// If not found, return not found.
	if (isEmpty(counterpartUser)) {
		return onNoMatch(req, res);
	}

	const logger = req.log.child(utils.logParams(counterpartUser));

	logger.info(`counterpart user found`);

	const inSession = checkCallSession(user, counterpartUser);
	if (inSession.isSame) {
		const valid = await utils.isSessionValid(user.callSession.id);
		if (valid) {
			// Determine role of each user, as both roles can call this API endpoint
			const callerUser =
				user.callSession.as === CALL_SESSION_USER_TYPE.caller
					? user
					: counterpartUser;
			const operatorUser =
				user.callSession.as === CALL_SESSION_USER_TYPE.operator
					? user
					: counterpartUser;

			const proxyPhoneNumber = await utils.getProxyPhoneNumber(callerUser);

			// Get session details to find if status is still open.
			logger.info(`User in call session with counterpart user`, {
				callSessionId: user.callSession.id,
				proxyPhoneNumber
			});

			if (shouldSMS) {
				// Notify caller with proxy phone number
				await comms.sms(
					callerUser.phoneNumber,
					utils.getUserSMSMessage(proxyPhoneNumber, operatorUser.givenName)
				);
			}

			return res.json({
				success: true,
				proxyPhoneNumber,
				callSession: {
					caller: callerUser.callSession,
					operator: operatorUser.callSession
				}
			});
		}
	}

	return res.json({
		success: true,
		proxyPhoneNumber: "",
		callSession: {
			caller: {},
			operator: {}
		}
	});
}
