import React from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";

const MediumIcon = ({ size }) => {
	const [css] = useStyletron();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Medium"
			role="img"
			viewBox="0 0 512 512"
			className={css({
				width: `${size}px`,
				height: `${size}px`,
				objectFit: "contain",
				transform: "scale(1.5)"
			})}
		>
			<path
				className={css({
					fill: "currentColor"
				})}
				fill="currentColor"
				d="M125 173c0-4-2-9-5-11l-31-38v-6h98l75 166 67-166h93v6l-27 26c-2 1-3 4-3 7v190c0 3 1 6 3 8l27 25v6H289v-6l27-26c3-3 3-4 3-8V193l-76 192h-10l-88-192v129c-1 5 1 11 5 15l35 43v5H85v-5l35-43c4-4 6-10 5-15z"
			/>
		</svg>
	);
};

MediumIcon.propTypes = {
	size: PropTypes.number
};

MediumIcon.defaultProps = {
	size: 24
};

export default MediumIcon;
