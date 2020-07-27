/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useEffect, useState, useCallback } from "react";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import debounce from "lodash/debounce";
import { toaster } from "baseui/toast";
import Router from "next/router";
import MobileDetect from "mobile-detect";
import ono from "@jsdevtools/ono";
import * as authManager from "@/server/auth-manager";

import Layout from "@/components/Layout";
import ViewUserScreen from "@/components/Screens/ViewUser";
import InSessionScreen from "@/components/Screens/InSession";
import SessionPageTitle from "@/components/SessionPageTitle";
import request from "@/utils/request";
import { ViewUserProps, ErrorPageProps } from "@/utils/common-prop-types";
import * as routes from "@/routes";
import useUser, { useSetUser } from "@/hooks/use-user";
import { ERROR_TYPES, CALL_SESSION_STATUS } from "@/constants";
import handleException, { alerts } from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import { useUserRouteReferrer } from "@/hooks/use-route-referrer";
import checkCallSession from "@/utils/check-call-session";
import { CallSessionSync } from "@/utils/sync";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ viewUser: viewUserBase, error }) => {
	const [, theme] = useStyletron();
	const [viewUser, setViewUser] = useState(viewUserBase);
	const [user] = useUser();
	const setUser = useSetUser();
	const [, setUserRouteReferrer] = useUserRouteReferrer();

	const md = new MobileDetect(window.navigator.userAgent);

	const { isSame: inSessionWithViewUser } = checkCallSession(user, viewUser);

	// EMULATE: Add users into session
	useEffect(() => {
		if (isEmpty(error) && !isEmpty(user)) {
			setTimeout(() => {
				setUser({
					...user,
					callSession: {
						id: "emulated-session",
						as: "operator",
						with: viewUser.username
					}
				});
				setViewUser({
					...viewUser,
					callSession: {
						id: "emulated-session",
						as: "caller",
						with: user.username
					}
				});
			}, 1000);
		}
	}, []);

	// Set current pathname to userRouteReferrer state if error is empty.
	useEffect(() => {
		if (isEmpty(error)) {
			setUserRouteReferrer(window.location.pathname);
		}
	}, [error]);

	const handleStartCallSession = useCallback(
		debounce((done = () => {}) => {
			// Start Call Session between user and viewUser
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
							Router.push(routes.page.settings.wallet);
							break;
						case ERROR_TYPES.operatorUnavailable:
							toaster.negative(
								`A call cannot be made. The operator is unavailable.`
							);
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
		}, 500),
		[user, viewUser]
	);

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
			request
				.post(routes.api.endCall, { force: true })
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

					toaster.info(`You're call session has ended.`);
				})
				.catch((err) => {
					handleException(err);
					alerts.error();
				})
				.finally(() => {
					done();
				});
		},
		[user]
	);

	const handleOpenChat = useCallback(() => {
		console.log("Open chat...");
	}, []);

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
			if (user.callSession.status === CALL_SESSION_STATUS.metering) {
				// Stop the meter
				CallSessionSync.stopMeter().finally(() => {
					done();
				});
			} else {
				// Start the meter
				CallSessionSync.startMeter()
					.then(() => {
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

	// If users in session with each other, show full screen InSessionScreen
	// If chat is open, render chat page
	return (
		<>
			{!isEmpty(user.callSession) && (
				<SessionPageTitle
					name={viewUser.givenName}
					status={user.callSession.status}
				/>
			)}
			{inSessionWithViewUser ? (
				<InSessionScreen
					viewUser={viewUser}
					onEndSession={handleEndSession}
					onOpenChat={handleOpenChat}
					onCall={handleCall}
					onToggleMeter={handleToggleMeter}
				/>
			) : (
				<Layout
					style={{
						[theme.mediaQuery.maxSmall]: {
							paddingBottom: "240px"
						}
					}}
				>
					<ViewUserScreen
						error={error}
						viewUser={viewUser}
						actions={{
							onStart: handleStartCallSession,
							onToggleNotify: handleToggleNotify
						}}
					/>
				</Layout>
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
