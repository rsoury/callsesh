/**
 * Server side auth management library
 */

import isEmpty from "is-empty";
import { ManagementClient } from "auth0";
import * as yup from "yup";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";

import { auth0 as config } from "@/env-config";

const client = new ManagementClient({
	domain: config.domain,
	clientId: config.clientId,
	clientSecret: config.clientSecret
});

const viewUserSchema = yup.object().shape({
	createdAt: yup.string().required(),
	givenName: yup.string().required(),
	familyName: yup.string().required(),
	nickname: yup.string().required(),
	name: yup.string().required(),
	picture: yup.string().required(),
	username: yup.string().required(),
	country: yup.string().required(),
	currency: yup.string().required(),
	dob: yup.string().required(),
	gender: yup.string(),
	hourlyRate: yup.string(),
	messageBroadcast: yup.string(),
	purpose: yup.string(),
	isLive: yup.boolean(),
	profilePicture: yup.object(),
	callSession: yup.object()
});

export const getUserRoles = (id) => {
	return client.getUserRoles({ id, page: 0, per_page: 50, sort: "date:-1" });
};

export const getUser = (id) => {
	return client.getUser({ id });
};

export const updateUser = (
	id,
	{
		metadata: { app: appMetadata = {}, user: userMetadata = {} } = {},
		...params
	} = {}
) => {
	if (!isEmpty(appMetadata)) {
		params.app_metadata = appMetadata;
	}
	if (!isEmpty(userMetadata)) {
		params.user_metadata = userMetadata;
	}
	return client.updateUser({ id }, params);
};

export const getViewUserByUsername = async (
	username,
	{ withContext = false } = {}
) => {
	const params = {
		search_engine: "v3",
		page: 0,
		per_page: 10,
		q: `user_metadata.username:"${username}"`
	};

	// If withContext is false, restrict retrieved fields.
	if (!withContext) {
		params.fields = [
			"created_at",
			"user_id",
			"given_name",
			"family_name",
			"nickname",
			"name",
			"user_metadata",
			"app_metadata",
			"picture"
		].join(",");
	}

	const users = await client.getUsers(params);

	// Return if empty
	if (isEmpty(users)) {
		return {};
	}

	// Throw if multiple users for one username
	if (users.length > 1) {
		throw new Error("Multiple users for username");
	}

	// Now that we have a user, validate. Make sure the view user is registered
	const {
		user_id: viewUserId,
		user_metadata: userMetadata = {},
		app_metadata: appMetadata = {},
		...userData
	} = users[0];
	// Get publicly viewable call session data
	const {
		callSession: { id: callSessionId, ...callSession } = {}
	} = appMetadata;

	const unformattedViewUser = withContext
		? {
				id: viewUserId,
				...userData,
				...userMetadata,
				...appMetadata
		  }
		: {
				...userData,
				...userMetadata,
				callSession
		  };

	const viewUser = mapKeys(unformattedViewUser, (value, key) => camelCase(key));

	try {
		await viewUserSchema.validate(viewUser);
	} catch (e) {
		console.error(e); // eslint-disable-line
		return {};
	}

	// Get view user roles
	const roles = await getUserRoles(viewUserId);
	viewUser.roles = withContext
		? roles
		: roles.map((role) => ({
				name: role.name,
				description: role.description
		  }));

	return viewUser;
};

export const isUsernameAvailable = async (username) => {
	const users = await client.getUsers({
		search_engine: "v3",
		q: `user_metadata.username:"${username}"`,
		per_page: 10,
		page: 0
	});

	return isEmpty(users);
};

export const getClient = () => client;
