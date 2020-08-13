/**
 * Get deep contact data for the given user's contact list.
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import getContacts from "@/server/handlers/contacts/get";
import startContactsSession from "@/server/handlers/contacts/start";

const handler = getHandler();

handler.use(requireAuthentication).get(getContacts).post(startContactsSession);

export default handler;
