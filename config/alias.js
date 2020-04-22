// Deciding whether or not to use this moduleAlias. I want to test with Jest so this might be a bitch to deal with.

const path = require("path");

module.exports = {
	"@": path.resolve(__dirname, "../"),
	"@tests": path.resolve(__dirname, "../tests")
};
