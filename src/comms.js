import Twilio from "twilio";
import { twilio as config } from "@/env-config";

const client = Twilio(config.accountSid, config.authToken);
const proxy = client.proxy.services(config.proxyServiceSid);

/**
 * Create a Proxy session and add two participants to it.
 *
 * @var  {Object} caller { name, phoneNumber }
 * @var {operator} operator { name, phoneNumber }
 */
export const createSession = async (caller, operator) => {
	// Create a session for voice only with a ttl of 30 seconds -- means if goes unused, the session will expire
	const session = await proxy.sessions.create({ mode: "voice-only", ttl: 30 });

	// Create caller participant first to ensure the session is even usable.
	const callerParticipant = await proxy
		.sessions(session.sid)
		.participants.create({
			friendlyName: caller.name,
			identifier: caller.phoneNumber
		});

	// Create operator participant
	const operatorParticipant = await proxy
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
