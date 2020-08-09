/**
 * Simple text highlight component
 */

import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import { ChildrenProps } from "@/frontend/utils/common-prop-types";

const Highlight = ({ children, type, noBreak }) => {
	const [css, theme] = useStyletron();

	return (
		<strong
			className={css({
				color: theme.colors[type],
				whiteSpace: noBreak ? "nowrap" : "normal"
			})}
		>
			{children}
		</strong>
	);
};

Highlight.propTypes = {
	children: ChildrenProps.isRequired,
	type: PropTypes.string,
	noBreak: PropTypes.bool
};

Highlight.defaultProps = {
	type: "accent",
	noBreak: false
};

export default Highlight;
