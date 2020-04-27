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
	console.log(user);
	if (!isEmpty(user)) {
		return res.status(409).json({
			success: false,
			message: "User already exists"
		});
	}

	await verify(phoneNumber);

	return res.json({
		success: true
	});
});

export default handler;
