import isEmpty from "is-empty";
import { getRequest } from "@callsesh/utils";
import ono from "@jsdevtools/ono";

import { workflowsUrl, publicUrl } from "@/env-config";
import handleException from "@/utils/handle-exception";
import * as authManager from "@/server/auth-manager";
import * as routes from "@/routes";
import { CALL_SESSION_USER_TYPE } from "@/constants";

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
		const usersInSession = await authManager.getClient().getUsers({
			search_engine: "v3",
			page: 0,
			per_page: 10,
			q: `app_metadata.callSession.id:"${sessionId}"`,
			fields: ["user_id", "app_metadata"]
		});

		if (isEmpty(usersInSession)) {
			throw new Error("No users in this session");
		}

		// Using raw auth0 response data
		const callerUser = usersInSession.find(
			(u) => u.app_metadata.callSession.as === CALL_SESSION_USER_TYPE.caller
		);
		userId = callerUser.user_id;
	}

	const token = await authManager.createOTP(userId);
	await delayRequest({
		url: `${publicUrl}${routes.api.endCall}`,
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
};
