/**
 * Get user
 * If user doesn't exist, 404 error.
 */

import error from "@/middleware/error";
import combine from "@/middleware/combine";

const middleware = combine(error);

export default middleware((req, res) => {
	const {
		query: { id }
	} = req;
	// Get user using id.

	res.json({ user: id });
});
