import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import getCallSession from "@/server/handlers/call/get";
import createCallSession from "@/server/handlers/call/create";

const handler = getHandler();

handler.use(requireAuthentication).get(getCallSession).post(createCallSession);

export default handler;
