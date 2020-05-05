import React from "react";
import PropTypes from "prop-types";

const Emoji = ({ label, symbol }) => (
	<span
		className="emoji"
		role="img"
		aria-label={label || ""}
		aria-hidden={label ? "false" : "true"}
	>
		{symbol}
	</span>
);

Emoji.propTypes = {
	label: PropTypes.string.isRequired,
	symbol: PropTypes.string.isRequired
};

export default Emoji;
