/* eslint-disable */

import ono from "@jsdevtools/ono";
import logger from "@financial-times/lambda-logger";
import { getRequest } from "@callsesh/utils";

import handleException from "@/utils/handle-exception";

const request = getRequest();

export default async function fireWebhook(event) {
	// TODO: Build out request to url in event.
}
