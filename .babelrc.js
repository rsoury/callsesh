// Testing dynamic exports: https://sergiodxa.com/articles/testing-in-next-dynamic-imports/

const { alias } = require("./config/alias");

module.exports = {
	presets: ["next/babel"],
	plugins: [
		[
			"module-resolver",
			{
				alias
			}
		]
	]
};
