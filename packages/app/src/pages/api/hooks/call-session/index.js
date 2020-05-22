/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details
 */

import getHandler from "@/middleware";

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
	}
	if (
		outboundResourceStatus === "completed" ||
		outboundResourceStatus === "no-answer"
	) {
		// Add expiry in 60 seconds -- end session in 60 seconds.
		// Behaves as a window to reinitiate the call.
	}
	if (outboundResourceStatus === "completed") {
		// Check to see if an initiation fee has been applied. If not, apply it.
		// Consilidate all fees.
	}

	return res.end();
});

export default handler;
