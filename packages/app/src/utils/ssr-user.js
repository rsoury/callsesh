/**
 * Get user and handle error in ssr context
 */

import Url from "url-parse";
import isEmpty from "is-empty";
import { getUser } from "@/middleware/auth";
import * as routes from "@/routes";
import { ERROR_TYPES } from "@/constants";
import handleException from "@/utils/handle-exception";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import { isProd } from "@/env-config";

const ssrUser = async ({ req, res }, fn) => {
	// Check if user already registered.
	try {
		const user = await getUser(req);

		// If user is in a call session, redirect user to their session
		const url = new Url(req.url);
		if (!isEmpty((user || {}).callSession)) {
			const inSessionPathname = routes.build.user(user.callSession.with);
			if (
				stripTrailingSlash(url.pathname) !==
				stripTrailingSlash(inSessionPathname)
			) {
				res.writeHead(302, {
					Location: inSessionPathname
				});
				res.end();
				return {
					props: {}
				};
			}
		}

		return fn(user);
	} catch (e) {
		if (e.type !== ERROR_TYPES.userBlocked) {
			handleException(e);
		}
		if (isProd) {
			// If in production, log user out of session on error.
			res.writeHead(302, {
				Location: routes.page.logout
			});
			res.end();
		}
		// Pass an empty user here to indicate that no user was resolved
		return fn({});
	}
};

export default ssrUser;
