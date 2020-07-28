/**
 * Endpoint to manage token retrieval.
 * Only token at the moment is Twilio Connection Token
 */

import * as comms from "@/server/comms";
import * as chat from "@/server/chat";
import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import { chat as chatConfig } from "@/env-config";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.get("/api/token", async (req, res) => {
		const user = await getUser(req);

		const token = comms.generateToken(user.id);

		res.json({
			success: true,
			token
		});
	})
	// Accessed from iframe in case sso failed?
	.get("/api/token/chat", async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", chatConfig.url); // this is the rocket.chat URL
		res.setHeader("Access-Control-Allow-Credentials", "true");

		const user = await getUser(req, { withContext: true });

		// Login to chat service and get encrypted password
		const { data = {} } = await chat.login(
			user.username,
			user.chatUser.password
		);
		const token = data.authToken || "";

		res.json({
			success: true,
			token,
			loginToken: token
		});
	});

export default handler;
