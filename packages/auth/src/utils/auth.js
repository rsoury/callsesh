import isEmpty from "is-empty";
import auth0 from "auth0-js";
// import appendReturnUrl from "@/utils/append-return-url";

// TODO: Get config from hosted page window object.
const config = {
	clientId: "",
	domain: ""
};

const auth = new auth0.WebAuth({
	clientID: config.clientId,
	domain: config.domain,
	// redirectUri: appendReturnUrl(`${publicUrl}/auth`),
	audience: "https://wagecall.auth0.com/api/v2/",
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
