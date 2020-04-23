const Dotenv = require("dotenv-webpack");

module.exports = {
	webpack: function webpack(config) {
		config.externals = config.externals || {};
		config.externals["styletron-server"] = "styletron-server";

		config.plugins.push(new Dotenv({ silent: true }));

		return config;
	}
};
