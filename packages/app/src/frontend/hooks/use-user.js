/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import isEmpty from "is-empty";
import { toaster } from "baseui/toast";

import * as routes from "@/routes";
import appendReturnUrl from "@/frontend/utils/append-return-url";
import { UserContext } from "@/frontend/components/Providers/UserProvider";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import isUserOperator from "@/utils/is-operator";
import { LiveOperatorSync, CallSessionSync } from "@/frontend/utils/sync";

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
	const router = useRouter();

	const resolveUser = useCallback(() => {
		if (isEmpty(user)) {
			return false;
		}

		const { isRegistered, callSession } = user;

		// If user is not registered, redirect to register page.
		if (!isRegistered) {
			// Redirect to get started if not registered
			if (router.asPath.indexOf(routes.page.register) !== 0) {
				router.push(appendReturnUrl(routes.page.register, true));
				return false;
			}
		}

		// If user is in a connected call session, subscribe for session events or redirect to view user page.
		if (!isEmpty((callSession || {}).id)) {
			const inSessionPathname = routes.build.user(callSession.with);
			if (
				stripTrailingSlash(router.asPath) ===
				stripTrailingSlash(inSessionPathname)
			) {
				// Subscribe to call session updates
				const callSessionSync = new CallSessionSync(callSession.id);

				callSessionSync.listen("onConnect", (value) => {
					// EMULATE: Start session connect status in metering
					// value.status = "ending";

					setUserState({
						...user,
						callSession: {
							...callSession,
							...value
						}
					});
				});

				callSessionSync.listen("onUpdate", (value) => {
					setUserState({
						...user,
						callSession: {
							...callSession,
							...value
						}
					});
				});

				// On call session end.
				callSessionSync.listen("onRemove", () => {
					setUserState({
						...user,
						callSession: {}
					});

					toaster.positive(
						`Your session has ended. Thank you for using Callsesh!`
					);
				});

				callSessionSync.start();

				return true;
			}
			router.push(inSessionPathname);
			return false;
		}

		// When the current user is not in a callSession but is a live operator, listen for callSession related events
		// This will update state with the call session data, redirecting the operator to the call session and then listening to further updates on the given call session sync.
		if (isUserOperator(user) && user.isLive) {
			// Subscribe to LiveOperator updates
			const liveOperatorSync = new LiveOperatorSync(user.id);
			liveOperatorSync.listen("onUpdate", (event) => {
				const newCallSession = {
					...user.callSession,
					...(event.value?.callSession || {})
				};

				setUserState({
					...user,
					callSession: newCallSession
				});

				// If the current user is already on the view user page, reload the page, otherwise there will be automatic redirect in logic for callSession state.
				if (!isEmpty(newCallSession)) {
					const inSessionPathname = routes.build.user(newCallSession.with);
					if (
						stripTrailingSlash(router.asPath) ===
						stripTrailingSlash(inSessionPathname)
					) {
						router.reload();
					}
				}
			});

			liveOperatorSync.start();
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
					router.replace(routes.page.login);
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
