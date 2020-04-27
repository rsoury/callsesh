/**
 * Initiate passwordless authentication by creating comms verification against a phoneNumber
 * First check if user already created
 */

import { verify } from "@/comms";
import getHandler from "@/middleware";
import * as db from "@/db";
import isEmpty from "is-empty";

const handler = getHandler();

handler.post(async (req, res) => {
	const { phoneNumber } = req.body;

	const user = await db.findUserBy("Phone Number", phoneNumber);
	if (!isEmpty(user)) {
		// If creating, and the user already exists, throw an error.
		return res.status(400).json({
			success: false,
			message: "An account already exists with this phone number."
		});
	}

	await verify(phoneNumber);

	return res.json({
		success: true
	});
});

export default handler;
