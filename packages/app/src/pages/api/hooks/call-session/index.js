/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 *
 * Note: Twilio Proxy works by receiving an inbound call (by the caller) and automatically making an outbound call to the Operator.
 */

import getHandler from "@/middleware";
import * as comms from "@callsesh/utils/comms";
import request from "@/utils/request";
import { callSessionManagerUrl } from "@/env-config";

const handler = getHandler();

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

handler.post(async (req, res) => {
	const {
		outboundResourceType,
		outboundResourceStatus,
		interactionSessionSid,
		inboundResourceType,
		inboundResourceSid
	} = req.body;

	const logParams = { requestBody: { ...req.body } };

	if (inboundResourceType !== "call") {
		req.log.warn(`Inbound interaction is not a call`, logParams);
	}
	// On the inbound call interaction, the outbound call may have not been initiated.
	if (typeof outboundResourceType === "string") {
		if (outboundResourceType !== "call") {
			req.log.warn("Outbound interaction is not a call", logParams);
		}
	}

	switch (outboundResourceStatus) {
		case "initiated":
			// Give the call session an expiry of a day when initiating a call.
			await prolongSession(interactionSessionSid);
			req.log.info("Call inititated. Prolong call session", logParams);
			break;
		case "completed":
			await expireSession(interactionSessionSid);
			// Trigger Call Session Manager
			await request.post(callSessionManagerUrl, {
				...req.body
			});
			req.log.info(
				"Call completed. Expiry added to session for recovery",
				logParams
			);
			break;
		case "busy":
		case "no-answer":
			await expireSession(interactionSessionSid);
			// Trigger Call Session Manager -- Even if no answer, we need to officially close the call session.
			await request.post(callSessionManagerUrl, {
				...req.body
			});
			// On no answer, end the call programmatically
			await comms
				.getClient()
				.calls(inboundResourceSid)
				.update({ status: "completed" });

			req.log.info(
				"No answer. Expiry added to session for recovery. Inbound call completed to prevent voice bank.",
				logParams
			);
			break;
		default:
			req.log.info("No action taken", logParams);
			break;
	}

	return res.end();
});

export default handler;
