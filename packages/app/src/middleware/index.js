import nextConnect from "next-connect";
import pino from "express-pino-logger";

import handleException from "@/utils/handle-exception";
import { isProd } from "@/env-config";

export default function getHandler() {
	const handler = nextConnect({
		onError(err, req, res) {
			handleException(err);

			const output = {
				success: false,
				code: 500,
				message: "Internal Server Error"
			};
			if (!isProd) {
				output.message = err.message;
				output.error = err;
			}
			res.status(500).json(output);
		},
		onNoMatch(req, res) {
			res.status(404).json({
				success: false,
				code: 404,
				message: "Not Found"
			});
		}
	});

	// Add pino logger
	handler.use(
		pino({
			prettyPrint: !isProd
		})
	);

	return handler;
}
