/**
 * Frontend util to manage all sync related logic with events.
 */

import once from "lodash/once";
import SyncClient from "twilio-sync";
import ono from "@jsdevtools/ono";
import { toaster } from "baseui/toast";
import isEmpty from "is-empty";
import EventEmitter from "eventemitter3";

import request from "@/utils/request";
import handleException from "@/utils/handle-exception";
import * as routes from "@/routes";

const getSyncClient = once(() => {
	return request
		.get(routes.api.token)
		.then(({ data }) => data)
		.then(({ token }) => {
			// Only define syncClient once
			const syncClient = new SyncClient(token.data);

			// Handle new token update on access token expiry
			syncClient.on("tokenAboutToExpire", () => {
				request
					.get(routes.api.token)
					.then(({ token: newToken }) => {
						syncClient.updateToken(newToken.data);
					})
					.catch((error) => {
						handleException(ono(error, { onExpire: true }));
					});
			});

			return syncClient;
		})
		.catch((e) => {
			handleException(e);
			toaster.negative(
				`Oops! There's been an error with the live connection to the session. Please refresh the page to try again.`
			);
		});
});

export const events = new EventEmitter();

export const callbackEvents = new EventEmitter();

// Create a way to restrict the amount of calls to a given Sync handler
const subscriptions = [];
export const subscribe = (uniqueId, handler) => {
	if (!isEmpty(uniqueId)) {
		if (subscriptions.includes(uniqueId)) {
			return null;
		}
		subscriptions.push(uniqueId);
	}

	return getSyncClient()
		.then((client) => client.document(uniqueId))
		.then((doc) => handler(doc))
		.catch((e) => handleException(e));
};

export const syncIds = {
	getLiveOperator(id) {
		return `LiveOperator:${id}`;
	},
	getCallSession(id) {
		return `CallSession:${id}`;
	}
};
