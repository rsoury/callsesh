import isEmpty from "is-empty";
import auth0 from "auth0-js";
import { authConfig as config } from "@/env-config";

const auth = new auth0.WebAuth({
	clientID: config.clientID,
	domain: config.auth0Domain,
	redirectUri: config.callbackURL,
	responseType: "code",
	...config.internalOptions
});

export const start = (phoneNumber) => {
	if (isEmpty(phoneNumber)) {
		throw new Error(`Start requires Phone Number`);
	}
	return new Promise((resolve, reject) => {
		auth.passwordlessStart(
			{
				connection: "sms",
				send: "code",
				phoneNumber
			},
			(err, res) => {
				if (err) {
					return reject(err);
				}

				return resolve(res);
			}
		);
	});
};

export const verify = (phoneNumber, verificationCode, additionalData = {}) => {
	if (isEmpty(phoneNumber)) {
		throw new Error(`Start requires Phone Number`);
	}
	if (isEmpty(verificationCode)) {
		throw new Error(`Verify requires verification code`);
	}
	return new Promise((resolve, reject) => {
		auth.passwordlessLogin(
			{
				connection: "sms",
				verificationCode,
				phoneNumber,
				appState: additionalData
			},
			(err, res) => {
				if (err) {
					return reject(err);
				}

				return resolve(res);
			}
		);
	});
};

/**
 * Simple method to check action and determine whether to signup
 */
export const shouldSignup = () => config.internalOptions?.action === "signup";

/**
 * Get return url
 */
export const getReturnUrl = () =>
	config.internalOptions?.returnUrl || "https://www.callsesh.com";
