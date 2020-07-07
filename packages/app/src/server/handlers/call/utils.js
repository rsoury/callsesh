import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import * as comms from "@callsesh/utils/comms";

import { ERROR_TYPES } from "@/constants";

export const customerErrResponse = {
	success: false,
	code: 402,
	type: ERROR_TYPES.paymentMethodRequired,
	message: "Payment method required"
};

export const logParams = (operatorUser = {}, callerUser = {}) => ({
	operatorUser: {
		id: operatorUser.id || "",
		username: operatorUser.username || ""
	},
	callerUser: { id: callerUser.id || "", username: callerUser.username || "" }
});

export const getUserSMSMessage = (proxyPhoneNumber) =>
	`Call your operator using this number: ${proxyPhoneNumber}. This number will be unavailable in a minute.`;

export const isSessionValid = async (sessionId) => {
	// Retrieve session and check if its still open (ie. not failed or closed).
	const session = await comms.getProxyService().sessions(sessionId).fetch();
	if (["closed", "failed"].includes(session.status)) {
		return false;
	}

	return true;
};

export const getProxyPhoneNumber = (user) =>
	comms
		.getProxyService()
		.sessions(user.callSession?.id)
		.participants.list({ limit: 20 })
		.then(
			(participants) =>
				(
					participants.find(
						({ identifier }) => identifier === user.phoneNumber
					) || {}
				).proxyIdentifier
		)
		.then((proxyPhoneNumber) => {
			if (isEmpty(proxyPhoneNumber)) {
				throw ono(new Error("No proxy phone number found for caller"), {
					type: ERROR_TYPES.proxyPhoneNumberRequired,
					context: {
						callSessionId: user.callSession.id,
						callerId: user.id,
						operatorUser: user.callSession.with
					}
				});
			}
			return proxyPhoneNumber;
		});
