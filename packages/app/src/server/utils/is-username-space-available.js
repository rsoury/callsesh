/**
 * Check predefined routes to determine if username space /:username/... is available.
 * To be used alongside Auth Manager's isUsernameAvailable.
 */

import path from "path";
import glob from "glob-promise";
import uniq from "lodash/uniq";
import slugify from "@/utils/slugify";

const reservedSpaces = ["blog"];

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

	const spaces = await glob("src/pages/*");

	const spacenames = uniq([
		...spaces.map((space) => path.basename(space).split(".")[0]),
		...reservedSpaces
	]);

	if (spacenames.includes(username)) {
		return false;
	}

	return true;
};

export default isUsernameSpaceAvailable;
