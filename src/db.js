/**
 * Using Airtable API to store data
 */

import axios from "axios";
import axiosRetry from "axios-retry";
import isEmpty from "is-empty";
import mapKeys from "lodash/mapKeys";
import startCase from "lodash/startCase";
import { airtable as config } from "./envConfig";

const db = axios.create({
	baseURL: `https://api.airtable.com/v0/${config.base}/`,
	headers: {
		Authorization: `Bearer ${config.apiKey}`,
		"Content-Type": "application/json"
	}
});

axiosRetry(db, { retries: 3 });

/**
 * Retrieve user by record id.
 */
export const findUser = async (id) => {
	return db.get(`Users/${id}`).then(({ data }) => data);
};

/**
 * Retrieve user by property
 */
export const findUserBy = async (property, value) => {
	const { records } = db
		.get(`Users`, {
			params: {
				maxRecords: 1,
				filterByFormula: `{${property}}=${value}`
			}
		})
		.then(({ data }) => data);

	if (records.length) {
		return records[0];
	}

	return null;
};

/**
 * Create user with params.
 * Params are maped and keys are startCased to match casing of keys in Airtable
 */
export const createUser = async (params) => {
	const p = mapKeys(params, (value, key) => {
		return startCase(key);
	});

	return db.post(`Users`, p).then(({ data: { records } }) => records);
};

/**
 * Find user, otherwise create the user.
 */
export const findOrCreateUser = async (id, params) => {
	const result = findUser(id);

	if (isEmpty(result)) {
		return createUser(params);
	}

	return result;
};

/**
 * Find user by property, otherwise create the user.
 */
export const findOrCreateUserBy = async (property, value, params) => {
	const result = findUserBy(property, value);

	if (isEmpty(result)) {
		return createUser(params);
	}

	return result;
};

export default db;
