import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import stopCallSessionMeter from "@/server/handlers/meter/stop";

const handler = getHandler();

handler.use(requireAuthentication).post(stopCallSessionMeter);

export default handler;
