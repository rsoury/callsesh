import isEmpty from "is-empty";

import request from "@/utils/request";
import { CALL_SESSION_STATUS } from "@/constants";
import * as routes from "@/routes";
import handleException, { alerts } from "@/utils/handle-exception";

import { syncIds, subscribe, events } from "./client";
import SyncAbstract from "./abstract";

class CallSessionSync extends SyncAbstract {
	_sessionId = "";

	callbackTypes = {
		onConnect: "onCallSessionConnect",
		onUpdate: "onCallSessionUpdate",
		onRemove: "onCallSessionRemove"
	};

	constructor(sessionId) {
		super();

		if (isEmpty(sessionId)) {
			throw new Error(
				`A valid session id is required to initialise a call session sync`
			);
		}
		this._sessionId = sessionId;
	}

	start() {
		subscribe(syncIds.getCallSession(this._sessionId), (doc) => {
			// Once subscribed, default callSession status to pending.
			const { value = {} } = doc;
			value.status = value.status || CALL_SESSION_STATUS.pending;

			// Register an event capture to start meter
			events.on("meter", (toggle) => {
				if (toggle) {
					return doc.mutate((remoteValue) => {
						// Only set status to metering if not busy (inCall) -- ending the call will set the appropriate status in callback
						if (remoteValue.status !== CALL_SESSION_STATUS.inCall) {
							remoteValue.status = CALL_SESSION_STATUS.metering;
						}
						return remoteValue;
					});
				}
				return doc.mutate((remoteValue) => {
					// Only set status to active if not busy (inCall)
					if (remoteValue.status !== CALL_SESSION_STATUS.inCall) {
						remoteValue.status = CALL_SESSION_STATUS.active;
					}
					return remoteValue;
				});
			});

			events.emit(this.callbackTypes.onConnect, value);

			doc.on("updated", ({ value: eventValue = {}, ...event }) => {
				events.emit(this.callbackTypes.onUpdate, eventValue, event);
			});

			// On call session end.
			doc.on("removed", () => {
				events.emit(this.callbackTypes.onRemove);
			});
		});
	}

	/**
	 * Emit event to start meter from frontend
	 */
	static startMeter() {
		events.emit("meter", true);
		// Run sync to backend
		const ts = Date.now();
		return request
			.post(routes.api.meter, {
				ts,
				start: true
			})
			.catch((err) => {
				handleException(err);
				alerts.error();
				events.emit("meter", false); // if failure to start, stop status.
			});
	}

	/**
	 * Emit event to stop meter from frontend
	 */
	static stopMeter() {
		events.emit("meter", false);
		// Run sync to backend
		const ts = Date.now();
		return request
			.post(routes.api.meter, {
				ts,
				stop: true
			})
			.catch((err) => {
				handleException(err);
				alerts.error();
			});
	}
}

export default CallSessionSync;
