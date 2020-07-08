import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import endCallSession from "@/server/handlers/call/end";

const handler = getHandler();

handler.use(requireAuthentication).post("/end", endCallSession);

export default handler;
