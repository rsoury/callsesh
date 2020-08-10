/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import auth from "@/server/middleware/auth";
import { publicUrl } from "@/env-config";

export default async function authLogout(req, res) {
	const { return_url: returnUrl = `${publicUrl}/` } = req.query;
	await auth.handleLogin(req, res, {
		authParams: {
			action: "signup",
			prompt: "login",
			returnUrl
		},
		redirectTo: returnUrl
	});
}
