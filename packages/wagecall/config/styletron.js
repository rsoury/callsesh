const { Client, Server } = require("styletron-engine-atomic");
const { DebugEngine } = require("styletron-react");
const constants = require("./constants");

const getHydrateClass = () =>
	document.getElementsByClassName(constants.HYDRATE_CLASS);

module.exports.engine =
	typeof window === "undefined"
		? new Server()
		: new Client({
				hydrate: getHydrateClass()
		  });

module.exports.debug =
	process.env.NODE_ENV !== "production" ? new DebugEngine() : undefined;
