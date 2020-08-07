/* eslint-disable no-console */

require("dotenv").config({ path: require("find-config")(".env") }); // eslint-disable-line
const withSourceMaps = require("@zeit/next-source-maps")();
const withPlugins = require("next-compose-plugins");
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_DEVELOPMENT_SERVER
} = require("next/constants");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const filenamify = require("filenamify");
const isEmpty = require("is-empty");
const Twilio = require("twilio");
const chalk = require("chalk");

const { alias } = require("./config/alias");
const pkg = require("./package.json");

const isProd = process.env.NODE_ENV === "production";

module.exports = (phase, ...nextParams) => {
	// Explicitly define environment variables to be used at build time for both frontend and server
	// dotenv.config should automatically configure process.env for local development

	const frontendEnv = {
		PUBLIC_URL:
			process.env.PUBLIC_URL ||
			(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ``) ||
			"http://app.local",
		AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || "",
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || "",
		STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || "",
		STRIPE_CONNECT_ID: process.env.STRIPE_CONNECT_ID || "",
		SENTRY_DSN: process.env.SENTRY_DSN || "",
		UPLOADCARE_PUBLIC_KEY: process.env.UPLOADCARE_PUBLIC_KEY || "",
		GA_TRACKING_ID: process.env.GA_TRACKING_ID || "",
		CHAT_URL: process.env.CHAT_URL || ""
	};
	const serverEnv = {
		SESSION_SECRET: process.env.SESSION_SECRET || "",
		TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || "",
		TWILIO_PROXY_SERVICE_SID: process.env.TWILIO_PROXY_SERVICE_SID || "",
		TWILIO_SYNC_SERVICE_SID: process.env.TWILIO_SYNC_SERVICE_SID || "default",
		TWILIO_API_KEY: process.env.TWILIO_API_KEY || "",
		TWILIO_API_SECRET: process.env.TWILIO_API_SECRET || "",
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || "",
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
		WORKFLOWS_URL: process.env.WORKFLOWS_URL || "",
		CHAT_USER: process.env.CHAT_USER || "",
		CHAT_PASS: process.env.CHAT_PASS || "",
		POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN || "",
		PUBLIC_PROXY_URL: process.env.PUBLIC_PROXY_URL || ""
	};

	let env = frontendEnv;
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_SERVER) {
		env = {
			...frontendEnv,
			...serverEnv
		};
	}
	// Ensure environment variables are set
	Object.entries(env).forEach(([key, value]) => {
		if (isEmpty(value)) {
			console.log(
				chalk.yellow(
					`WARNING: ${key} is a required environment variable. The application may not behave as expected.`
				)
			);
		}
	});

	// Print PUBLIC_URL for reference
	console.log(chalk.cyan(`Application public url: ${env.PUBLIC_URL}`));
	if (env.PUBLIC_PROXY_URL) {
		console.log(chalk.cyan(`Application proxy url: ${env.PUBLIC_PROXY_URL}`));
		// If in development, set the proxy service callback and intercept automatically.
		if (phase === PHASE_DEVELOPMENT_SERVER && !isProd) {
			const twilioClient = new Twilio(
				env.TWILIO_API_KEY,
				env.TWILIO_API_SECRET,
				{
					accountSid: env.TWILIO_ACCOUNT_SID
				}
			);
			twilioClient.proxy
				.services(env.TWILIO_PROXY_SERVICE_SID)
				.update({
					callbackUrl: `${env.PUBLIC_PROXY_URL}/api/hooks/call-session`
					// interceptCallbackUrl: `${env.PUBLIC_PROXY_URL}/api/hooks/call-session/intercept`
				})
				.then(() => {
					console.log(
						chalk.green(
							`Successfully updated the Development Proxy Callback URLs`
						)
					);
				})
				.catch((e) => {
					console.log(
						chalk.red(`FAILED to update the Development Proxy Callback URLs`)
					);
					console.error(e);
				});
		}
	}

	const nextConfig = {
		// Explicitly define environment variables to be used at build time.
		env,
		webpack: (config, { isServer, webpack, dev }) => {
			config.externals = config.externals || {};
			config.externals["styletron-server"] = "styletron-server";

			// Sentry release
			const sentryRelease = filenamify(`${pkg.name}@${pkg.version}`, {
				replacement: "-"
			});
			config.plugins.push(
				new webpack.DefinePlugin({
					"process.env.SENTRY_RELEASE": JSON.stringify(sentryRelease)
				})
			);

			// Add alias to Webpack
			const aliasToApply = {
				...config.resolve.alias,
				...alias,
				// Add react alias -- this allows us to link other projects without referencing duplicate react libraries.
				react: require.resolve("react"),
				formik: require.resolve("formik")
			};

			if (!isServer) {
				// Sentry alias
				aliasToApply["@sentry/node"] = "@sentry/browser";

				// Resolve node related dependencies.
				config.node = {
					// Used by Auth0 Management
					dns: "empty",
					fs: "empty",
					net: "empty",
					tls: "empty",
					// Stripe-node cannot resolve this on browser
					child_process: "empty"
				};
			}

			config.resolve.alias = aliasToApply;

			// When all the Sentry configuration env variables are available/configured
			// The Sentry webpack plugin gets pushed to the webpack plugins to build
			// and upload the source maps to sentry.
			// This is an alternative to manually uploading the source maps
			// See: https://github.com/zeit/next.js/blob/canary/examples/with-sentry-simple/next.config.js
			if (
				!dev &&
				process.env.SENTRY_DSN &&
				process.env.SENTRY_ORG &&
				process.env.SENTRY_PROJECT &&
				process.env.SENTRY_AUTH_TOKEN
			) {
				config.plugins.push(
					new SentryWebpackPlugin({
						release: sentryRelease,
						include: ".next",
						ignore: ["node_modules"],
						urlPrefix: "~/_next"
					})
				);
			}

			// Add markdown loader for legal pages
			config.module.rules.push({
				test: /\.md$/,
				use: "raw-loader"
			});

			return config;
		},
		target: "serverless",
		poweredByHeader: false
	};

	// Next plugins expect a config object and respond with an object.
	return withPlugins([withSourceMaps], nextConfig)(phase, ...nextParams);
};
