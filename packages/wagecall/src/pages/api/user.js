/**
 * Manage the currently authenticated user
 */

import getHandler from "@/middleware";

const handler = getHandler();

handler.get(async (req, res) => {
	// await auth.handleProfile(req, res);

	return res.json({
		success: true
	});
});

export default handler;
