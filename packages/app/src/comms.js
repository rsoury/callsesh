import Twilio from "twilio";
import { twilio as config } from "@/env-config";

const client = Twilio(config.accountSid, config.authToken);
const proxyService = client.proxy.services(config.proxyServiceSid);
const verifyService = client.verify.services(config.verifyServiceId);

/**
 * Create a Proxy session and add two participants to it.
 *
 * @var  {Object} caller { name, phoneNumber }
 * @var {operator} operator { name, phoneNumber }
 */
export const createSession = async (caller, operator) => {
	// Create a session for voice only with a ttl of 30 seconds -- means if goes unused, the session will expire
	const session = await proxyService.sessions.create({
		mode: "voice-only",
		ttl: 30
	});

	// Create caller participant first to ensure the session is even usable.
	const callerParticipant = await proxyService
		.sessions(session.sid)
		.participants.create({
			friendlyName: caller.name,
			identifier: caller.phoneNumber
		});

	// Create operator participant
	const operatorParticipant = await proxyService
		.sessions(session.sid)
		.participants.create({
			friendlyName: operator.name,
			identifier: operator.phoneNumber
		});

	return {
		session,
		caller: callerParticipant,
		operator: operatorParticipant
	};
};

/**
 * Create Phone Number verification
 */
export const verify = (phoneNumber) => {
	return verifyService.verifications.create({
		to: phoneNumber,
		channel: "sms"
	});
};

/**
 * Check verification against Twilio and return a boolean
 *
 * @return {boolean}
 */
export const verificationCheck = (phoneNumber, code) => {
	return verifyService.verificationChecks
		.create({
			to: phoneNumber,
			code
		})
		.then((check) => check.status === "approved");
};
