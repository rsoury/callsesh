/**
 * Get / Manage the currently authenticated user
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	await auth.handleProfile(req, res, { refetch: true });
});

export default handler;
