/**
 * Middleware to handle error
 */

import handleException from "@/utils/handle-exception";
import { isProd } from "@/env-config";

export default (handler) => async (req, res) => {
	try {
		await handler(req, res);
	} catch (e) {
		handleException(e);

		const output = {
			success: false,
			code: 500,
			message: "Internal Server Error"
		};
		if (!isProd) {
			output.message = e.message;
			output.error = e;
		}
		res.status(500).json(output);
	}
};
