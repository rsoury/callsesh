import pick from "lodash/pick";
import { getRequest } from "@callsesh/utils";

const request = getRequest();

export const formatError = (error) => {
	if (error.response) {
		// Request made and server responded
		return pick(error.response, ["data", "status", "headers"]);
	}
	if (error.request) {
		// The request was made but no response was received
		return error.request;
	}
	// Something happened in setting up the request that triggered an Error
	return error.message;
};

export default request;
