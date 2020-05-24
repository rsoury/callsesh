/**
 * Check whether or not a username is available.
 */

import isEmpty from "is-empty";
import getHandler from "@/middleware";
import { requireAuthentication } from "@/middleware/auth";
import * as authManager from "@callsesh/utils/auth-manager";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const { username } = req.query;

	if (isEmpty(username)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Username required"
		});
	}

	const usernameAvailable = await authManager.isUsernameAvailable(username);

	if (usernameAvailable) {
		return res.json({
			success: true,
			available: true
		});
	}

	return res.json({
		success: true,
		available: false
	});
});

export default handler;
