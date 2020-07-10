import React from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

import isUserOperator from "@/utils/is-operator";
import ScreenContainer from "@/components/ScreenContainer";
import { ViewUserProps } from "@/utils/common-prop-types";

import ErrorView from "./Error";
import Introduction from "./Introduction";
import OperatorDetails from "./Operator/Details";
import OperatorAction from "./Operator/Action";
import Visitor from "./Visitor";

const ViewUserScreen = ({ error, viewUser, onStartCallSession }) => {
	const [css] = useStyletron();

	const isOperator = isUserOperator(viewUser);

	if (isEmpty(error)) {
		return (
			<ScreenContainer
				id="callsesh-view-user"
				className={css({
					display: "flex",
					flexDirection: "column"
				})}
			>
				<div
					className={css({
						marginBottom: "20px"
					})}
				>
					<Introduction viewUser={viewUser} />
				</div>
				<div className={css({ flexGrow: "1" })}>
					{isOperator ? (
						<Grid gridGutters="0px">
							<Cell span={[12, 5, 7]}>
								<OperatorDetails viewUser={viewUser} />
							</Cell>
							<Cell span={[12, 3, 5]}>
								<OperatorAction
									viewUser={viewUser}
									onStart={onStartCallSession}
								/>
							</Cell>
						</Grid>
					) : (
						<Visitor />
					)}
				</div>
			</ScreenContainer>
		);
	}

	return (
		<ScreenContainer
			id="callsesh-view-user-error"
			className={css({ margin: "auto" })}
		>
			<ErrorView error={error} />
		</ScreenContainer>
	);
};

ViewUserScreen.propTypes = {
	viewUser: ViewUserProps.isRequired,
	error: PropTypes.object,
	onStartCallSession: PropTypes.func
};

ViewUserScreen.defaultProps = {
	error: {},
	onStartCallSession() {}
};

export default ViewUserScreen;
