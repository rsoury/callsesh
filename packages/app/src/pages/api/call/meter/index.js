import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import startCallSessionMeter from "@/server/handlers/meter/start";

const handler = getHandler();

handler.use(requireAuthentication).post(startCallSessionMeter);

export default handler;
