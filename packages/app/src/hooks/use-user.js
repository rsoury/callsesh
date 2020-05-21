/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
import debounce from "lodash/debounce";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/Providers/UserProvider";
import handleException, {
	setUser as setErrorTrackingUser
} from "@/utils/handle-exception";
import request from "@/utils/request";

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

/**
 * Helper function to set user state
 */
export const useSetUser = () => {
	const { setUser: setUserState } = useContext(UserContext);

	return setUserState;
};

/**
 * Function that is debounced to prevent simultaneous execution
 * Poll call session against a username for currently authed user.
 * Dynamically import Visiblity, as it requires window
 */
let poll = -1;
const pollCallSession = debounce(
	(username, done, { duration = 30 * 1000 } = {}) => {
		if (poll < 0) {
			console.log("START POLLING");
			import("visibilityjs")
				.then((m) => m.default || m)
				.then((Visibility) => {
					// Responds with index of poll. ie. 0
					poll = Visibility.every(duration, () => {
						console.log("REQUEST CALL SESSION");
						request
							.get(routes.build.callUser(username))
							.then(({ data }) => data)
							.then(({ callSession }) => {
								done(callSession.caller);
								if (isEmpty(callSession.caller)) {
									Visibility.stop(poll);
									poll = -1;
								}
							})
							.catch((err) => {
								handleException(err);
								done({});
								Visibility.stop(poll);
								poll = -1;
							});
					});
				});
		}
	},
	5000,
	{
		leading: true,
		trailing: false
	}
);

function useUser({ required } = {}) {
	const {
		user,
		removeUser,
		getUser,
		loading,
		setUser: setUserState
	} = useContext(UserContext);

	// Manage user tracking, guidance and fetching
	useEffect(() => {
		// If user already fetched
		if (!loading && user) {
			if (!isEmpty(user)) {
				// If user object has data...  then -- SSR can pass an empty user object to indicate no user.
				ensureUserRegistered(user);
				setErrorTrackingUser(user);
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
				ensureUserRegistered(newUser);
				setErrorTrackingUser(newUser);
			}
		});

		return () => {
			isMounted = false;
		};
	}, []);

	// On user change, manage all session updates
	useEffect(() => {
		if (!isEmpty(user.callSession)) {
			pollCallSession(user.callSession.with, (callSession) => {
				setUserState({
					...user,
					callSession
				});
			});
		}
	}, [user]);

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
