/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 *
 * Note: Twilio Proxy works by receiving an inbound call (by the caller) and automatically making an outbound call to the Operator.
 */

import * as comms from "@/server/comms";
import { delayEndSession } from "@/server/workflows";
import { CALL_SESSION_STATUS } from "@/constants";

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
			await comms.prolongSession(interactionSessionSid);

			// Update sync document status to in-call
			await comms.updateDocument(`CallSession:${interactionSessionSid}`, {
				status: CALL_SESSION_STATUS.inCall
			});

			logger.info("Call inititated. Prolong call session");
			break;
		case "completed":
		case "busy":
		case "no-answer":
			// Small window before closing behaves as a window to reinitiate the call.
			await comms.expireSession(interactionSessionSid);
			await delayEndSession(interactionSessionSid);
			// Update sync document status to in-call
			await comms.updateDocument(`CallSession:${interactionSessionSid}`, {
				status: CALL_SESSION_STATUS.active
			});
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
