/**
 * Toggle user live status.
 */

import getHandler from "@/middleware";
// import { getUser } from "@/middleware/auth";
// import * as authManager from "@/auth-manager";
// import isUserOperator from "@/utils/is-operator";

const handler = getHandler();

// Does not require authentication to fetch a user publicly viewable data.
handler.get(async (req, res) => {
	return res.status(200).json({
		success: true
	});
});

export default handler;
