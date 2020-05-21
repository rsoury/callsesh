/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
import debounce from "lodash/debounce";
import Queue from "better-queue";
import MemoryStore from "better-queue-memory";

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
 * Create a queue for polling.
 * Poll call session against a username for currently authed user.
 * Dynamically import Visiblity, as it requires window
 */
const getCallSesssionPollQueue = () => {
	console.log("INSTANTIATE QUEUE");
	const q = new Queue(
		(username, done) => {
			console.log("REQUEST CALL SESSION");
			request
				.get(routes.build.callUser(username))
				.then(({ data }) => data)
				.then(({ callSession }) => {
					done(null, callSession.caller);
				})
				.catch((err) => {
					done(err, {});
				});
		},
		{
			batchSize: 1,
			concurrent: 1, // 1 item at a time
			batchDelay: 30 * 1000, // 30 seconds
			store: new MemoryStore()
		}
	);

	// Use Visibility in browser
	if (typeof window !== "undefined") {
		import("visibilityjs")
			.then((m) => m.default || m)
			.then((Visibility) => {
				const listener = Visibility.change(() => {
					if (Visibility.hidden()) {
						console.log("PAUSE POLL QUEUE");
						q.pause();
					} else {
						console.log("RESUME POLL QUEUE");
						q.resume();
					}
				});
				q.on("empty", () => {
					q.resume();
					console.log("UNBIND VISIBILITY LISTENER");
					Visibility.unbind(listener);
				});
			});
	}

	return q;
};

// On user change, manage all session updates
let queue = getCallSesssionPollQueue();
const pushQueue = debounce((...params) => queue.push(...params), 500);
const resetQueue = debounce((q) => {
	q.destroy();
	return getCallSesssionPollQueue();
}, 500);

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

	useEffect(() => {
		// On task finish set state
		queue.on("task_finish", (taskId, callSession) => {
			setUserState({
				...user,
				callSession
			});
			if (isEmpty(callSession)) {
				queue = resetQueue(queue);
			}
		});
		queue.on("task_failed", (taskId, err) => {
			handleException(err);
			setUserState({
				...user,
				callSession: {}
			});
			queue = resetQueue(queue);
		});

		if (!isEmpty(user.callSession)) {
			pushQueue(user.callSession.with);
		}
	}, [user, queue]);

	return [user, loading, { removeUser, getUser, setUser: setUserState }];
}

export default useUser;
