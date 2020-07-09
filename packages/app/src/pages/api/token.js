/**
 * Endpoint to manage token retrieval.
 * Only token at the moment is Twilio Connection Token
 */

import * as comms from "@/server/comms";
import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req);

	const token = comms.generateToken(user.id);

	res.json({
		success: true,
		token
	});
});

export default handler;
