/**
 * Simple text highlight component
 */

import React from "react";
import { useStyletron } from "baseui";

import { ChildrenProps } from "@/utils/common-prop-types";

const Highlight = ({ children }) => {
	const [css, theme] = useStyletron();

	return (
		<strong className={css({ color: theme.colors.accent })}>{children}</strong>
	);
};

Highlight.propTypes = {
	children: ChildrenProps.isRequired
};

export default Highlight;
