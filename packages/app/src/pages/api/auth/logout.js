/**
 * Endpoint to manage logouts
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	await auth.handleLogout(req, res);
});
