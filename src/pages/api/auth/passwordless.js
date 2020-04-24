/**
 * Initiate passwordless authentication by creating comms verification against a phoneNumber
 */

import { verify } from "@/comms";
import getHandler from "@/middleware";

const handler = getHandler();

handler.post(async (req, res) => {
	const { phoneNumber } = res.body;

	await verify(phoneNumber);

	res.json({
		success: true
	});
});

export default handler;
