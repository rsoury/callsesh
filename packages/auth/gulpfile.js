/* eslint-disable no-console, no-unused-vars, global-require */

require("dotenv").config({ path: require("find-config")(".env") });
const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-string-replace");
const gulpif = require("gulp-if");
const isEmpty = require("is-empty");
const log = require("fancy-log");
const chalk = require("chalk");
const { deploy, dump } = require("auth0-deploy-cli");
const path = require("path");
const rimraf = require("rimraf");
const fs = require("fs");

const config = {
	AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
	AUTH0_CLIENT_SECRET: process.env.AUTH0_DEPLOY_CLIENT_SECRET,
	AUTH0_CLIENT_ID: process.env.AUTH0_DEPLOY_CLIENT_ID,
	AUTH0_EXPORT_IDENTIFIERS: false,
	AUTH0_ALLOW_DELETE: false,
	AUTH0_API_MAX_RETRIES: 10
};

log.info(chalk.yellow(`Public URL: ${process.env.PUBLIC_URL}`));
log.info(chalk.yellow(`Auth Public URL: ${process.env.AUTH_PUBLIC_URL}`));

const shouldReplace =
	!isEmpty(process.env.AUTH_PUBLIC_URL) && !isEmpty(process.env.PUBLIC_URL);

/**
 * Deploy authentication login page to Auth0
 * 1. Export Auth0 config
 * 2. Replace login page
 * 3. Import Auth0 config
 * 4. Cleanup
 */
const folder = path.resolve(__dirname, "./.auth0");
const deployAuth = gulp.series(
	(cb) => {
		rimraf(folder, () => {
			log.info(chalk.yellow(`Starting deployment...`));
			cb();
		});
	},
	async () => {
		await dump({
			output_folder: folder,
			config,
			strip: true,
			format: true
		});
	},
	() =>
		gulp
			.src(`./build/index.html`)
			.pipe(
				rename((p) => {
					p.basename = "login";
					return p;
				})
			)
			.pipe(
				gulpif(
					shouldReplace,
					replace(
						new RegExp(process.env.PUBLIC_URL, "g"),
						process.env.AUTH_PUBLIC_URL
					)
				)
			)
			.on(
				"end",
				() =>
					shouldReplace &&
					log.info(
						chalk.blue(
							`Replaced "${process.env.PUBLIC_URL}" with "${process.env.AUTH_PUBLIC_URL}"`
						)
					)
			)
			.pipe(gulp.dest("./.auth0/pages")),
	(cb) => {
		fs.writeFile(
			path.resolve(__dirname, "./.auth0/pages/login.json"),
			JSON.stringify({
				name: "login",
				enabled: true,
				html: "./login.html"
			}),
			(err) => {
				if (err) {
					log.error(chalk.red(`Failed to write login.json to pages directory`));
				} else {
					log.info(chalk.green(`login.json written to pages directory`));
				}

				cb();
			}
		);
	},
	async () => {
		await deploy({
			input_file: folder,
			config
		});
	},
	(cb) => {
		rimraf(folder, () => {
			log.info(chalk.green(`Deployed successfully!`));
			cb();
		});
	}
);

exports.deploy = deployAuth;
