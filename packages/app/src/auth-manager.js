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
