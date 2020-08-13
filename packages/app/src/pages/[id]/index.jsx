/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useEffect, useState, useCallback } from "react";
import isEmpty from "is-empty";
import { toaster } from "baseui/toast";
import { useRouter } from "next/router";
import MobileDetect from "mobile-detect";
import ono from "@jsdevtools/ono";
import * as authManager from "@/server/auth-manager";

import ViewUserScreen from "@/frontend/screens/ViewUser";
import InSessionScreen from "@/frontend/screens/InSession";
import SessionPageTitle from "@/frontend/components/SessionPageTitle";
import request from "@/utils/request";
import {
	ViewUserProps,
	ErrorPageProps
} from "@/frontend/utils/common-prop-types";
import * as routes from "@/routes";
import useUser, { useSetUser } from "@/frontend/hooks/use-user";
import {
	ERROR_TYPES,
	CALL_SESSION_USER_TYPE,
	CALL_SESSION_START_TIMEOUT
} from "@/constants";
import handleException, { alerts } from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import { useUserRouteReferrer } from "@/frontend/hooks/use-route-referrer";
import { CallSessionSync } from "@/frontend/utils/sync";
import isOperatorMeterActive from "@/utils/is-operator-meter-active";
import getUserPronoun from "@/utils/get-user-pronoun";
import isUserOperator from "@/utils/is-operator";

let startSessionTimeout = null; // instantiate outside of the component... no re-render should reinstantiate
const setSessionTimeout = (cb) => {
	startSessionTimeout = setTimeout(cb, CALL_SESSION_START_TIMEOUT);
	return startSessionTimeout;
};

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ viewUser: viewUserBase, error }) => {
	const [viewUser, setViewUser] = useState(viewUserBase);
	const [user] = useUser();
	const setUser = useSetUser();
	const [, setUserRouteReferrer] = useUserRouteReferrer();
	const router = useRouter();

	const md = new MobileDetect(window.navigator.userAgent);

	// EMULATE: Add users into session
	// useEffect(() => {
	// 	if (isEmpty(error) && !isEmpty(user)) {
	// 		setTimeout(() => {
	// 			setUser({
	// 				...user,
	// 				callSession: {
	// 					as: "caller",
	// 					with: viewUser.username
	// 				}
	// 			});
	// 			setViewUser({
	// 				...viewUser,
	// 				callSession: {
	// 					as: "caller",
	// 					with: user.username
	// 				}
	// 			});
	// 		}, 1000);
	// 	}
	// }, []);

	// Set current pathname to userRouteReferrer state if error is empty.
	useEffect(() => {
		if (isEmpty(error)) {
			setUserRouteReferrer(window.location.pathname);
		}
	}, [error]);

	const handleStartCallSession = useCallback(
		(done = () => {}) => {
			// Add to an undoable session state
			setUser({
				...user,
				callSession: {
					with: viewUser.username,
					as: CALL_SESSION_USER_TYPE.caller
				}
			});

			// Set a timeout before starting the call session to give the end user
			// Start Call Session between user and viewUser
			setSessionTimeout(() => {
				request
					.post(routes.api.call, {
						operator: viewUser.username
					})
					.then(({ data }) => data)
					.then(({ proxyPhoneNumber, callSession }) => {
						// Add callsession to user state
						setUser({
							...user,
							callSession: callSession.caller
						});

						// Add callsession to view user state
						setViewUser({
							...viewUser,
							callSession: callSession.operator
						});

						// Check if mobile and latest browsers, and if so use tel:
						if (md.phone()) {
							window.location.href = `tel:${proxyPhoneNumber}`;
						}
					})
					.catch((e) => {
						const { data: err = e } = e.response || {}; // Get error body, otherwise default to returned error.
						// Check if err is common and toast/react accordingly.
						switch (err.type) {
							case ERROR_TYPES.paymentMethodRequired:
								toaster.info(
									`A payment method is required to make calls. Please wait while we redirect you to your wallet...`
								);
								router.push(routes.page.settings.wallet);
								break;
							case ERROR_TYPES.paymentMethodInvalid:
								toaster.negative(
									`Your selected payment method is not valid or has insufficient funds. Please wait while we redirect you to your wallet...`
								);
								router.push(routes.page.settings.wallet);
								break;
							case ERROR_TYPES.operatorUnavailable:
								toaster.negative(
									`A call cannot be made. The operator is unavailable.`
								);
								// Reload the page her to ensure latest view user status to displayed.
								router.reload();
								break;
							case ERROR_TYPES.operatorBusy:
								toaster.negative(
									`The operator is currently in a call. Please check back later.`
								);
								break;
							case ERROR_TYPES.callSessionExists:
								toaster.warning(
									`You're already in a call session with another operator. You can only be in one call session at a time.`
								);
								break;
							case ERROR_TYPES.operatorRequired:
							case ERROR_TYPES.userBlocked:
								alerts.error();
								break;
							default:
								handleException(err);
								alerts.error();
								break;
						}
					})
					.finally(() => {
						done();
					});
			});
		},
		[user, viewUser, startSessionTimeout]
	);

	const handleUndoCallSession = useCallback(() => {
		// Add to an undoable session state
		setUser({
			...user,
			callSession: {}
		});

		clearTimeout(startSessionTimeout);
	}, [user, startSessionTimeout]);

	// Handle notification toggle
	const handleToggleNotify = useCallback(
		(done = () => {}) => {
			const { notified: notifiedUsers = [] } = viewUser;
			const isNotified = notifiedUsers.includes(user.username);
			const notifyRoute = routes.build.notify(viewUser.username);
			(isNotified ? request.delete(notifyRoute) : request.post(notifyRoute))
				.then(({ data }) => data)
				.then(({ notified = [] }) => {
					// Set current viewUser notified list to one retrieved from server
					setViewUser({
						...viewUser,
						notified
					});
				})
				.catch((err) => {
					handleException(err);
					alerts.error();
				})
				.finally(() => {
					done();
				});
		},
		[user, viewUser]
	);

	const handleEndSession = useCallback(
		(done = () => {}) => {
			// eslint-disable-next-line
			const resp = window.confirm(`Are you sure you want to end this session?`);
			if (!resp) {
				return done();
			}

			toaster.info(`Ending your session with ${viewUser.givenName}...`);

			// End the session
			return CallSessionSync.end()
				.then(() => {
					// Remove call session from user state
					setUser({
						...user,
						callSession: {}
					});

					// Remove call session from view user state
					setViewUser({
						...viewUser,
						callSession: {}
					});
				})
				.finally(() => {
					done();
				});
		},
		[user]
	);

	const handleCall = useCallback((done = () => {}) => {
		// Send an SMS and Toast when desktop, otherwise trigger tel:
		request
			.get(routes.api.call, {
				params: {
					sms: !md.phone()
				}
			})
			.then(({ proxyPhoneNumber }) => {
				if (md.phone()) {
					window.location.href = `tel:${proxyPhoneNumber}`;
				} else {
					toaster.info(
						`You should receive an SMS with a phone number to call that will connect you to operator.`
					);
				}
			})
			.catch((err) => {
				handleException(err);
				alerts.error();
			})
			.finally(() => {
				done();
			});
	}, []);

	const handleToggleMeter = useCallback(
		(done = () => {}) => {
			if (isOperatorMeterActive(user)) {
				// Stop the meter
				CallSessionSync.stopMeter(user.callSession.id)
					.then(({ callSession = {} }) => {
						setUser({
							...user,
							callSession: {
								...user.callSession,
								...callSession
							}
						});
					})
					.finally(() => {
						done();
					});
			} else {
				// Start the meter
				CallSessionSync.startMeter(user.callSession.id)
					.then(({ callSession = {} }) => {
						setUser({
							...user,
							callSession: {
								...user.callSession,
								...callSession
							}
						});

						toaster.info(
							`${viewUser.givenName} has been notified that the meter has started!`
						);
					})
					.finally(() => {
						done();
					});
			}
		},
		[user, viewUser]
	);

	// Handle working toggle
	const handleToggleWork = useCallback(
		(done = () => {}) => {
			const { contacts: workingContacts = [] } = viewUser;
			const isWorkingContact = workingContacts.includes(user.username);
			if (isWorkingContact) {
				// eslint-disable-next-line
				const resp = window.confirm(
					`Are you sure you want to stop working with ${viewUser.givenName}?`
				);
				if (!resp) {
					return done();
				}
			}
			const workRoute = routes.build.work(viewUser.username);
			return (isWorkingContact
				? request.delete(workRoute)
				: request.post(workRoute)
			)
				.then(({ data }) => data)
				.then(({ contacts = [] }) => {
					// Set current viewUser notified list to one retrieved from server
					setViewUser({
						...viewUser,
						contacts
					});
				})
				.catch((err) => {
					handleException(err);
					alerts.error();
				})
				.finally(() => {
					done();
				});
		},
		[user, viewUser]
	);

	// If users in session with each other, show full screen InSessionScreen
	// If chat is open, render chat page
	return (
		<>
			{!isEmpty(user.callSession) ? (
				<>
					<SessionPageTitle
						name={viewUser.givenName}
						status={user.callSession.status}
					/>
					<InSessionScreen
						viewUser={viewUser}
						onEnd={handleEndSession}
						onUndo={handleUndoCallSession}
						onCall={handleCall}
						onToggleMeter={handleToggleMeter}
					/>
				</>
			) : (
				<ViewUserScreen
					error={error}
					viewUser={viewUser}
					actions={{
						onStart: handleStartCallSession,
						onToggleNotify: handleToggleNotify,
						onToggleWork: handleToggleWork
					}}
				/>
			)}
		</>
	);
};

