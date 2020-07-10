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

const toastRedirectToSession = once(() => {
	toaster.info(
		`You're currently in a call session! Please wait while we redirect you to the session...`
	);
});

/**
 * Helper function to set user state
 */
export const useSetUser = () => {
	const { setUser: setUserState } = useContext(UserContext);

	return setUserState;
};

let syncClient;

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
				// Subscribe to call session channel
				request
					.get(routes.api.token)
					.then(({ token }) => {
						// Only define syncClient once
						if (!isEmpty(syncClient)) {
							return true;
						}

						syncClient = new SyncClient(token);

						// Load updates for the call session document
						syncClient.document(`CallSession:${callSession.id}`).then((doc) => {
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
						});

						// Handle new token update on access token expiry
						syncClient.on("tokenAboutToExpire", () => {
							request
								.get(routes.api.token)
								.then(({ token: newToken }) => {
									syncClient.updateToken(newToken);
								})
								.catch((error) => {
									handleException(ono(error, { onExpire: true }));
								});
						});
					})
					.catch((e) => {
						handleException(e);
						toaster.negative(
							`Oops! There's been an error with the live connection to the session. Please refresh the page to try again.`
						);
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

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
