/**
 * Resend email for verification or sign in
 */

import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@callsesh/utils/auth-manager";

const handler = getHandler();

handler.use(requireAuthentication).post(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	// If user is already verified, dont trigger reverification.
	if (user.emailVerified) {
		return res.json({
			success: false
		});
	}

	// This will just reset the user email identity to trigger a resend.
	await authManager.updateEmail(user.id, user.email, user.emailIdentity);

	return res.json({
		success: true
	});
});

export default handler;
