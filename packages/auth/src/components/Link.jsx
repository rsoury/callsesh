import React from "react";
import { useStyletron } from "baseui";
import { StyledLink } from "baseui/link";
import { Link as RouterLink } from "react-router-dom";

const Link = (props) => {
	const [css, theme] = useStyletron();

	return (
		<StyledLink
			$as={RouterLink}
			{...props}
			className={css({
				cursor: "pointer",
				color: theme.colors.accent,
				":hover": {
					color: theme.colors.accent600,
					textDecoration: "underline"
				}
			})}
		/>
	);
};

export default Link;
