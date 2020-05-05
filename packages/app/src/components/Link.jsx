import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import NextLink from "next/link";
import { StyledLink } from "baseui/link";
import { ChildrenProps } from "@/utils/common-prop-types";

const Link = ({ children, href, ...props }) => {
	const [css, theme] = useStyletron();

	return (
		<NextLink href={href}>
			<StyledLink
				{...props}
				className={css({
					cursor: "pointer",
					color: theme.colors.accent,
					":hover": {
						color: theme.colors.accent600,
						textDecoration: "underline"
					}
				})}
			>
				{children}
			</StyledLink>
		</NextLink>
	);
};

Link.propTypes = {
	children: ChildrenProps.isRequired,
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default Link;
