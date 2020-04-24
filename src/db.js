/**
 * Using Airtable API to store data
 */

import axios from "axios";
import axiosRetry from "axios-retry";
import { airtable as config } from "./envConfig";

const db = axios.create({
	baseURL: `https://api.airtable.com/v0/${config.base}`,
	headers: {
		Authorization: `Bearer ${config.apiKey}`
	}
});

axiosRetry(db, { retries: 3 });

export default db;
