/* eslint-disable no-console */

/**
 * Start the Next Dev Server with new NGROK Url for proxy
 */

const ngrok = require("ngrok");
const { argv } = require("yargs");
const shell = require("shelljs");

const isProxyDisabled =
	process.env.DISABLE_PROXY === "true" || process.env.DISABLE_PROXY === true;

const port = argv.p || argv.port || process.env.PORT || 3000;

const startNext = (proxyUrl = "") =>
	shell.exec(
		`PUBLIC_PROXY_URL="${proxyUrl}" next ${process.argv.slice(2).join(" ")}`,
		(code, stdout, stderr) => {
			console.log("Exit code:", code);
			console.log("Program output:", stdout);
			console.log("Program stderr:", stderr);
		}
	);

if (isProxyDisabled) {
	startNext();
} else {
	ngrok
		.connect(port)
		.then((url) => startNext(url))
		.catch((e) => {
			console.error(e);
			process.exit(1);
		});
}
