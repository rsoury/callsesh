/* eslint-disable prefer-destructuring */

import isEmpty from "is-empty";
import Twilio from "twilio";
import nanoid from "nanoid";

import { twilio as config } from "@/env-config";
import { SMS_SENDER_ID } from "@/constants";

const client = new Twilio(config.apiKey, config.apiSecret, {
	accountSid: config.accountSid
});
const proxyService = client.proxy.services(config.proxyServiceSid);
// const syncService = client.sync.services(config.syncServiceSid);

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

// const {VoiceResponse} = Twilio.twiml;

export const call = (phoneNumber, fromPhoneNumber) => {
	// const response = new VoiceResponse();
	// response.dial(fromPhoneNumber);

	return client.calls.create({
		to: phoneNumber,
		from: fromPhoneNumber,
		twiml: `<Response><Dial><Number>${fromPhoneNumber}</Number></Dial></Response>`
	});
};

/**
 * Get Twilio client
 */
export const getClient = () => client;

/**
 * To force end session, hang up calls and close the session
 * Hang up by getting the last call inititation interaction, and completing the corresponding calls for each participant
 */
export const endSession = async (sessionId) => {
	// Close session
	await proxyService.sessions(sessionId).update({ status: "closed" });

	// Hang up
	const interactions = await proxyService
		.sessions(sessionId)
		.interactions.list({ limit: 99999999 });
	interactions.reverse();

	const lastCallInitiation = interactions.find(
		(interaction) =>
			interaction.inboundResourceType === "call" &&
			interaction.outboundResourceStatus === "initiated"
	);
	if (isEmpty(lastCallInitiation)) {
		throw new Error("Call has never been initiated");
	}

	await Promise.all([
		client
			.calls(lastCallInitiation.inboundResourceSid)
			.update({ status: "completed" }),
		client
			.calls(lastCallInitiation.outboundResourceSid)
			.update({ status: "completed" })
	]);

	return true;
};

/**
 * Chat and Sync services work by using a unique Twilio based session token to make connections
 */
// Access Token used for Video, IP Messaging, and Sync
const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const SyncGrant = AccessToken.SyncGrant;

export const generateToken = (identity = 0) => {
	const token = new AccessToken(
		config.accountSid,
		config.apiKey,
		config.apiSecret
	);

	// Assign the provided identity or generate a random one
	token.identity = identity || nanoid(32);

	if (config.chatServiceSid) {
		// Create a "grant" which enables a client to use IPM as a given user,
		// on a given device
		const chatGrant = new ChatGrant({
			serviceSid: config.chatServiceSid
		});
		token.addGrant(chatGrant);
	}

	if (config.syncServiceSid) {
		// Point to a particular Sync service, or use the account default to
		// interact directly with Functions.
		const syncGrant = new SyncGrant({
			serviceSid: config.syncServiceSid || "default"
		});
		token.addGrant(syncGrant);
	}

	// Serialize the token to a JWT string and include it in a JSON response
	return {
		identity: token.identity,
		token: token.toJwt()
	};
};