ViewUser.propTypes = {
	viewUser: ViewUserProps,
	error: ErrorPageProps
};

ViewUser.defaultProps = {
	viewUser: {},
	error: {
		code: 404,
		message: "This user cannot be found"
	}
};

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/", id: username }
}) {
	return ssrUser({ req, res }, async (user) => {
		// If user does exist...
		if (!isEmpty(user)) {
			// If user is not registered, redirect to register page
			if (!user.isRegistered) {
				res.writeHead(302, {
					Location: `${routes.page.register}?return_url=${returnUrl}`
				});
				res.end();
			}
		}

		try {
			const viewUser = await authManager.getUserByUsername(username);

			if (isEmpty(viewUser)) {
				// See: https://github.com/zeit/next.js/issues/3362 for managing error pages.
				// Defalts props, so you can just return an empty object
				return {
					props: {
						user
					}
				};
			}

			return {
				props: {
					user,
					viewUser,
					seo: {
						title: `Meet ${viewUser.givenName}! ${getUserPronoun(viewUser)} ${
							isUserOperator(viewUser)
								? `offering ${viewUser.purpose} over a
											call session`
								: `making calls on Callsesh. You can too!`
						}`
					},
					error: {}
				}
			};
		} catch (err) {
			handleException(ono(err, { username }));
			return {
				props: {
					user,
					error: {
						code: 500,
						message:
							"Oops! Something has gone wrong. We have been notified and will look into it"
					}
				}
			};
		}
	});
}

export default ViewUser;
