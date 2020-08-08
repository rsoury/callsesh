/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 *
 * Note: Twilio Proxy works by receiving an inbound call (by the caller) and automatically making an outbound call to the Operator.
 */

import * as comms from "@/server/comms";
import * as authManager from "@/server/auth-manager";
import { delayEndSession } from "@/server/workflows";
import { CALL_SESSION_STATUS, CALL_SESSION_USER_TYPE } from "@/constants";
import syncIds from "@/utils/sync-identifiers";
import isOperatorMeterActive from "@/utils/is-operator-meter-active";

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
			await comms.updateDocument(
				syncIds.getCallSession(interactionSessionSid),
				{
					status: CALL_SESSION_STATUS.inCall
				}
			);

			logger.info("Call inititated. Prolong call session");
			break;
		case "completed":
		case "busy":
		case "no-answer": {
			// Curlys to isolate scope of case

			// Update sync document status back to active or metering
			let status = CALL_SESSION_STATUS.active;
			// Get the operator in the session to determine whether or not a meter is running
			const operatorUser = await authManager.getUserInSession(
				interactionSessionSid,
				CALL_SESSION_USER_TYPE.operator
			);
			if (isOperatorMeterActive(operatorUser)) {
				status = CALL_SESSION_STATUS.metering;
				logger.info(
					`Call ${outboundResourceStatus}. Call session status reverted to metering.`
				);
			} else {
				// Only expire and end the session if no meter is active
				// Small window before closing behaves as a window to reinitiate the call.
				await comms.expireSession(interactionSessionSid);
				await delayEndSession(interactionSessionSid);
				logger.info(
					`Call ${outboundResourceStatus}. Expiry added to session for recovery. Call session status is active.`
				);
			}
			await comms.updateDocument(
				syncIds.getCallSession(interactionSessionSid),
				{
					status
				}
			);
			break;
		}
		default:
			logger.info("No action taken");
			break;
	}

	return res.end();
}
