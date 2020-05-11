/**
 * Server side auth management library
 */

import { ManagementClient } from "auth0";
import { auth0 as config } from "@/env-config";

const client = new ManagementClient({
	domain: config.domain,
	clientId: config.clientId,
	clientSecret: config.clientSecret
});

export const getUser = (id) => {
	return client.getUser({ id });
};

export const updateUser = (
	id,
	{ metadata: { app: appMetadata = {}, user: userMetadata = {} }, ...data }
) => {
	const promises = [];
	promises.push(
		isEmpty(data) ? Promise.resolve({}) : client.updateUser({ id }, data)
	);
	promises.push(
		isEmpty(appMetadata)
			? Promise.resolve({})
			: client.updateAppMetadata({ id }, appMetadata)
	);
	promises.push(
		isEmpty(userMetadata)
			? Promise.resolve({})
			: client.updateUserMetadata({ id }, userMetadata)
	);

	return Promise.all(promises);
};

export const getClient = () => client;
