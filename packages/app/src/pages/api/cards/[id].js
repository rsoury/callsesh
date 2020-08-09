/**
 * Manage credit cards using Stripe.
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";

import removeCard from "@/server/handlers/cards/remove";
import updateCard from "@/server/handlers/cards/update";

const handler = getHandler();

handler.use(requireAuthentication).delete(removeCard).patch(updateCard);

export default handler;
