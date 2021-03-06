import * as authManager from "@/server/auth-manager";

import isUsernameSpaceAvailable from "./is-username-space-available";

/**
 * Consolidates username availability check
 */
const isUsernameAvailable = async (username) => {
	if (typeof window !== "undefined") {
		return false;
	}

	const [usernameAvailable, usernameSpaceAvailable] = await Promise.all([
		authManager.isUsernameAvailable(username),
		isUsernameSpaceAvailable(username)
	]);

	return usernameAvailable && usernameSpaceAvailable;
};

export default isUsernameAvailable;
