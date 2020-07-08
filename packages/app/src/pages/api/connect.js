/**
 * Handle routing for Stripe Connect (Express) OAuth
 */

import getHandler from "@/middleware";
import { requireAuthentication } from "@/middleware/auth";
import connect from "@/server/handlers/connect";
import connectOAuth from "@/server/handlers/connect/oauth";

const handler = getHandler();

handler.use(requireAuthentication).get("/oauth", connectOAuth).get(connect);

export default handler;
