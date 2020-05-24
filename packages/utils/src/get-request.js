import axios from "axios";
import axiosRetry from "axios-retry";

export default (options = {}) => {
	const request = axios.create({
		timeout: 60000,
		withCredentials: true,
		...options
	});

	axiosRetry(request);

	return request;
};
