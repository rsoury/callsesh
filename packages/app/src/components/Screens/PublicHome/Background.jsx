import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import { ChildrenProps } from "@/utils/common-prop-types";

const Background = ({ color, children, ...props }) => {
	const [css] = useStyletron();

	return (
		<div className={css({ position: "relative" })}>
			<div {...props}>
				<div
					className={css({
						position: "absolute",
						top: "0",
						bottom: "0",
						width: "200vw",
						left: "-50vw",
						right: "-50vw",
						backgroundColor: color
					})}
				/>
				<div className={css({ position: "relative", zIndex: "2" })}>
					{children}
				</div>
			</div>
		</div>
	);
};

Background.propTypes = {
	color: PropTypes.string.isRequired,
	children: ChildrenProps.isRequired
};

export default Background;
