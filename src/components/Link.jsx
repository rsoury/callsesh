import React from "react";
import NextLink from "next/link";
import { StyledLink } from "baseui/link";
import { ChildrenProps } from "@/utils/common-prop-types";

const Link = ({ children, ...props }) => (
	<StyledLink $as={NextLink} {...props}>
		{children}
	</StyledLink>
);

Link.propTypes = {
	children: ChildrenProps.isRequired
};

export default Link;
