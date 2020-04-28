/**
 * Using Airtable API to store data
 */

import axios from "axios";
import axiosRetry from "axios-retry";
import isEmpty from "is-empty";
import mapKeys from "lodash/mapKeys";
import startCase from "lodash/startCase";
import { parsePhoneNumberFromString } from "libphonenumber-js";
// import { airtable as config } from "@/env-config";

const config = {};

const db = axios.create({
	baseURL: `https://api.airtable.com/v0/${config.base}/`,
	headers: {
		Authorization: `Bearer ${config.apiKey}`,
		"Content-Type": "application/json"
	}
});

axiosRetry(db, { retries: 3 });

const formatParams = (params) =>
	mapKeys(params, (value, key) => {
		return startCase(key);
	});

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
	const { records = [] } = await db
		.get(`Users?maxRecords=1&filterByFormula={${property}}="${value}"`)
		.then(({ data }) => data);

	if (records.length) {
		return records[0];
	}

	return {};
};

/**
 * Create user with params.
 * Params are mapped and keys are startCased to match casing of keys in Airtable
 */
export const createUser = async (params) => {
	const fields = formatParams(params);

	// Generate unique username.
	const username = [fields["First Name"], fields["Last Name"]]
		.join("")
		.toLowerCase()
		.substring(0, 15);
	let finalUsername = username;
	let available = false;
	let suffix = 2;
	while (!available) {
		const user = await findUserBy("Username", finalUsername); // eslint-disable-line
		console.log(user);
		if (isEmpty(user)) {
			available = true;
		} else {
			finalUsername = `${username}${suffix}`;
		}
		suffix += 1;
	}
	fields.Username = finalUsername;

	// Get country from phone number
	const phoneNumber = parsePhoneNumberFromString(fields["Phone Number"]);
	fields["Local Country"] = phoneNumber ? phoneNumber.country : "";

	const { records = [] } = await db
		.post(`Users`, {
			records: [
				{
					fields
				}
			]
		})
		.then(({ data }) => data);

	if (records[0]) {
		return records[0];
	}

	return {};
};

/**
 * Update user with params
 */
export const updateUser = async (id, params) => {
	const fields = formatParams(params);

	const { records = [] } = await db
		.patch(`Users`, {
			records: [
				{
					id,
					fields
				}
			]
		})
		.then(({ data }) => data);

	if (records.length) {
		return records[0];
	}

	return {};
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

/**
 * Authentication Memory Tokens are used to remember the user's last login.
 * These tokens should eventually be stored in Redis or some in-memory store.
 */
const authMemoryTokenKey = "Auth Memory Token";

/**
 * Delete the current authentication memory token for a user
 */
export const consumeAuthMemoryToken = async (token) => {
	const user = await findUserBy(authMemoryTokenKey, token);
	return updateUser(user.id, { ...user.fields, [authMemoryTokenKey]: "" });
};

/**
 * Save the auth memory token against the user
 */
export const saveAuthMemoryToken = async (id, token) => {
	const user = await findUser(id);
	return updateUser(user.id, { ...user.fields, [authMemoryTokenKey]: token });
};

export default db;
