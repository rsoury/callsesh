import Twilio from "twilio";
import { twilio as config } from "@/env-config";

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
	// Create a session for voice only with a ttl of 45 seconds -- means if goes unused, the session will expire
	const session = await proxyService.sessions.create({
		mode: "voice-only",
		ttl: 45,
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
