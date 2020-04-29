/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	// TODO: Use a cookie to store the return_url before login attempt
	await auth.handleCallback(req, res, { redirectTo: "/" });
});
