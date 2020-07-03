import { initAuth0 } from "@auth0/nextjs-auth0";
import nextConnect from "next-connect";
import * as yup from "yup";
import camelCase from "lodash/camelCase";
import mapKeys from "lodash/mapKeys";
import isEmpty from "is-empty";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import ono from "@jsdevtools/ono";
import pick from "lodash/pick";

import { ERROR_TYPES } from "@/constants";
import { isPayoutsEnabled } from "@callsesh/utils/stripe";
import * as authManager from "@callsesh/utils/auth-manager";
import {
	auth0 as config,
	publicUrl,
	sessionSecret,
	isProd
} from "@/env-config";
import * as routes from "@/routes";

// Client Secret hidden for browser environment
const auth = initAuth0({
	domain: config.domain,
	clientId: config.clientId,
	scope: "openid profile email",
	redirectUri: `${publicUrl}${routes.api.auth.callback}`,
	postLogoutRedirectUri: `${publicUrl}/`,
	clientSecret: config.clientSecret,
	session: {
		// The secret used to encrypt the cookie.
		cookieSecret: sessionSecret,
		// The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
		cookieLifetime: 60 * 60 * 24 * 7, // Set to 7 days
		// (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
		// cookieDomain: publicUrl,
		// (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
		cookieSameSite: "lax",
		// (Optional) Store the id_token in the session. Defaults to false.
		storeIdToken: false,
		// (Optional) Store the access_token in the session. Defaults to false.
		storeAccessToken: false,
		// (Optional) Store the refresh_token in the session. Defaults to false.
		storeRefreshToken: false
	},
	oidcClient: {
		// (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
		httpTimeout: 2500,
		// (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
		clockTolerance: 10000
	}
});

/**
 * Safer sesson retrieval in case of bad auth values.
 */
export const getSession = async (req, ...params) => {
	let session = await auth.getSession(req, ...params).catch((e) => {
		if (e.message === "Bad hmac value") {
			return null;
		}
		throw e;
	});

	// For development environment, enable user-id in request header for API development
	if (!isProd && isEmpty(session) && !isEmpty(req.headers["x-debug-user"])) {
		const userData = await authManager.getUser(req.headers["x-debug-user"]);
		// emulate session
		session = {
			user: {
				name: userData.name,
				nickname: userData.nickname,
				family_name: userData.family_name,
				given_name: userData.given_name,
				picture: userData.picture,
				updated_at: userData.updated_at,
				sub: userData.user_id
			},
			createdAt: userData.created_at
		};

		if (isEmpty(session)) {
			throw new Error("Session does not exist");
		}
	}

	return session;
};

/**
 * Next Connect middleware wrapper around auth.requireAuthentication
 *
 * Pass authentication if platform in development and x-debug-user header passed.
 */
export const requireAuthentication = nextConnect().use((req, res, next) => {
	if (!isProd && !isEmpty(req.headers["x-debug-user"])) {
		return next();
	}
	return auth.requireAuthentication(() => {
		next();
	})(req, res);
});

const registeredUserSchema = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	nickname: yup.string().required(),
	picture: yup.string().required(),
	sub: yup.string().required(),
	updatedAt: yup.string().required(),
	username: yup.string().required(),
	gender: yup.string().required(),
	dob: yup.string().required(),
	phoneNumber: yup.string().required(),
	familyName: yup.string().required(),
	givenName: yup.string().required(),
	country: yup.string().required(),
	currency: yup.string().required()
});

/**
 * Takes raw Auth0 user data and the current session to construct user output.
 *
 * @param   {Object}  session      Current user session
 * @param   {Object}  rawUser      Auth0 raw user data
 * @param   {boolean} withContext  Option: with or without context
 *
 * @return  {Object}               User object
 */
const constructUser = async (
	session,
	rawUser,
	{ withContext = false } = {}
) => {
	const {
		user_metadata: userMetadata = {},
		app_metadata: appMetadata = {},
		phone_number: phoneNumber,
		roles,
		family_name: familyName = "",
		given_name: givenName = "",
		picture, // Use picture from user data as session picture will be old
		identities,
		...userData
	} = rawUser;

	// Replace all session values with latest user data values where they exist.
	const sessionUser = Object.entries(session.user).reduce(
		(result, [key, value]) => {
			if (typeof userData[key] !== "undefined") {
				result[key] = userData[key];
			} else {
				result[key] = value;
			}
			return result;
		},
		{}
	);

	// Get Stripe Connect info
	const payouts = {
		setup: !isEmpty(appMetadata.stripeConnectId),
		enabled: false
	};
	if (payouts.setup) {
		payouts.enabled = await isPayoutsEnabled(appMetadata.stripeConnectId);
	}

	// Get publicly viewable call session data
	const { callSession = {} } = appMetadata;

	// Get email attributes
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

	let user = {
		id: sessionUser.sub,
		...sessionUser,
		...userMetadata,
		callSession: pick(callSession, ["as", "with"]),
		phoneNumber,
		familyName,
		givenName,
		picture,
		roles: roles.map((role) => ({
			name: role.name,
			description: role.description
		})),
		...emailAttributes,
		payouts
	};
	if (withContext) {
		user = {
			...user,
			roles,
			...userData,
			...appMetadata, // will include call session related data by default.
			callSession,
			...emailAttributesWithContext
		};
	}
	user = mapKeys(user, (value, key) => camelCase(key));

	if (isEmpty(user.country)) {
		// Default to user phone number
		const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
		user.country = parsedPhoneNumber.country;
		user.currency = user.country === "AU" ? "AUD" : "USD";
	}

	let isRegistered = false;
	try {
		await registeredUserSchema.validate(user);
		isRegistered = true;
	} catch (e) {
		// console.error(e);
	}

	user.isRegistered = isRegistered;

	return user;
};

/**
 * Get public user using Auth0 Nodejs Management API
 *
 * @param   {Object}  req  Request
 * @param   {Object}  options
 *
 * @return  {Object}
 */
export const getUser = async (req, options) => {
	const session = await getSession(req);

	// return empty object if session empty --- user not authenticated
	if (isEmpty(session)) {
		return {};
	}

	const [{ blocked, ...rawUser }, roles] = await Promise.all([
		authManager.getUser(session.user.sub),
		authManager.getUserRoles(session.user.sub)
	]);
	if (blocked) {
		throw ono({ type: ERROR_TYPES.userBlocked }, `The user is blocked.`);
	}

	return constructUser(
		session,
		{
			...rawUser,
			roles
		},
		options
	);
};

/**
 * Update user data and return constructed user value
 * Use when you want to update and construct the user.
 *
 * @param   {Object}  req      Request
 * @param   {Object}  params  Update parameters
 * @param   {Object}  options  construct options
 *
 * @return  {Object}           User
 */
export const updateAndGetUser = async (req, params, options) => {
	const session = await getSession(req);

	// return empty object if session empty --- user not authenticated
	if (isEmpty(session)) {
		return {};
	}

	const [{ blocked, ...rawUser }, roles] = await Promise.all([
		authManager.updateUser(session.user.sub, params),
		authManager.getUserRoles(session.user.sub)
	]);
	if (blocked) {
		throw ono({ type: ERROR_TYPES.userBlocked }, `The user is blocked.`);
	}

	return constructUser(
		session,
		{
			...rawUser,
			roles
		},
		options
	);
};

export default auth;
