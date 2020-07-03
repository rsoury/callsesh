/**
 * Check predefined routes to determine if username space /:username/... is available.
 * To be used alongside Auth Manager's isUsernameAvailable.
 */

import path from "path";
import glob from "glob-promise";
import slugify from "@/utils/slugify";

/**
 *
 * @var {string} username Username value
 *
 * @return {boolean}
 */
const isUsernameSpaceAvailable = async (username) => {
	if (typeof window !== "undefined") {
		return false;
	}

	// Slugify and ensure output is the same
	if (username !== slugify(username)) {
		return false;
	}

	const spaces = await await glob("src/pages/*");

	const spacenames = spaces.map((space) => path.basename(space).split(".")[0]);

	if (spacenames.includes(username)) {
		return false;
	}

	return true;
};

export default isUsernameSpaceAvailable;
