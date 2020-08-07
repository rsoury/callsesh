import isEmpty from "is-empty";
import { getRequest } from "@callsesh/utils";
import ono from "@jsdevtools/ono";

import { workflowsUrl, publicUrl, publicProxyUrl } from "@/env-config";
import handleException from "@/utils/handle-exception";
import * as authManager from "@/server/auth-manager";
import * as routes from "@/routes";
import { CALL_SESSION_USER_TYPE } from "@/constants";

const getUrl = (pathname) => `${publicProxyUrl || publicUrl}${pathname}`;

const request = getRequest({
	baseURL: workflowsUrl
});

/**
 * Will request workflow to delay and fire webhook.
 * Accepts webhook instructions as request body
 *
 * @param   {string}  url      Url to deplay request to
 * @param   {string}  method   method to use
 * @param   {Object}  data     Request body to forward
 * @param   {Object}  headers  headers to forward
 *
 * @return  {Object}           repsonse of the webhook
 */
export const delayRequest = (params) => {
	const { url, method = "GET", data = {}, headers = {} } = params;
	if (isEmpty(url)) {
		throw new Error("Delay request workflow required a URL in parameters");
	}

	return request
		.post("/delay", { url, method, data, headers })
		.then(({ data: d }) => d)
		.catch((e) => {
			handleException(ono(e, params));

			throw e;
		});
};

/**
 * Use Delay workflow to delay end session request
 * Use OTP to authenticate webhook
 * Does not force close.
 */
export const delayEndSession = async (sessionId, userId = "") => {
	if (isEmpty(userId)) {
		// Get caller user from session -- find user with callSession
		const callerUser = await authManager.getUserInSession(
			sessionId,
			CALL_SESSION_USER_TYPE.caller
		);
		userId = callerUser.id;
	}

	const token = await authManager.createOTP(userId);
	await delayRequest({
		url: getUrl(routes.api.endCall),
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
};

/**
 * Use Delay workflow to delay live notification in case a user doesn't stay live for more than a minute.
 * Use OTP to authenticate webhook
 * Does not force close.
 */
export const delayLiveNotifications = async (userId) => {
	const token = await authManager.createOTP(userId);
	await delayRequest({
		url: getUrl(routes.api.liveNotify),
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
};
