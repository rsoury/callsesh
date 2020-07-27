import isEmpty from "is-empty";

import { syncIds, subscribe, events } from "./client";
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
			events.emit(this.callbackTypes.onConnect, doc.value || {});

			doc.on("updated", (event) => {
				events.emit(this.callbackTypes.onUpdate, event);
			});
		});
	}
}

export default LiveOperatorSync;
