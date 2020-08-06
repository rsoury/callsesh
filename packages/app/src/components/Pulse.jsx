import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

const Pulse = ({ circleColor, pulseColor, ...props }) => {
	const [css, theme] = useStyletron();

	circleColor = circleColor || theme.colors.negative;
	pulseColor = pulseColor || theme.colors.negative200;

	const circleStyle = {
		fill: pulseColor,
		transform: "scale(0.5)",
		transformOrigin: "center center",
		animationDuration: "3s",
		animationIterationCount: "infinite",
		animationTimingFunction: "linear",
		animationName: {
			"0%": {
				transform: "scale(0.5)",
				opacity: "0"
			},
			"50%": {
				opacity: "0.1"
			},
			"70%": {
				opacity: "0.09"
			},
			"100%": {
				transform: "scale(5)",
				opacity: "0"
			}
		}
	};

	return (
		<svg
			className={css({
				overflow: "visible"
			})}
			width="50px"
			height="50px"
			viewBox="0 0 50 50"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<circle
				className={css(circleStyle)}
				fill={circleColor}
				cx="25"
				cy="25"
				r="25"
			/>
			<circle
				className={css({
					...circleStyle,
					animationDelay: "1s"
				})}
				fill={circleColor}
				cx="25"
				cy="25"
				r="25"
			/>
			<circle
				className={css({
					...circleStyle,
					animationDelay: "1s"
				})}
				fill={circleColor}
				cx="25"
				cy="25"
				r="25"
			/>
			<circle fill={circleColor} cx="25" cy="25" r="25" />
		</svg>
	);
};

Pulse.propTypes = {
	circleColor: PropTypes.string,
	pulseColor: PropTypes.string
};

Pulse.defaultProps = {
	circleColor: "",
	pulseColor: ""
};

export default Pulse;
