import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

const logoUrl = "/static/logo/callsesh-text-logo.png";

const Logo = ({ width, style }) => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				...style
			})}
		>
			<img
				src={logoUrl}
				alt="callsesh logo"
				title="callsesh"
				className={css({
					width,
					maxWidth: width,
					[theme.mediaQuery.maxMedium]: {
						width: "100%"
					}
				})}
			/>
		</div>
	);
};

Logo.propTypes = {
	width: PropTypes.string,
	style: PropTypes.object
};

Logo.defaultProps = {
	width: "120px",
	style: {}
};

export default Logo;
