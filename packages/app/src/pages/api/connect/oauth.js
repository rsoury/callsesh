/**
 * Handle routing for Stripe Connect (Express) OAuth
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import connectOAuth from "@/server/handlers/connect/oauth";

const handler = getHandler();

handler.use(requireAuthentication).get(connectOAuth);

export default handler;
