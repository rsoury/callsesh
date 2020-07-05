/* eslint-disable no-underscore-dangle */

/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext, useCallback } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
// import { useRequest } from "@callsesh/utils";
// import debounce from "lodash/debounce";
import once from "lodash/once";
import { toaster } from "baseui/toast";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/Providers/UserProvider";
// import handleException, {
// 	setUser as setErrorTrackingUser
// } from "@/utils/handle-exception";
import stripTrailingSlash from "@/utils/strip-trailing-slash";

const toastRedirectToSession = once(() => {
	toaster.info(
		`You're currently in a call session! Please wait while we redirect you to the session...`
	);
});

// const handleExceptionDebounced = debounce((...params) => {
// 	handleException(...params);
// }, 500);

// We need to check whether user is registered. If not redirect to /register
// const ensureUserRegistered = (user) => {
// 	if (isEmpty(user)) {
// 		return false;
// 	}
// 	const { isRegistered } = user;
// 	if (!isRegistered) {
// 		// Redirect to get started if not registered
// 		if (window.location.pathname.indexOf(routes.page.register) !== 0) {
// 			Router.push(appendReturnUrl(routes.page.register, true));
// 			return false;
// 		}
// 	}
// 	if (!isEmpty((user || {}).callSession)) {
// 		const inSessionPathname = routes.build.user(user.callSession.with);
// 		if (
// 			stripTrailingSlash(window.location.pathname) !==
// 			stripTrailingSlash(inSessionPathname)
// 		) {
// 			toastRedirectToSession();
// 			Router.push(inSessionPathname);
// 			return false;
// 		}
// 	}
// 	return true;
// };

// Just a helper to wrap functions to call with user object.
// const _resolveUser = (user) => {
// 	ensureUserRegistered(user);
// };

// const resolveUser = debounce(_resolveUser, 500);

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

	// TODO: Will be replaced with Subscription to realtime socket channel
	// useRequest(
	// 	isEmpty((user || {}).callSession)
	// 		? null
	// 		: routes.build.callUser(user.callSession.with),
	// 	{
	// 		initialData: {},
	// 		refreshInterval: 60 * 1000, // 60 seconds
	// 		refreshWhenHidden: false,
	// 		onSuccess({ data: { callSession } }) {
	// 			setUserState({
	// 				...user,
	// 				callSession: callSession.caller
	// 			});
	// 		},
	// 		onError(err) {
	// 			handleExceptionDebounced(err);
	// 			setUserState({
	// 				...user,
	// 				callSession: {}
	// 			});
	// 		}
	// 	}
	// );

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

				// EMULATE: Event retrieval
				setTimeout(() => {
					setUserState({
						...user,
						callSession: {
							...callSession,
							status: "active"
							// status: "metering"
						}
					});
				}, 1000);

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
