import ono from "@jsdevtools/ono";
import logger from "@financial-times/lambda-logger";
import { getRequest } from "@callsesh/utils";

import handleException from "@/utils/handle-exception";

const request = getRequest();

export default async function fireWebhook(event) {
	const { url, method, data, headers } = event;

	const params = {
		method,
		url,
		headers
	};
	if (["post", "patch", "put"].includes(method.toLowerCase())) {
		params.data = data;
	}

	logger.info(params, "Starting webhook request...");

	try {
		const response = await request(params).then(({ data: d }) => d);

		logger.info({ response }, "Webhook request successful");

		return response;
	} catch (e) {
		logger.info(e, "Webhook request errored");
		handleException(ono(e, params));

		throw e;
	}
}
