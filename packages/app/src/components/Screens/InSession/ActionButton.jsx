import React from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { useStyletron } from "baseui";
import {
	Button,
	SHAPE as BUTTON_SHAPE,
	SIZE as BUTTON_SIZE
} from "baseui/button";

import { ChildrenProps } from "@/utils/common-prop-types";

const InSessionActionButton = ({ variant, children, retain, ...props }) => {
	const [css, theme] = useStyletron();

	const overrides = {
		BaseButton: {
			style: {
				margin: "0 20px"
			}
		}
	};

	const innerStyle = {
		paddingRight: isEmpty(props.startEnhancer) ? "0px" : "5px" // eslint-disable-line
	};

	if (!isEmpty(variant)) {
		overrides.BaseButton.style.backgroundColor = theme.colors[variant];
		overrides.BaseButton.style[":hover"] = {
			backgroundColor: theme.colors[`${variant}300`]
		};
	}

	if (!retain) {
		overrides.BaseButton.style[theme.mediaQuery.maxSmall] = {
			width: "70px",
			height: "70px"
		};
		overrides.StartEnhancer = {
			style: {
				[theme.mediaQuery.maxSmall]: {
					marginRight: "0px"
				}
			}
		};
		innerStyle[theme.mediaQuery.maxSmall] = {
			display: "none"
		};
	}

	return (
		<Button
			size={BUTTON_SIZE.large}
			shape={BUTTON_SHAPE.pill}
			overrides={overrides}
			{...props}
		>
			<span className={css(innerStyle)}>{children}</span>
		</Button>
	);
};

InSessionActionButton.propTypes = {
	children: ChildrenProps.isRequired,
	variant: PropTypes.string,
	retain: PropTypes.bool
};

InSessionActionButton.defaultProps = {
	variant: "",
	retain: false
};

export default InSessionActionButton;
