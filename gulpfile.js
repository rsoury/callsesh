/* eslint-disable no-console */

const gulp = require("gulp");
const rename = require("gulp-rename");
const path = require("path");
const fs = require("fs");

/**
 * Move build file index.html to pages/login.html. Create a login.json config
 */
const prepareAuth = gulp.series(
	() => {
		return gulp
			.src(`./packages/auth/build/index.html`)
			.pipe(
				rename((p) => {
					p.basename = "login";
					return p;
				})
			)
			.pipe(gulp.dest("./pages"));
	},
	(cb) => {
		fs.writeFile(
			path.resolve(__dirname, "./pages/login.json"),
			JSON.stringify({ enabled: true }),
			cb
		);
	}
);

exports["prepare:auth"] = prepareAuth;
