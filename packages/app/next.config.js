const withSourceMaps = require("@zeit/next-source-maps")();
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_DEVELOPMENT_SERVER
} = require("next/constants");
const dotenv = require("dotenv");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const { alias } = require("./config/alias");
const pkg = require("./package.json");

const secretEnvPrefix = "SH_";

const dotenvResult = dotenv.config();

console.log({
	PUBLIC_URL: process.env.PUBLIC_URL,
	AUTH_PUBLIC_URL: process.env.AUTH_PUBLIC_URL,
	SH_SESSION_SECRET: process.env.SH_SESSION_SECRET,
	SH_TWILIO_ACCOUNT_SID: process.env.SH_TWILIO_ACCOUNT_SID,
	SH_TWILIO_AUTH_TOKEN: process.env.SH_TWILIO_AUTH_TOKEN,
	SH_TWILIO_PROXY_SERVICE_SID: process.env.SH_TWILIO_PROXY_SERVICE_SID,
	AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
	AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
	SH_AUTH0_CLIENT_SECRET: process.env.SH_AUTH0_CLIENT_SECRET,
	SENTRY_DSN: process.env.SENTRY_DSN,
	STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
	SH_STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
});

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

	const nextConfig = {
		// Explicitly define environment variables to be used at build time.
		env,
		webpack: (config, { isServer, webpack }) => {
			config.externals = config.externals || {};
			config.externals["styletron-server"] = "styletron-server";

			// Sentry release
			config.plugins.push(
				new webpack.DefinePlugin({
					"process.env.SENTRY_RELEASE": JSON.stringify(pkg.version)
				})
			);

			// Add alias to Webpack
			Object.entries(alias).forEach(([key, value]) => {
				config.resolve.alias[key] = value;
			});

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
		target: "serverless",
		poweredByHeader: false
	};

	// Next plugins expect a config object and respond with an object.
	return withSourceMaps(nextConfig);
};
