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
	if (typeof window !== "undefined" || typeof username !== "string") {
		return false;
	}

	// Slugify and ensure output is the same
	// Ensure username has a length >= 4
	if (username !== slugify(username) || username.length < 4) {
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
