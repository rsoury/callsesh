/**
 * Server side auth management library
 */

import isEmpty from "is-empty";
import { ManagementClient } from "auth0";
import * as yup from "yup";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import ono from "@jsdevtools/ono";

import { CALL_SESSION_USER_TYPE } from "@/constants";
import { auth0 as config } from "@/env-config";
import generateId from "@/utils/generate-id";

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

/**
 * Take user and format
 */
const formatUser = async (rawUser, withContext = false) => {
	// Now that we have a user, validate. Make sure the view user is registered
	const {
		user_id: userId,
		user_metadata: userMetadata = {},
		app_metadata: appMetadata = {},
		identities,
		...userData
	} = rawUser;

	// Get email user data from identity
	const emailAttributes = {
		email: "",
		emailVerified: false
	};
	const emailAttributesWithContext = {
		emailIdentity: ""
	};
	const emailIdentity = identities.find(
		({ connection }) => connection === "email"
	);
	if (!isEmpty(emailIdentity)) {
		emailAttributes.email = emailIdentity.profileData.email;
		emailAttributes.emailVerified = emailIdentity.profileData.email_verified;
		emailAttributesWithContext.emailIdentity = emailIdentity.user_id;
	}

	const unformattedUser = {
		id: userId,
		...userData,
		...emailAttributes,
		...userMetadata,
		...(withContext
			? {
					...emailAttributesWithContext,
					...appMetadata
			  }
			: {
					callSession: appMetadata.callSession || {},
					notified: appMetadata.notified || [],
					contacts: appMetadata.contacts || []
			  })
	};

	const user = mapKeys(unformattedUser, (value, key) => camelCase(key));

	try {
		await viewUserSchema.validate(user);
	} catch (e) {
		console.error(e); // eslint-disable-line
		return {};
	}

	// Get view user roles
	const roles = await getUserRoles(userId);
	user.roles = withContext
		? roles
		: roles.map((role) => ({
				name: role.name,
				description: role.description
		  }));

	return user;
};

// Accepts auth0 getUsers parameters with options
export const findUser = async (params, { withContext = false } = {}) => {
	// Set default params
	params = {
		search_engine: "v3",
		page: 0,
		per_page: 10,
		...params
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
			"picture",
			"identities"
		].join(",");
	}

	const users = await client.getUsers(params);

	// Return if empty
	if (isEmpty(users)) {
		return {};
	}

	// Throw if multiple users for one username
	if (users.length > 1) {
		throw ono(new Error("Multiple users found"), { params });
	}

	return formatUser(users[0], withContext);
};

export const getUserByUsername = (username, options) => {
	return findUser(
		{
			q: `app_metadata.usernamespace:"${username.toLowerCase()}"`
		},
		options
	);
};

export const getUserByPhoneNumber = (phoneNumber, options) => {
	return findUser(
		{
			q: `phone_number:"${phoneNumber}"`
		},
		options
	);
};

/**
 * Get user in session by sessionId and user type
 */
export const getUserInSession = async (
	sessionId,
	userType = CALL_SESSION_USER_TYPE.caller
) => {
	const usersInSession = await client.getUsers({
		search_engine: "v3",
		page: 0,
		per_page: 10,
		q: `app_metadata.callSession.id:"${sessionId}"`
	});

	if (isEmpty(usersInSession)) {
		throw new Error("No users in this session");
	}

	// Using raw auth0 response data
	const rawUser = usersInSession.find(
		(u) => u.app_metadata.callSession.as === userType
	);

	return formatUser(rawUser, true);
};

export const isUsernameAvailable = async (username) => {
	const users = await client.getUsers({
		search_engine: "v3",
		q: `app_metadata.usernamespace:"${username.toLowerCase()}"`,
		per_page: 10,
		page: 0
	});

	return isEmpty(users);
};

export const endCallSession = (id) => {
	return updateUser(id, {
		metadata: {
			app: {
				callSession: {}
			}
		}
	});
};

export const getClient = () => client;

export const updateEmail = async (userId, email, emailIdentity) => {
	// Check if email identity exists. If so, unlink and delete it for to be created
	if (!isEmpty(emailIdentity)) {
		await getClient().unlinkUsers({
			id: userId,
			user_id: emailIdentity,
			provider: "email"
		});
		await getClient().deleteUser({ id: `email|${emailIdentity}` });
	}
	// Use email to create a new account
	const emailUser = await getClient().createUser({
		email,
		connection: "email"
	});
	// Create an account link with the newly created account
	await getClient().linkUsers(userId, {
		user_id: emailUser.user_id,
		provider: "email"
	});

	return emailUser.user_id.split("|")[1]; // Remove email|xxx from id
};

/**
 * Create an OTP to be used in Authorization header from another service.
 * Creates a simple means for Machine-Machine communication with Authentication
 */
export const createOTP = async (id) => {
	const token = generateId(64);
	await updateUser(id, {
		metadata: {
			app: {
				otp: token
			}
		}
	});
	return token;
};

// Consume OTP token
export const consumeOTP = (id) =>
	updateUser(id, {
		metadata: {
			app: {
				otp: null
			}
		}
	});

/**
 * Get user via OTP (one-time-password token) and if retrieved, consume OTP
 *
 * @param   {string}  token    OTP Token
 * @param   {Object}  options  Find options
 *
 * @return  {Object}           User
 */
export const getUserByOTP = async (token, options) => {
	const { otp, ...user } = await findUser(
		{
			q: `app_metadata.otp:"${token}"`
		},
		options
	);

	if (!isEmpty(user)) {
		await consumeOTP(user.id);
	}

	return user;
};

export const assignOperatorRole = async (userId) => {
	const allRoles = await client.getRoles({ per_page: 50, page: 0 });

	await client.assignRolestoUser(
		{ id: userId },
		{
			roles: allRoles
				.filter((role) => role.name.toLowerCase() === "operator")
				.map((role) => role.id)
		}
	);
};
