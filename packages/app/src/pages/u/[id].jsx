/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useCallback } from "react";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";

import Layout from "@/components/Layout";
import ScreenContainer from "@/components/ScreenContainer";
import * as ViewUserScreen from "@/components/Screens/ViewUser";
// import request from "@/utils/request";
import {
	UserProps,
	ViewUserProps,
	ErrorPageProps
} from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";

import getServerSideProps from "./_[id]-ssr";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, viewUser, error }) => {
	const [css, theme] = useStyletron();

	const isOperator = isUserOperator(viewUser);

	const startCallSession = useCallback(() => {
		// Start Call Session between user and viewUser
	}, [user, viewUser]);

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
						<ViewUserScreen.Operator
							viewUser={viewUser}
							onStart={startCallSession}
						/>
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
