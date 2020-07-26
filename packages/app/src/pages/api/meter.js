import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import toggleCallSessionMeter from "@/server/handlers/meter";

const handler = getHandler();

handler.use(requireAuthentication).post(toggleCallSessionMeter);

export default handler;
