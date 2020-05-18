/**
 * Simple text highlight component
 */

import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import { ChildrenProps } from "@/utils/common-prop-types";

const Highlight = ({ children, noBreak }) => {
	const [css, theme] = useStyletron();

	return (
		<strong
			className={css({
				color: theme.colors.accent,
				whiteSpace: noBreak ? "nowrap" : "normal"
			})}
		>
			{children}
		</strong>
	);
};

Highlight.propTypes = {
	children: ChildrenProps.isRequired,
	noBreak: PropTypes.bool
};

Highlight.defaultProps = {
	noBreak: false
};

export default Highlight;
