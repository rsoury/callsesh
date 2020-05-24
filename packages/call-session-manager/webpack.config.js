// webpack.config.js

const slsw = require("serverless-webpack");
const { alias } = require("./config/alias");

module.exports = {
	entry: slsw.lib.entries,
	target: "node",
	resolve: {
		alias
	}
};
