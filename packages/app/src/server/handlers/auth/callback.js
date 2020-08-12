/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

import isEmpty from "is-empty";
import auth, { getUser } from "@/server/middleware/auth";
import * as chat from "@/server/chat";
import * as routes from "@/routes";
import handleException from "@/utils/handle-exception";

export default async function authCallback(req, res) {
	try {
		const response = await auth.handleCallback(req, res);
		return response;
	} catch (error) {
		// With throw if user already authenticated. Check if user is retrievable with verified email. If verified, redirect to index page
		if (
			error.message ===
				"Invalid request, an initial state could not be found" ||
			error.message === "state missing from the response"
		) {
			try {
				const user = await getUser(req, { withContext: true });
				if (isEmpty(user)) {
					res.writeHead(302, {
						Location: routes.page.login
					});
					return res.end();
				}
				if ((user || {}).emailVerified) {
					if (!isEmpty(user.chatUser)) {
						// Update chat user email verified status
						try {
							await chat.updateUser(user.chatUser.id, { verified: true });
						} catch (e) {
							handleException(e);
							req.log.error(
								`Failed to update Chat User email verified status`,
								e
							);
						}
					}
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
