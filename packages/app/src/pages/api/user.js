/**
 * Get / Manage the currently authenticated user
 */

import getUser from "@/server/handlers/user/get";
import createUser from "@/server/handlers/user/create";
import updateUser from "@/server/handlers/user/update";

import getHandler from "@/server/middleware";
import { requireAuthentication } from "@/server/middleware/auth";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.get(getUser)
	.post(createUser)
	.patch(updateUser);

export default handler;
