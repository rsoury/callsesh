import { events } from "./client";

class SyncAbstract {
	callbackTypes = {};

	/**
	 * Accepts a function
	 */
	listen(callbackName, fn = () => {}) {
		if (typeof this.callbackTypes[callbackName] === "undefined") {
			throw new Error(
				`Must be a valid callback to listen to events: ${Object.entries(
					this.callbackTypes
				).join(", ")}`
			);
		}
		events.on(this.callbackTypes[callbackName], fn);
	}

	start() {
		// ...
	}

	stop() {
		// ...
	}
}

export default SyncAbstract;
