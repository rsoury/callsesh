/* eslint-disable no-underscore-dangle */

/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext, useCallback } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
import once from "lodash/once";
import { toaster } from "baseui/toast";
import SyncClient from "twilio-sync";
import ono from "@jsdevtools/ono";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/Providers/UserProvider";
import handleException from "@/utils/handle-exception";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import request from "@/utils/request";
import isUserOperator from "@/utils/is-operator";
import * as syncDocumentName from "@/utils/get-sync-document-name";
import { CALL_SESSION_STATUS } from "@/constants";

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

/**
 * Helper function to set user state
 */
export const useSetUser = () => {
	const { setUser: setUserState } = useContext(UserContext);

	return setUserState;
};

// Create a way to restrict the amount of calls to a given Sync handler
const subscriptions = [];
const subscribe = (uniqueId, handler) => {
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

function useUser({ required } = {}) {
	const {
		user,
		removeUser,
		getUser,
		loading,
		setUser: setUserState
	} = useContext(UserContext);

	const resolveUser = useCallback(() => {
		if (isEmpty(user)) {
			return false;
		}

		// console.log(user);
		const { isRegistered, callSession } = user;

		// If user is not registered, redirect to register page.
		if (!isRegistered) {
			// Redirect to get started if not registered
			if (window.location.pathname.indexOf(routes.page.register) !== 0) {
				Router.push(appendReturnUrl(routes.page.register, true));
				return false;
			}
		}

		// If user is a call session, subscribe for session events or redirect to view user page.
		if (!isEmpty(callSession)) {
			const inSessionPathname = routes.build.user(callSession.with);
			if (
				stripTrailingSlash(window.location.pathname) ===
				stripTrailingSlash(inSessionPathname)
			) {
				// Subscribe to call session updates
				subscribe(
					syncDocumentName.getCallSessionDocument(callSession.id),
					(doc) => {
						// Once subscribed, default callSession status to pending.
						const { value = {} } = doc;
						// value.status = value.status || CALL_SESSION_STATUS.pending;

						// EMULATE: Default call session status
						value.status = value.status || CALL_SESSION_STATUS.metering;

						setUserState({
							...user,
							callSession: {
								...callSession,
								...value
							}
						});

						doc.on("updated", (event) => {
							console.log(event);

							setUserState({
								...user,
								callSession: {
									...callSession,
									...event.value
								}
							});
						});

						// On call session end.
						doc.on("removed", () => {
							setUserState({
								...user,
								callSession: {}
							});
						});
					}
				);

				// EMULATE: Event retrieval
				// setTimeout(() => {
				// 	setUserState({
				// 		...user,
				// 		callSession: {
				// 			...callSession,
				// 			// status: "in-call"
				// 			status: "active"
				// 			// status: "metering"
				// 		}
				// 	});
				// }, 1000);

				return true;
			}
			Router.push(inSessionPathname);
			return false;
		}

		// When the current user is not is a callSession but is a live operator, listen for callSession related events
		if (isUserOperator(user) && user.isLive) {
			// Subscribe to LiveOperator updates
			subscribe(syncDocumentName.getLiveOperatorDocument(user.id), (doc) => {
				doc.on("updated", (event) => {
					console.log("UPDATED!");
					console.log(event);

					setUserState({
						...user,
						callSession: {
							...user.callSession,
							...(event.value.callSession || {})
						}
					});
				});
			});
		}

		return true;
	}, [user]);

	// Manage user tracking, guidance and fetching
	useEffect(() => {
		// If user already fetched
		if (!loading && user) {
			if (!isEmpty(user)) {
				// If user object has data...  then -- SSR can pass an empty user object to indicate no user.
				resolveUser();
			}
			return () => {};
		}

		// Start user fetch
		let isMounted = true;

		getUser().then((newUser) => {
			// Only use the user if the component is still mounted
			// -- in case the component unmounts between initial request and promise resolve.
			if (isMounted) {
				// When the user is not logged in but login is required
				if (required && !newUser) {
					Router.replace(routes.page.login);
					return;
				}
				resolveUser();
			}
		});

		return () => {
			isMounted = false;
		};
	}, []);

	// Resolve user on user state change
	useEffect(() => {
		if (!loading && user) {
			resolveUser();
		}
	}, [user, loading]);

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
