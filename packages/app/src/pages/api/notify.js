/**
 * Check whether or not a username is available.
 */

import isEmpty from "is-empty";
import * as comms from "@callsesh/utils/comms";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";

const handler = getHandler();

handler.use(requireAuthentication).post(async (req, res) => {
	const { message } = req.body;

	if (isEmpty(message)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Message required"
		});
	}

	const user = await getUser(req);

	await comms.sms(user.phoneNumber, message);

	return res.json({
		success: true
	});
});

export default handler;
