/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import auth, { getUser } from "@/server/middleware/auth";
import * as chat from "@/server/chat";

export default async function authCallback(req, res) {
	try {
		const response = await auth.handleCallback(req, res);
		return response;
	} catch (error) {
		// With throw if user already authenticated. Check if user is retrievable with verified email. If verified, redirect to index page
		if (
			[
				"Invalid request, an initial state could not be found",
				"state missing from the response"
			].includes(error.message)
		) {
			try {
				const user = await getUser(req, { withContext: true });
				if ((user || {}).emailVerified) {
					// Update chat user email verified status
					await chat.updateUser(user.chatUser.id, { verified: true });
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
}
