/**
 * Assign currently authed username to target user notified list.
 */

import isEmpty from "is-empty";
import { getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";

export default function toggleWork(toggleStatus = false) {
	return async function toggleWorkRequestHandler(req, res) {
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

		// Assign current user username to target user contacts list.
		const { contacts = [] } = targetUser;

		const newContacts = contacts.filter(
			(contactUsername) => user.username !== contactUsername
		);
		if (toggleStatus) {
			newContacts.push(user.username);
		}

		// Update the target user with new contacts list
		await authManager.updateUser(targetUser.id, {
			metadata: {
				app: {
					contacts: newContacts
				}
			}
		});

		return res.json({
			success: true,
			contacts: newContacts
		});
	};
}
