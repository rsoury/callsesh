/* eslint-disable no-underscore-dangle */

/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext } from "react";
import Router from "next/router";
import isEmpty from "is-empty";

import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";
import { UserContext } from "@/components/UserProvider";
import { setUser as setErrorTrackingUser } from "@/utils/handle-exception";

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
export const setUser = (user) => {
	const { setUser: setUserState } = useContext(UserContext);
	setUserState(user);

	return user;
};

function useUser({ required } = {}) {
	const {
		user,
		removeUser,
		getUser,
		loading,
		setUser: setUserState
	} = useContext(UserContext);

	useEffect(() => {
		// If user already exists or is currently being fetched.
		if (!loading && user) {
			ensureUserRegistered(user);
			setErrorTrackingUser(user);
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

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
