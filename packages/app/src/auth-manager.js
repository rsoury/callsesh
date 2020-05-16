/**
 * Server side auth management library
 */

import isEmpty from "is-empty";
import { ManagementClient } from "auth0";
import { auth0 as config } from "@/env-config";

const client = new ManagementClient({
	domain: config.domain,
	clientId: config.clientId,
	clientSecret: config.clientSecret
});

export const getUserRoles = (id) => {
	return client.getUserRoles({ id, page: 0, per_page: 50, sort: "date:-1" });
};

export const getUser = (id) => {
	return client.getUser({ id });
};

export const updateUser = (
	id,
	{ metadata: { app: appMetadata = {}, user: userMetadata = {} } = {}, ...data }
) => {
	const params = data;
	if (!isEmpty(appMetadata)) {
		params.app_metadata = appMetadata;
	}
	if (!isEmpty(userMetadata)) {
		params.user_metadata = userMetadata;
	}
	return client.updateUser({ id }, params);
};

export const getClient = () => client;
