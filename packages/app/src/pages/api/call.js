/**
 * Create a Twilio Proxy Session where participants are the currently authed user and the operator in url param
 * 1. Check if both users exist and are active
 * 2. Check if operator is live and available
 * 3. Check if caller is a valid customer
 * 4. Initiate session
 *
 * If both parties are not available, check if they're already in a session together.
 */

import getHandler from "@/middleware";
import { requireAuthentication } from "@/middleware/auth";
import getCallSession from "@/server/handlers/call/get";
import createCallSession from "@/server/handlers/call/create";
import endCallSession from "@/server/handlers/call/end";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.get(getCallSession)
	.post(createCallSession)
	.delete(endCallSession);

export default handler;
