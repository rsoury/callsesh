/**
 * Alias config file
 */

const createAlias = require("@callsesh/utils/create-alias");

const mapToFolders = {
	"@": "src",
	"@config": "config",
	"@tests": "tests"
};

const { alias, jestAlias } = createAlias(mapToFolders, [__dirname, "../"]);
module.exports.alias = alias;
module.exports.jestAlias = jestAlias;
