/**
 * Endpoint to manage notifications
 */

import { requireAuthentication } from "@/server/middleware/auth";
import getHandler from "@/server/middleware";
import startNotifications from "@/server/handlers/notify/start";
import stopNotifications from "@/server/handlers/notify/stop";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.post(startNotifications)
	.delete(stopNotifications);

export default handler;
