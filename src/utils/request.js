import axios from "axios";
import axiosRetry from "axios-retry";

const request = axios.create({
	timeout: 60000
});

axiosRetry(request);

export default request;
