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
import * as authManager from "@callsesh/utils/auth-manager";

import Layout from "@/components/Layout";
import ViewUserScreen from "@/components/Screens/ViewUser";
import InSessionScreen from "@/components/Screens/InSession";
import request from "@/utils/request";
import {
	UserProps,
	ViewUserProps,
	ErrorPageProps
} from "@/utils/common-prop-types";
import * as routes from "@/routes";
import { useSetUser } from "@/hooks/use-user";
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";
import handleException, { alerts } from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import { useUserRouteReferrer } from "@/hooks/use-route-referrer";
import checkCallSession from "@/utils/check-call-session";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, viewUser: viewUserBase, error }) => {
	const [, theme] = useStyletron();
	const [isStartingCall, setStartingCall] = useState(false);
	const [viewUser, setViewUser] = useState(viewUserBase);
	const setUser = useSetUser();
	const [, setUserRouteReferrer] = useUserRouteReferrer();

	const md = new MobileDetect(window.navigator.userAgent);

	const { isSame: inSessionWithViewUser } = checkCallSession(user, viewUser);

	// Set current pathname to userRouteReferrer state if error is empty.
	useEffect(() => {
		if (isEmpty(error)) {
			setUserRouteReferrer(window.location.pathname);
		}
	}, [error]);

	const startCallSession = useCallback(
		debounce(() => {
			// Start Call Session between user and viewUser
			setStartingCall(true);
			request
				.post(routes.build.callUser(viewUser.username))
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

					// Toast to the user that they're about to receive a call.
					// toaster.positive(
					// 	`Your call session has started. You should receive an SMS with a phone number to call that will connect you to operator.`
					// );

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
					setStartingCall(false);
				});
		}, 500),
		[user, viewUser]
	);

	// If users in session with each other, show full screen InSesssionScreen
	if (inSessionWithViewUser) {
		return <InSessionScreen viewUser={viewUser} />;
	}

	return (
		<Layout
			style={{
				[theme.mediaQuery.maxSmall]: {
					paddingBottom: "200px"
				}
			}}
		>
			<ViewUserScreen
				error={error}
				viewUser={viewUser}
				onStart={startCallSession}
				isStarting={isStartingCall}
			/>
		</Layout>
	);
};

ViewUser.propTypes = {
	user: UserProps,
	viewUser: ViewUserProps,
	error: ErrorPageProps
};

ViewUser.defaultProps = {
	user: {},
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

			// EMULATE: Add current user to callsesion with View User
			viewUser.callSession = {
				as: CALL_SESSION_USER_TYPE.operator,
				with: "hello"
			};

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
