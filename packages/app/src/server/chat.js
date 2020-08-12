/* eslint-disable no-console */

import isEmpty from "is-empty";
import { getRequest } from "@callsesh/utils";
import ono from "@jsdevtools/ono";
import pickBy from "lodash/pickBy";

import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import generateId from "@/utils/generate-id";
import * as authManager from "@/server/auth-manager";

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

export const getAuthHeaderParams = (userId, authToken) => ({
	"X-Auth-Token": authToken,
	"X-User-Id": userId
});

export const getAuthHeaders = (user, pass) => {
	return login(user || config.user, pass || config.pass).then(({ data }) =>
		getAuthHeaderParams(data.userId, data.authToken)
	);
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

/**
 * Get Chat User, otherwise create the user.
 *
 * @param   {Object}  user  User Object with Context
 */
export const getOrCreateUser = async (user) => {
	let { chatUser = {} } = user;

	if (isEmpty(chatUser)) {
		// If user.chatUser has not been created, create it.
		const {
			user: { _id: chatUserId },
			password: chatUserPassword
		} = await createUser(user.email, user.nickname, user.username, {
			appId: user.id
		});
		await updateUser(chatUserId, {
			picture: user.picture,
			verified: true
		});
		chatUser = {
			id: chatUserId,
			password: chatUserPassword
		};
		const params = {
			metadata: {
				app: {
					chatUser
				}
			}
		};
		await authManager.updateUser(user.id, params);

		console.log(`Chat user created`, { id: chatUser.id });
	}

	return chatUser;
};
