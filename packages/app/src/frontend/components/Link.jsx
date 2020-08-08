import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import NextLink from "next/link";
import { StyledLink } from "baseui/link";
import { ChildrenProps } from "@/frontend/utils/common-prop-types";

const Link = ({
	children,
	href,
	highlight,
	standard,
	style: styleProp,
	pass,
	button,
	newWindow,
	...props
}) => {
	const [css, theme] = useStyletron();

	const style = {
		cursor: "pointer",
		":hover": {
			textDecoration: "underline"
		},
		...styleProp
	};

	if (highlight) {
		style.color = `${theme.colors.accent} !important`;
		style[":hover"].color = `${theme.colors.accent600} !important`;
	}

	if (button) {
		style.textDecoration = "none !important";
	}

	let newWindowProps = {};
	if (newWindow) {
		newWindowProps = {
			target: "_blank",
			rel: "noopener noreferrer"
		};
	}

	if (standard) {
		return (
			<StyledLink
				href={href}
				{...newWindowProps}
				{...props}
				className={css(style)}
			>
				{children}
			</StyledLink>
		);
	}

	return (
		<NextLink href={href} passHref={pass}>
			<StyledLink {...newWindowProps} {...props} className={css(style)}>
				{children}
			</StyledLink>
		</NextLink>
	);
};

Link.propTypes = {
	children: ChildrenProps.isRequired,
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	highlight: PropTypes.bool,
	standard: PropTypes.bool,
	style: PropTypes.object,
	pass: PropTypes.bool, // Pass Href to child -- only for next link
	button: PropTypes.bool, // Whether or not to treat children like a button
	newWindow: PropTypes.bool // Whether or not to open in new window
};

Link.defaultProps = {
	highlight: false,
	standard: false,
	style: {},
	pass: false,
	button: false,
	newWindow: false
};

export default Link;
