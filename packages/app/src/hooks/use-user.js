/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
import { useRequest } from "@callsesh/utils";
import debounce from "lodash/debounce";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/Providers/UserProvider";
import handleException, {
	setUser as setErrorTrackingUser
} from "@/utils/handle-exception";
import { identifyUser } from "@/utils/signals";

const handleExceptionDebounced = debounce((...params) => {
	handleException(...params);
}, 500);

// We need to check whether user is registered. If not redirect to /register
const ensureUserRegistered = (user) => {
	if (isEmpty(user)) {
		return false;
	}
	const { isRegistered } = user;
	if (!isRegistered) {
		// Redirect to get started if not registered
		if (window.location.pathname.indexOf(routes.page.register) !== 0) {
			Router.push(appendReturnUrl(routes.page.register, true));
			return false;
		}
	}
	return true;
};

// Just a helper to wrap functions to call with user object.
const resolveUser = (user) => {
	ensureUserRegistered(user);
	setErrorTrackingUser(user);
	identifyUser(user);
};

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
	useRequest(
		isEmpty((user || {}).callSession)
			? null
			: routes.build.callUser(user.callSession.with),
		{
			initialData: {},
			refreshInterval: 60 * 1000, // 60 seconds
			refreshWhenHidden: false,
			onSuccess({ data: { callSession } }) {
				setUserState({
					...user,
					callSession: callSession.caller
				});
			},
			onError(err) {
				handleExceptionDebounced(err);
				setUserState({
					...user,
					callSession: {}
				});
			}
		}
	);

	// Manage user tracking, guidance and fetching
	useEffect(() => {
		// If user already fetched
		if (!loading && user) {
			if (!isEmpty(user)) {
				// If user object has data...  then -- SSR can pass an empty user object to indicate no user.
				resolveUser(user);
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
				resolveUser(newUser);
			}
		});

		return () => {
			isMounted = false;
		};
	}, []);

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
