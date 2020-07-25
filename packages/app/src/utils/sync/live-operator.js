import isEmpty from "is-empty";

import { syncIds, subscribe, callbackEvents } from "./client";
import SyncAbstract from "./abstract";

class LiveOperatorSync extends SyncAbstract {
	_userId = "";

	callbackTypes = {
		onConnect: "onLiveOperatorConnect",
		onUpdate: "onLiveOperatorUpdate"
	};

	constructor(userId) {
		super();

		if (isEmpty(userId)) {
			throw new Error(
				`A valid user id is required to initialise a live operator sync`
			);
		}
		this._userId = userId;
	}

	start() {
		subscribe(syncIds.getLiveOperator(this._userId), (doc) => {
			callbackEvents.emit(this.callbackTypes.onConnect, doc.value || {});

			doc.on("updated", (event) => {
				callbackEvents.emit(this.callbackTypes.onUpdate, event);
			});
		});
	}
}

export default LiveOperatorSync;
