import isEmpty from "is-empty";
import auth0 from "auth0-js";
import { auth0 as config, publicUrl } from "@/env-config";
import appendReturnUrl from "@/utils/append-return-url";

/**
 * Note: Auth0 does not see localhost:3000 as a valid first-party domain, hence the consent page.
 * See: https://community.auth0.com/t/how-do-i-skip-the-consent-page-for-my-api-authorization-flow/6035/2
 * STILL does it... probably just worth using hosted page with React.
 */
const auth = new auth0.WebAuth({
	clientID: config.clientId,
	domain: config.domain,
	redirectUri: appendReturnUrl(`${publicUrl}/auth`),
	responseType: "token id_token"
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
				phoneNumber,
				authParams: {
					prompt: "none"
				}
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

export const verify = (phoneNumber, verificationCode) => {
	if (isEmpty(phoneNumber)) {
		throw new Error(`Start requires Phone Number`);
	}
	if (isEmpty(verificationCode)) {
		throw new Error(`Verify requires verification code`);
	}
	return new Promise((resolve, reject) => {
		auth.passwordlessVerify(
			{
				connection: "sms",
				verificationCode,
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
