/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState, useCallback } from "react";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import { Grid, Cell } from "baseui/layout-grid";
import debounce from "lodash/debounce";
import { toaster } from "baseui/toast";
import Router from "next/router";
import MobileDetect from "mobile-detect";

import Layout from "@/components/Layout";
import ScreenContainer from "@/components/ScreenContainer";
import * as ViewUserScreen from "@/components/Screens/ViewUser";
import request from "@/utils/request";
import {
	UserProps,
	ViewUserProps,
	ErrorPageProps
} from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import * as routes from "@/routes";
import { useSetUser } from "@/hooks/use-user";
import { ERROR_TYPES } from "@/constants";
import handleException, { alerts } from "@/utils/handle-exception";

import getServerSideProps from "./_[id]-ssr";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, viewUser: viewUserBase, error }) => {
	const [css, theme] = useStyletron();
	const [isStartingCall, setStartingCall] = useState(false);
	const [viewUser, setViewUser] = useState(viewUserBase);
	const setUser = useSetUser();

	const isOperator = isUserOperator(viewUser);

	const md = new MobileDetect(window.navigator.userAgent);

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
					toaster.positive(
						`Your call session has started. You should receive an SMS with a phone number to call that will connect you to operator.`
					);

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

	return (
		<Layout
			style={{
				[theme.mediaQuery.maxSmall]: {
					paddingBottom: "200px"
				}
			}}
		>
			{isEmpty(error) ? (
				<ScreenContainer id="callsesh-view-user">
					<ViewUserScreen.Introduction viewUser={viewUser} />
					{isOperator ? (
						<Grid gridGutters="0px">
							<Cell span={[12, 5, 7]}>
								<ViewUserScreen.OperatorDetails viewUser={viewUser} />
							</Cell>
							<Cell span={[12, 3, 5]}>
								<ViewUserScreen.OperatorAction
									viewUser={viewUser}
									onStart={startCallSession}
									isStarting={isStartingCall}
								/>
							</Cell>
						</Grid>
					) : (
						<ViewUserScreen.Visitor />
					)}
				</ScreenContainer>
			) : (
				<ScreenContainer
					id="callsesh-view-user-error"
					className={css({ margin: "auto" })}
				>
					<ViewUserScreen.Error error={error} />
				</ScreenContainer>
			)}
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

export { getServerSideProps };

export default ViewUser;
