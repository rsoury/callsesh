import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import isEmpty from "is-empty";

import { ChildrenProps } from "@/utils/common-prop-types";
import { CALL_SESSION_STATUS } from "@/constants";

const SessionPageTitle = ({ children, status, name }) => {
	const withName = isEmpty(name) ? "" : ` with ${name}`;
	let statusTitle = `In Session`;
	if (status === CALL_SESSION_STATUS.metering) {
		statusTitle = `Metering`;
	} else if (status === CALL_SESSION_STATUS.inCall) {
		statusTitle = `In Call`;
	}

	return (
		<>
			<Head>
				<title>
					Callsesh | {statusTitle}
					{withName}
				</title>
			</Head>
			{children}
		</>
	);
};

SessionPageTitle.propTypes = {
	children: ChildrenProps.isRequired,
	status: PropTypes.string,
	name: PropTypes.string
};

SessionPageTitle.defaultProps = {
	status: "",
	name: ""
};

export default SessionPageTitle;
