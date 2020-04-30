/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	const { return_url: returnUrl = "/" } = req.query;
	await auth.handleLogin(req, res, {
		authParams: {
			action: "signup"
		},
		redirectTo: returnUrl
	});
});

export default handler;
