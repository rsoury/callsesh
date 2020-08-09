/**
 * Handle routing for Stripe Connect (Express) OAuth
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import connect from "@/server/handlers/connect";

const handler = getHandler();

handler.use(requireAuthentication).get(connect);

export default handler;
