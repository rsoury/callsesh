/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext, useCallback } from "react";
import Router from "next/router";
import isEmpty from "is-empty";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/Providers/UserProvider";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import isUserOperator from "@/utils/is-operator";
import { LiveOperatorSync, CallSessionSync } from "@/utils/sync";

/**
 * Helper function to set user state
 */
export const useSetUser = () => {
	const { setUser: setUserState } = useContext(UserContext);

	return setUserState;
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
				const callSessionSync = new CallSessionSync(callSession.id);

				callSessionSync.listen("onConnect", (value) => {
					setUserState({
						...user,
						callSession: {
							...callSession,
							...value
						}
					});
				});

				callSessionSync.listen("onUpdate", (event) => {
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
				callSessionSync.listen("onRemove", () => {
					setUserState({
						...user,
						callSession: {}
					});
				});

				callSessionSync.start();

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
			const liveOperatorSync = new LiveOperatorSync(user.id);
			liveOperatorSync.listen("onUpdate", (event) => {
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
