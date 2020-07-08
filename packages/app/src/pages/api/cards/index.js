/**
 * Manage credit cards using Stripe.
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";

import addCard from "@/server/handlers/cards/add";
import listCards from "@/server/handlers/cards/list";

const handler = getHandler();

handler.use(requireAuthentication).get(listCards).post(addCard);

export default handler;
