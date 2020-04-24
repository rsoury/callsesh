/**
 * Create a Twilio Proxy Session where participants are the currently authed user and the operator in url param
 * 1. Check if both users exist and are active
 * 2. Check if operator is live
 * 3. Initiate session
 */

// import * as comms from "@/comms";
import getHandler from "@/middleware";

const handler = getHandler();

handler.post((req, res) => {
	const {
		query: { id }
	} = req;
	// Get user using id.

	res.json({ user: id });
});

export default handler;
