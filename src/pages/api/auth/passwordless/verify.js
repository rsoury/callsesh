/**
 * Initiate passwordless authentication by creating comms verification against a phoneNumber
 */

import isEmpty from "is-empty";
import getHandler from "@/middleware";
import auth from "@/middleware/auth";
import passport from "@/middleware/lib/passport";

const handler = getHandler();

handler.use(auth).post(passport.authenticate("custom"), async (req, res) => {
	if (isEmpty(req.user)) {
		return res.status(401).json({
			success: false,
			code: 401,
			message: "Unauthorised"
		});
	}

	return res.json({
		success: true
	});
});

export default handler;
