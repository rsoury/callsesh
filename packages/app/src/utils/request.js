import axios from "axios";
import axiosRetry from "axios-retry";

const request = axios.create({
	timeout: 60000,
	withCredentials: true
});

axiosRetry(request);

export default request;
