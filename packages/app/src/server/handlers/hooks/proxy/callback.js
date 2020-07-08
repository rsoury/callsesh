/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 *
 * Note: Twilio Proxy works by receiving an inbound call (by the caller) and automatically making an outbound call to the Operator.
 */

import * as comms from "@/server/comms";
import { delayEndSession } from "@/server/workflows";

const expireSession = (sessionId) => {
	// Overwrite expiry to 60 seconds -- end session in 60 seconds.
	// Behaves as a window to reinitiate the call.
	const t = new Date();
	t.setSeconds(t.getSeconds() + 60);
	return comms.getProxyService().sessions(sessionId).update({
		dateExpiry: t
	});
};

const prolongSession = (sessionId) => {
	// Add expiry of a day -- should be more than enough to conduct a phone call.
	const t = new Date();
	t.setDate(t.getDate() + 1);
	return comms.getProxyService().sessions(sessionId).update({
		dateExpiry: t
	});
};

export default async function proxyCallbackHook(req, res) {
	const {
		outboundResourceType,
		outboundResourceStatus,
		interactionSessionSid,
		inboundResourceType
	} = req.body;

	const logger = req.log.child({ requestBody: { ...req.body } });

	if (inboundResourceType !== "call") {
		logger.warn(`Inbound interaction is not a call`);
	}
	// On the inbound call interaction, the outbound call may have not been initiated.
	if (typeof outboundResourceType === "string") {
		if (outboundResourceType !== "call") {
			logger.warn("Outbound interaction is not a call");
		}
	}

	switch (outboundResourceStatus) {
		case "initiated":
			// Give the call session an expiry of a day when initiating a call.
			await prolongSession(interactionSessionSid);
			// Update the outbound call to detect machine and hangup accordingly.

			logger.info("Call inititated. Prolong call session");
			break;
		case "completed":
		case "busy":
		case "no-answer":
			await expireSession(interactionSessionSid);
			await delayEndSession(interactionSessionSid);
			logger.info(
				`Call ${outboundResourceStatus}. Expiry added to session for recovery. Inbound call marked completed to prevent voice bank.`
			);
			break;
		default:
			logger.info("No action taken");
			break;
	}

	return res.end();
}
