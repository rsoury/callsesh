import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import NextLink from "next/link";
import { StyledLink } from "baseui/link";
import { ChildrenProps } from "@/utils/common-prop-types";

const Link = ({ children, href, highlight, ...props }) => {
	const [css, theme] = useStyletron();

	const style = {
		cursor: "pointer",
		":hover": {
			textDecoration: "underline"
		}
	};

	if (highlight) {
		style.color = theme.colors.accent;
		style[":hover"].color = theme.colors.accent600;
	}

	return (
		<NextLink href={href}>
			<StyledLink {...props} className={css(style)}>
				{children}
			</StyledLink>
		</NextLink>
	);
};

Link.propTypes = {
	children: ChildrenProps.isRequired,
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	highlight: PropTypes.bool
};

Link.defaultProps = {
	highlight: false
};

export default Link;
