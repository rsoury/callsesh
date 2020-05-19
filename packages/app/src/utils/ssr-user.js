/**
 * Get user and handle error in ssr context
 */

import { getUser } from "@/middleware/auth";
import { page as pageRoutes } from "@/routes";
import { ERROR_TYPES } from "@/constants";
import handleException from "@/utils/handle-exception";
import { isProd } from "@/env-config";

const ssrUser = async ({ req, res }, fn) => {
	// Check if user already registered.
	try {
		const user = await getUser(req);
		return fn(user);
	} catch (e) {
		if (e.type !== ERROR_TYPES.userBlocked) {
			handleException(e);
		}
		if (isProd) {
			// If in production, log user out of session on error.
			res.writeHead(302, {
				Location: pageRoutes.logout
			});
			res.end();
		}
		// Pass an empty user here to indicate that no user was resolved
		return fn({});
	}
};

export default ssrUser;
