import { callbackEvents, events } from "./client";

class SyncAbstract {
	callbackTypes = {};

	constructor() {
		// Setup callbacks -- on receiving the
		Object.values(this.callbackTypes).forEach((event) => {
			events.on(event, (fn) => {
				// register function on callbackEvents
				if (typeof fn === "function") {
					// Modifies the context.response using the registered function and trigger arguments.
					callbackEvents.on(event, (context, ...args) => {
						context.response = fn(...args);
					});
				}
			});
		});
	}

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
