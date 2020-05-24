/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 */

import getHandler from "@/middleware";
import * as comms from "@/comms";
import request from "@/utils/request";
import { callSessionManagerUrl } from "@/env-config";

const handler = getHandler();

handler.post(async (req, res) => {
	const {
		outboundResourceType,
		outboundResourceStatus,
		interactionSessionSid
	} = req.body;

	const logParams = { requestBody: { ...req.body } };

	if (outboundResourceType !== "call") {
		req.log.error("Resource type is not a call", logParams);
	}

	// Call initiated
	if (outboundResourceStatus === "initiated") {
		// Remove TTL and dateExpiry from session -- ie. prolong the session
		// dateExpiry may be set when call ended, but then re-initiated.
		await comms.getProxyService().sessions(interactionSessionSid).update({
			dateExpiry: null,
			ttl: 0
		});
	}

	if (
		outboundResourceStatus === "completed" ||
		outboundResourceStatus === "no-answer"
	) {
		// Add expiry in 60 seconds -- end session in 60 seconds.
		// Behaves as a window to reinitiate the call.
		const t = new Date();
		t.setSeconds(t.getSeconds() + 60);
		await comms.getProxyService().sessions(interactionSessionSid).update({
			dateExpiry: t.toISOString(),
			ttl: 0
		});
	}

	if (outboundResourceStatus === "completed") {
		// Trigger Call Sesson Manager
		await request.post(callSessionManagerUrl, {
			...req.body
		});
	}

	return res.end();
});

export default handler;
