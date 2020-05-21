/**
 * Twilio Proxy Service Callback Url.
 * Fires on each interaction.
 * Used to update the call session expiry details, to summarise and charge calls.
 */

import getHandler from "@/middleware";

const handler = getHandler();

handler.post(async (req, res) => {
	console.log(req.body);

	return res.end();
});

export default handler;
