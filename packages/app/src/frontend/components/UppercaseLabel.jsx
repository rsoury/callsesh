import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Label2 as Label } from "baseui/typography";

const UppercaseLabel = ({ children, style }) => {
	const [css] = useStyletron();

	return (
		<Label
			className={css({
				textTransform: "uppercase",
				fontWeight: 700,
				marginBottom: "20px",
				letterSpacing: "1px",
				fontSize: "14px !important",
				...style
			})}
		>
			{children}
		</Label>
	);
};

UppercaseLabel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	style: PropTypes.object
};

UppercaseLabel.defaultProps = {
	style: {}
};

export default UppercaseLabel;
