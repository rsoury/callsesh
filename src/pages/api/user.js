/**
 * Manage the currently authenticated user
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler
	.use(auth)
	.use((req, res, next) => {
		// handlers after this (PUT, DELETE) all require an authenticated user
		// This middleware to check if user is authenticated before continuing
		if (!req.user) {
			res.unauthorised();
		} else {
			next();
		}
	})
	.get((req, res) => {
		// Return public friendly data
		console.log(req.user);
		const { username, firstName, lastName } = req.user;

		return res.json({ username, firstName, lastName });
	});

export default handler;
