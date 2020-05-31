import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { StyledLink } from "baseui/link";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ standard, style, ...props }) => {
	const [css, theme] = useStyletron();

	if (standard) {
		props.href = props.to;
	} else {
		props.$as = RouterLink;
	}

	return (
		<StyledLink
			{...props}
			className={css({
				cursor: "pointer",
				color: theme.colors.accent,
				":hover": {
					color: theme.colors.accent600,
					textDecoration: "underline"
				},
				":visited": {
					color: theme.colors.accent
				},
				...style
			})}
		/>
	);
};

Link.propTypes = {
	to: PropTypes.string.isRequired,
	standard: PropTypes.bool,
	style: PropTypes.object
};

Link.defaultProps = {
	standard: false,
	style: {}
};

export default Link;
