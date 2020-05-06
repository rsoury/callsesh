import { initAuth0 } from "@auth0/nextjs-auth0";
import nextConnect from "next-connect";
import * as yup from "yup";
import camelCase from "lodash/camelCase";
import mapKeys from "lodash/mapKeys";

import * as authManager from "@/auth-manager";
import { auth0 as config, publicUrl, sessionSecret } from "@/env-config";
import { api as apiRoutes } from "@/routes";

// Client Secret hidden for browser environment
const auth = initAuth0({
	domain: config.domain,
	clientId: config.clientId,
	scope: "openid profile",
	redirectUri: `${publicUrl}${apiRoutes.auth.callback}`,
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
 * Next Connect middleware wrapper around auth.requireAuthentication
 */
export const requireAuthentication = nextConnect().use((req, res, next) =>
	auth.requireAuthentication(() => {
		next();
	})(req, res)
);

const registeredUserSchema = yup.object().shape({
	name: yup.string().required(),
	nickname: yup.string().required(),
	picture: yup.string().required(),
	sub: yup.string().required(),
	updatedAt: yup.string().required(),
	roles: yup.array().of(yup.string()).default([]),
	username: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	gender: yup.string(),
	dob: yup.object().shape({
		day: yup.string(),
		month: yup.string(),
		year: yup.string()
	}),
	localCountry: yup.string()
});

/**
 * Get public user using Auth0 Nodejs Management API
 *
 * @param   {Object}  req  Request
 *
 * @return  {Object}
 */
export const getUser = async (req) => {
	const session = await auth.getSession(req);

	const userData = await authManager.getUser(session.user.sub);
	let user = {
		...session.user,
		...userData.user_metadata
	};
	user = mapKeys(user, (value, key) => camelCase(key));

	let isRegistered = false;
	try {
		await registeredUserSchema.validate(user);
		isRegistered = true;
	} catch (e) {
		// Empty catch
	}

	user.isRegistered = isRegistered;

	return user;
};

export default auth;
