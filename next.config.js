const withSourceMaps = require("@zeit/next-source-maps")();
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_DEVELOPMENT_SERVER
} = require("next/constants");
const dotenv = require("dotenv");
const webpack = require("webpack");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const secretEnvPrefix = "SH_";

const dotenvResult = dotenv.config();

const nextConfig = (phase) => {
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

			// When all the Sentry configuration env variables are available/configured
			// The Sentry webpack plugin gets pushed to the webpack plugins to build
			// and upload the source maps to sentry.
			// This is an alternative to manually uploading the source maps
			// See: https://github.com/zeit/next.js/blob/canary/examples/with-sentry-simple/next.config.js
			if (process.env.SENTRY_DSN) {
				config.plugins.push(
					new SentryWebpackPlugin({
						include: ".next",
						ignore: ["node_modules"],
						urlPrefix: "~/_next"
					})
				);
			}

			return config;
		},
		poweredByHeader: false
	};
};

module.exports = withSourceMaps(nextConfig);
