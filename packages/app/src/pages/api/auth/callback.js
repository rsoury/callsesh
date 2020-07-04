/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import getHandler from "@/middleware";
import auth, { getUser } from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	try {
		const response = await auth.handleCallback(req, res);
		return response;
	} catch (error) {
		// With throw if user already authenticated. Check if user is retrievable with verified email. If verified, redirect to index page
		if (
			error.message === "Invalid request, an initial state could not be found"
		) {
			try {
				const user = await getUser(req);
				if ((user || {}).emailVerified) {
					res.writeHead(302, {
						Location: `/#email_verified=true`
					});
					return res.end();
				}
			} catch (e) {
				// Empty catch
			}
		}

		const status = error.status || 400;
		return res.status(status).json({
			success: false,
			code: status,
			message: error.message
		});
	}
});

export default handler;
