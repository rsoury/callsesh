/**
 * Alias config file
 */

const path = require("path");

const mapToFolders = {
	"@": "src",
	"@config": "config",
	"@tests": "tests"
};

/**
 * eg.
 * {
 *  '@': '/Users/ryansoury/dev/wagecall',
 *  '@tests': '/Users/ryansoury/dev/wagecall/tests'
 * }
 */
module.exports.alias = Object.entries(mapToFolders).reduce(
	(result, [map, target]) => {
		result[map] = path.resolve(__dirname, "../", target);
		return result;
	},
	{}
);

/**
 * eg.
 * {
 * 	"^@(/)(.*)$": "<rootDir>/$2",
 *  "^@(tests/)(.*)$": "<rootDir>/tests/$2"
 * }
 */
module.exports.jestAlias = Object.entries(mapToFolders).reduce(
	(result, [map, target]) => {
		const s = map.substring(1);
		result[`^@(${s}/)(.*)$`] = `<rootDir>/${target}${target ? "/" : ""}$2`;
		return result;
	},
	{}
);
