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

const toastRedirectToSession = once(() => {
	toaster.info(
		`You're currently in a call session! Please wait while we redirect you to the session...`
	);
});

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

// Define flags that prevent oversubscribing to realtime events
const subscriptions = [];
const subscribe = (uniqueId, handler) => {
	if (!isEmpty(uniqueId)) {
		if (subscriptions.includes(uniqueId)) {
			return null;
		}
		subscriptions.push(uniqueId);
	}

	return getSyncClient()
		.then((client) => handler(client))
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
				subscribe("CallSession", (client) => {
					// Load updates for the call session document
					client
						.document(`CallSession:${callSession.id}`)
						.then((doc) => {
							console.log(doc);

							setUserState({
								...user,
								callSession: {
									...callSession,
									...doc.value
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
						})
						.catch((e) => handleException(e));
				});

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
			toastRedirectToSession();
			Router.push(inSessionPathname);
			return false;
		}

		// When the current user is not is a callSession but is a live operator, listen for callSession related events
		if (isUserOperator(user) && user.isLive) {
			// Subscribe to operator user call session updates
			subscribe("LiveOperator", (client) => {
				console.log(subscriptions);
				client
					.document(`LiveOperator:${user.id}`)
					.then((doc) => {
						console.log(doc);

						setUserState({
							...user,
							callSession: {
								...user.callSession,
								...(doc.value.callSession || {})
							}
						});

						doc.on("updated", (event) => {
							console.log(event);

							setUserState({
								...user,
								callSession: {
									...user.callSession,
									...(event.value.callSession || {})
								}
							});
						});
					})
					.catch((err) => {
						handleException(err);
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
	}, [user]);

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
