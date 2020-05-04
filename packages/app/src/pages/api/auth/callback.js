/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	try {
		await auth.handleCallback(req, res);
	} catch (error) {
		const status = error.status || 400;
		res.status(status).end({
			success: false,
			code: status,
			message: error.message
		});
	}
});

export default handler;
