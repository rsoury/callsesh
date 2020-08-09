/**
 * Get / Manage the currently authenticated user
 */

import { getUser } from "@/server/middleware/auth";

export default async function getUserHandler(req, res) {
	const user = await getUser(req);

	res.json(user);
}
