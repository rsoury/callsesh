/**
 * Initiate passwordless authentication login
 * First check if user exists
 */

import { verify } from "@/comms";
import getHandler from "@/middleware";
import * as db from "@/db";
import isEmpty from "is-empty";

const handler = getHandler();

handler.post(async (req, res) => {
	const { phoneNumber } = req.body;

	const user = await db.findUserBy("Phone Number", phoneNumber);
	if (isEmpty(user)) {
		return res.unauthorised();
	}

	await verify(phoneNumber);

	return res.json({
		success: true
	});
});

export default handler;
