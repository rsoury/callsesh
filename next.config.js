// const withSourceMaps = require("@zeit/next-source-maps");
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_DEVELOPMENT_SERVER
} = require("next/constants");
const dotenv = require("dotenv");
// const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

const secretEnvPrefix = "SH_";

const dotenvResult = dotenv.config();

module.exports = (phase) => {
	// Hide the secret env variables to be used only on server.
	const env = Object.entries(dotenvResult.parsed).reduce(
		(result, [key, value]) => {
			if (key.indexOf(secretEnvPrefix) === 0) {
				if (
					phase === PHASE_DEVELOPMENT_SERVER ||
					phase === PHASE_PRODUCTION_SERVER
				) {
					result[key] = value;
				}
				return result;
			}
			result[key] = value;
			return result;
		},
		{}
	);

	return {
		env,
		webpack(config, { isServer, buildId }) {
			config.externals = config.externals || {};
			config.externals["styletron-server"] = "styletron-server";

			// Sentry release
			config.plugins.push(
				new webpack.DefinePlugin({
					"process.env.SENTRY_RELEASE": JSON.stringify(buildId)
				})
			);

			// Sentry alias
			if (!isServer) {
				config.resolve.alias["@sentry/node"] = "@sentry/browser";
			}

			return config;
		},
		poweredByHeader: false
	};
};
