/**
 * Get user
 * If user doesn't exist, 404 error.
 */

import getHandler from "@/middleware";

const handler = getHandler();

handler.get((req, res) => {
	const {
		query: { id }
	} = req;
	// Get user using id.

	res.json({ user: id });
});

export default handler;
