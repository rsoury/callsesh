/**
 * Endpoint to manage logouts
 */

import auth from "@/middleware/auth";

export default async function authLogout(req, res) {
	await auth.handleLogout(req, res);
}
