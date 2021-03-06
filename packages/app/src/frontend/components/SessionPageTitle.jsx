import React from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { NextSeo } from "next-seo";

import { CALL_SESSION_STATUS } from "@/constants";

const SessionPageTitle = ({ status, name }) => {
	const withName = isEmpty(name) ? "" : ` with ${name}`;
	let statusTitle = `In Session`;
	if (status === CALL_SESSION_STATUS.metering) {
		statusTitle = `Metering`;
	} else if (status === CALL_SESSION_STATUS.inCall) {
		statusTitle = `In Call`;
	}

	return <NextSeo title={`${statusTitle}${withName}`} />;
};

SessionPageTitle.propTypes = {
	status: PropTypes.string,
	name: PropTypes.string
};

SessionPageTitle.defaultProps = {
	status: "",
	name: ""
};

export default SessionPageTitle;
