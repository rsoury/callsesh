import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import NextLink from "next/link";
import { StyledLink } from "baseui/link";
import { ChildrenProps } from "@/utils/common-prop-types";

const Link = ({
	children,
	href,
	highlight,
	standard,
	style: styleProp,
	pass,
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
		style.color = theme.colors.accent;
		style[":hover"].color = theme.colors.accent600;
	}

	if (standard) {
		return (
			<StyledLink href={href} {...props} className={css(style)}>
				{children}
			</StyledLink>
		);
	}

	return (
		<NextLink href={href} passHref={pass}>
			<StyledLink {...props} className={css(style)}>
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
	pass: PropTypes.bool // Pass Href to child -- only for next link
};

Link.defaultProps = {
	highlight: false,
	standard: false,
	style: {},
	pass: false
};

export default Link;
