/**
 * Endpoint to manage notifications
 */

import { requireAuthentication } from "@/server/middleware/auth";
import getHandler from "@/server/middleware";
import startWork from "@/server/handlers/work/start";
import stopWork from "@/server/handlers/work/stop";

const handler = getHandler();

handler.use(requireAuthentication).post(startWork).delete(stopWork);

export default handler;
