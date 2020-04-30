const path = require("path");

/**
 * @param {Object} mapToFolders
 * eg.
 * {
 * 	'@': 'src',
 * 	'@tests': 'tests'
 * }
 */
module.exports = (mapToFolders = {}, pathSegments) => ({
	/**
	 * eg.
	 * {
	 *  '@': '/Users/ryansoury/dev/wagecall',
	 *  '@tests': '/Users/ryansoury/dev/wagecall/tests'
	 * }
	 */
	alias: Object.entries(mapToFolders).reduce((result, [map, target]) => {
		result[map] = path.resolve(...pathSegments, target);
		return result;
	}, {}),

	/**
	 * eg.
	 * {
	 * 	"^@(/)(.*)$": "<rootDir>/$2",
	 *  "^@(tests/)(.*)$": "<rootDir>/tests/$2"
	 * }
	 */
	jestAlias: Object.entries(mapToFolders).reduce((result, [map, target]) => {
		const s = map.substring(1);
		result[`^@(${s}/)(.*)$`] = `<rootDir>/${target !== "test" && target}${
			target ? "/" : ""
		}$2`;
		return result;
	}, {})
});
