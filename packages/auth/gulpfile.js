/* eslint-disable no-console */

require("dotenv").config();
const gulp = require("gulp");
const rename = require("gulp-rename");
const { deploy, dump } = require("auth0-deploy-cli");
const path = require("path");
const rimraf = require("rimraf");

const config = {
	AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
	AUTH0_CLIENT_SECRET: process.env.AUTH0_DEPLOY_CLIENT_SECRET,
	AUTH0_CLIENT_ID: process.env.AUTH0_DEPLOY_CLIENT_ID,
	AUTH0_EXPORT_IDENTIFIERS: false,
	AUTH0_ALLOW_DELETE: false,
	AUTH0_API_MAX_RETRIES: 10
};

/**
 * Deploy authentication login page to Auth0
 * 1. Export Auth0 config
 * 2. Replace login page
 * 3. Import Auth0 config
 * 4. Cleanup
 */
const folder = path.resolve(__dirname, "./.auth0");
const deployAuth = gulp.series(
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
			.pipe(gulp.dest("./.auth0/pages")),
	async () => {
		await deploy({
			input_file: folder,
			config
		});
	},
	(cb) => {
		rimraf(folder, () => {
			console.log(`Deployed successfully!`);
			cb();
		});
	}
);

exports.deploy = deployAuth;
