/**
 * Get / Manage the currently authenticated user
 */

import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req);

	res.json(user);
});

export default handler;
