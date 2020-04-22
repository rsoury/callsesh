import { Client, Server } from "styletron-engine-atomic";
import { DebugEngine } from "styletron-react";
import * as constants from "./constants";

const getHydrateClass = () =>
	document.getElementsByClassName(constants.HYDRATE_CLASS);

export const styletron =
	typeof window === "undefined"
		? new Server()
		: new Client({
				hydrate: getHydrateClass()
		  });

export const debug =
	process.env.NODE_ENV !== "production" ? new DebugEngine() : undefined;
