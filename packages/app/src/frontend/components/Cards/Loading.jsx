/**
 * Loading Card to be used on home
 */

import React from "react";
import { useStyletron, withStyle } from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";

import Card from "@/frontend/components/Card";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "20px",
	height: "20px"
});

const LoadingCard = ({ ...props }) => {
	const [css] = useStyletron();

	return (
		<Card {...props}>
			<div
				className={css({
					display: "flex",
					height: "200px",
					alignItems: "center",
					justifyContent: "center"
				})}
			>
				<Spinner />
			</div>
		</Card>
	);
};

export default LoadingCard;
