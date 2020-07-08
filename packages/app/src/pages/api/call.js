import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import getCallSession from "@/server/handlers/call/get";
import createCallSession from "@/server/handlers/call/create";
import endCallSession from "@/server/handlers/call/end";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.post("/end", endCallSession)
	.get(getCallSession)
	.post(createCallSession);

export default handler;
