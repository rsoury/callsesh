import isEmpty from "is-empty";

import { CALL_SESSION_STATUS } from "@/constants";

import { syncIds, subscribe, callbackEvents } from "./client";
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

			// EMULATE: Default call session status
			// value.status = value.status || CALL_SESSION_STATUS.metering;
			callbackEvents.emit(this.callbackTypes.onConnect, value);

			doc.on("updated", (event) => {
				callbackEvents.emit(this.callbackTypes.onUpdate, event);
			});

			// On call session end.
			doc.on("removed", () => {
				callbackEvents.emit(this.callbackTypes.onRemove);
			});
		});
	}
}

export default CallSessionSync;
