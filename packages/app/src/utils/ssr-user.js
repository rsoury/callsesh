/**
 * Get user and handle error in ssr context
 */

import { getUser } from "@/middleware/auth";
import { page as pageRoutes } from "@/routes";

const ssrUser = async ({ req, res }, fn) => {
	// Check if user already registered.
	let user = {};
	try {
		user = await getUser(req);
		return fn(user);
	} catch (e) {
		res.writeHead(302, {
			Location: pageRoutes.logout
		});
		res.end();
		return { props: {} };
	}
};

export default ssrUser;
