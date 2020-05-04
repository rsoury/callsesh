/**
 * Get / Manage the currently authenticated user
 */

/* eslint-disable */
import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const isTrue = (v) => v === "true" || v === true;

const handler = getHandler();

handler.get(async (req, res) => {
	await auth.handleProfile(req, res, { refetch: isTrue(req.query.refetch) });
});

export default handler;
