import isEmpty from "is-empty";
import { getRequest } from "@callsesh/utils";
import ono from "@jsdevtools/ono";
import pickBy from "lodash/pickBy";

import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import generateId from "@/utils/generate-id";

const request = getRequest({
	baseURL: `${config.url}/api/v1/`
});

export const login = (user, password) => {
	return request
		.post(`login`, {
			user,
			password
		})
		.then(({ data }) => data)
		.catch((e) => {
			handleException(e);

			throw e;
		});
};

export const getAuthHeaders = (user, pass) => {
	return login(user || config.user, pass || config.pass).then(({ data }) => ({
		"X-Auth-Token": data.authToken,
		"X-User-Id": data.userId
	}));
};

export const getClient = () => request;

/**
 * Accept user data to create user in chat service
 */
export const createUser = async (email, name, username, metadata = {}) => {
	const headers = await getAuthHeaders();
	const password = generateId(64);
	return request
		.post(
			"users.create",
			{
				email,
				name,
				password,
				username,
				roles: ["user"],
				joinDefaultChannels: false,
				requirePasswordChange: false,
				verified: false,
				customFields: metadata
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
			handleException(ono(e, { email, name, username }));

			throw e;
		});
};

/**
 * Accept data to update user in chat service.
 */
export const updateUser = async (userId, params = {}) => {
	const { picture, ...updateParams } = pickBy(
		params,
		(value, key) =>
			["email", "name", "username", "picture", "verified"].includes(key) &&
			!isEmpty(value)
	);
	const headers = await getAuthHeaders();
	const requestPromises = [];
	if (!isEmpty(picture)) {
		requestPromises.push(
			request
				.post(
					`users.setAvatar`,
					{
						avatarUrl: picture,
						userId
					},
					{
						headers
					}
				)
				.then(({ data }) => data)
		);
	}
	if (!isEmpty(updateParams)) {
		requestPromises.push(
			request
				.post(
					`users.update`,
					{
						userId,
						data: updateParams
					},
					{ headers }
				)
				.then(({ data }) => data)
		);
	}
	if (requestPromises.length > 0) {
		return Promise.all(requestPromises).catch((e) => {
			handleException(ono(e, params));

			throw e;
		});
	}
	return Promise.resolve();
};
