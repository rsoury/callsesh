import * as authManager from "@callsesh/utils/auth-manager";
import isUsernameSpaceAvailable from "@/utils/is-username-space-available";

/**
 * Consolidates username availability check
 */
export default async (username) => {
	if (typeof window !== "undefined") {
		return false;
	}

	const [usernameAvailable, usernameSpaceAvailable] = await Promise.all([
		authManager.isUsernameAvailable(username),
		isUsernameSpaceAvailable(username)
	]);
	return usernameAvailable && usernameSpaceAvailable;
};
