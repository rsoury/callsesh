import Twilio from "twilio";
import { twilio as config } from "@/env-config";
import { SMS_SENDER_ID } from "@/constants";

const client = Twilio(config.accountSid, config.authToken);
const proxyService = client.proxy.services(config.proxyServiceSid);

/**
 * Create a Proxy session and add two participants to it.
 *
 * @var  {Object} caller   { name, phoneNumber }
 * @var  {Object} operator { name, phoneNumber }
 * @var  {Object} sessionParams { name, phoneNumber }
 */
export const createSession = async (caller, operator, sessionParams = {}) => {
	// Create a session for voice only
	const session = await proxyService.sessions.create({
		mode: "voice-only",
		...sessionParams
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
 * Get proxy service helper
 */
export const getProxyService = () => proxyService;

/**
 * SMS Helper
 *
 * @param   {string}  phoneNumber
 * @param   {string}  messageBody
 *
 * @return  {Promise}
 */
export const sms = (phoneNumber, messageBody) => {
	return client.messages.create({
		body: messageBody,
		from: SMS_SENDER_ID,
		to: phoneNumber
	});
};
