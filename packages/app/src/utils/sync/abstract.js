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
		const eventName = this.callbackTypes[callbackName];
		events.removeAllListeners(eventName);
		events.on(eventName, fn);
	}

	start() {
		// ...
	}

	stop() {
		// ...
	}
}

export default SyncAbstract;
