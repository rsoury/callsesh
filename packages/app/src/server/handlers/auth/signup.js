/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import auth from "@/middleware/auth";

export default async function authLogout(req, res) {
	const { return_url: returnUrl = "/" } = req.query;
	await auth.handleLogin(req, res, {
		authParams: {
			action: "signup",
			prompt: "login",
			returnUrl
		},
		redirectTo: returnUrl
	});
}
