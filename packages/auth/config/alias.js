/**
 * Alias config file
 */

const { createAlias } = require("@wagecall/utils");

const mapToFolders = {
	"@": "src",
	"@config": "config",
	"@tests": "tests"
};

const { alias, jestAlias } = createAlias(mapToFolders, [__dirname, "../"]);
module.exports.alias = alias;
module.exports.jestAlias = jestAlias;
