/**
 * Endpoint to manage logouts
 */

import auth from "@/server/middleware/auth";

export default async function authLogout(req, res) {
	await auth.handleLogout(req, res);
}
