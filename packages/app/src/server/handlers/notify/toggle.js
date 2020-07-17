/**
 * Assign currently authed username to target user notified list.
 */

import isEmpty from "is-empty";
import { getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";

export default function toggleNotifications(toggleStatus = false) {
	return async function toggleNotificationsRequestHandler(req, res) {
		const { id: username } = req.query;

		// Get current user
		const user = await getUser(req, { withContext: true });

		// Get user id for target user
		const targetUser = await authManager.getUserByUsername(username, {
			withContext: true
		});

		if (isEmpty(targetUser)) {
			return res.status(400).json({
				success: false,
				code: 400,
				message: "Target user not found"
			});
		}

		// Assign current user username to target user notified list.
		const { notified = [] } = targetUser;

		const newNotified = notified.filter(
			(notifiedUsername) => user.username !== notifiedUsername
		);
		if (toggleStatus) {
			newNotified.push(user.username);
		}

		// Update the target user with new notified list
		await authManager.updateUser(targetUser.id, {
			metadata: {
				app: {
					notified: newNotified
				}
			}
		});

		return res.json({
			success: true,
			notified: newNotified
		});
	};
}
