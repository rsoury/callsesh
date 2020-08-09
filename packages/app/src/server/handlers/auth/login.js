/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import auth from "@/server/middleware/auth";

export default async function authLogin(req, res) {
	const { return_url: returnUrl = "/" } = req.query;
	await auth.handleLogin(req, res, {
		authParams: {
			returnUrl
		},
		redirectTo: returnUrl
	});
}
