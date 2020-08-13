/**
 * Get deep contact data for the given user's contact list.
 */

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";
import getContacts from "@/server/handlers/contacts/get";

const handler = getHandler();

handler.use(requireAuthentication).get(getContacts);

export default handler;
