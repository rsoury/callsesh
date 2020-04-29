/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	await auth.handleLogin(req, res);
});
