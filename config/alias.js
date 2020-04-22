// Deciding whether or not to use this moduleAlias. I want to test with Jest so this might be a bitch to deal with.

const path = require("path");

module.exports.alias = {
	"@": path.resolve(__dirname, "./pages"),
	"@tests": path.resolve(__dirname, "./tests")
};

module.exports.jestModuleNameMapper = {
	"^@(tests/)(.*)$": "<rootDir>/tests/$2",
	"^@(/)(.*)$": "<rootDir>/pages/$2"
};
