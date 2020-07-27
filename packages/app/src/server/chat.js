import isEmpty from "is-empty";
import { getRequest } from "@callsesh/utils";
import ono from "@jsdevtools/ono";

import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import generateId from "@/utils/generate-id";

const request = getRequest({
	baseURL: `${config.url}/api/v1/`
});

const getAuthHeaders = (user, pass) => {
	return request
		.post(`login`, {
			user: user || config.user,
			password: pass || config.pass
		})
		.then(({ data }) => data)
		.then(({ data }) => ({
			"X-Auth-Token": data.authToken,
			"X-User-Id": data.userId
		}))
		.catch(handleException);
};

/**
 * Accept user data to create user in chat service
 */
export const createUser = async (user) => {
	const headers = await getAuthHeaders();
	const password = generateId(64);
	return request
		.post(
			"users.create",
			{
				email: user.email,
				name: user.nickname,
				password,
				username: user.username,
				roles: ["user"],
				joinDefaultChannels: false,
				requirePasswordChange: false,
				verified: true,
				customFields: {
					appId: user.id
				}
			},
			{
				headers
			}
		)
		.then(({ data }) => data)
		.then((data) => ({
			...data,
			password
		}))
		.catch((e) => {
			handleException(ono(e, user));

			throw e;
		});
};

/**
 * Accept data to update user in chat service.
 */
export const updateUser = async (userId, params = {}) => {
	const { email, name, username, picture } = params;
	const headers = await getAuthHeaders();
	const requestPromises = [];
	if (!isEmpty(picture)) {
		requestPromises.push(
			request
				.post(
					`users.setAvatar`,
					{
						image: picture,
						userId
					},
					{
						headers
					}
				)
				.then(({ data }) => data)
		);
	}
	const updateParams = {};
	if (!isEmpty(email)) {
		updateParams.email = email;
	}
	if (!isEmpty(name)) {
		updateParams.name = name;
	}
	if (!isEmpty(username)) {
		updateParams.username = username;
	}
	if (!isEmpty(updateParams)) {
		requestPromises
			.push(request.post(`users.update`), {
				...updateParams
			})
			.then(({ data }) => data);
	}
	if (requestPromises.length > 0) {
		return Promise.all(requestPromises).catch((e) => {
			handleException(ono(e, params));

			throw e;
		});
	}
	return Promise.resolve();
};
