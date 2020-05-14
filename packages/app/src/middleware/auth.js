import { initAuth0 } from "@auth0/nextjs-auth0";
import nextConnect from "next-connect";
import * as yup from "yup";
import camelCase from "lodash/camelCase";
import mapKeys from "lodash/mapKeys";
import isEmpty from "is-empty";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import stripe from "@/stripe";

import * as authManager from "@/auth-manager";
import { auth0 as config, publicUrl, sessionSecret } from "@/env-config";
import * as routes from "@/routes";

// Client Secret hidden for browser environment
const auth = initAuth0({
	domain: config.domain,
	clientId: config.clientId,
	scope: "openid profile",
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
 * Next Connect middleware wrapper around auth.requireAuthentication
 */
export const requireAuthentication = nextConnect().use((req, res, next) =>
	auth.requireAuthentication(() => {
		next();
	})(req, res)
);

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
 * Get public user using Auth0 Nodejs Management API
 *
 * @param   {Object}  req  Request
 * @param   {Object}  options
 *
 * @return  {Object}
 */
export const getUser = async (req, { withContext = false } = {}) => {
	const session = await auth.getSession(req);

	// return empty object if session empty --- user not authenticated
	if (isEmpty(session)) {
		return {};
	}

	const { blocked, ...rawUser } = await authManager.getUser(session.user.sub);
	if (blocked) {
		throw new Error(`The user is blocked.`);
	}

	const {
		user_metadata: userMetadata,
		app_metadata: appMetadata,
		phone_number: phoneNumber,
		roles,
		family_name: familyName,
		given_name: givenName,
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
		const {
			charges_enabled: chargesEnabled,
			payouts_enabled: payoutsEnabled
		} = await stripe.accounts.retrieve(appMetadata.stripeConnectId);
		payouts.enabled = chargesEnabled && payoutsEnabled;
	}

	let user = {
		id: sessionUser.sub,
		...sessionUser,
		...userMetadata,
		phoneNumber,
		familyName,
		givenName,
		roles: roles.map((role) => ({
			name: role.name,
			description: role.description
		})),
		payouts
	};
	if (withContext) {
		user = {
			...user,
			roles,
			...userData,
			...appMetadata
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

export default auth;
