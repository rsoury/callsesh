import React from "react";
import ErrorPage from "next/error";

const InlineErrorPage = (props) => {
	return (
		<div className="callsesh-error-container" id="callsesh-error">
			<ErrorPage {...props} />
		</div>
	);
};

export default InlineErrorPage;
