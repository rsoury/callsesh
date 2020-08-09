import React from "react";
import { useStyletron, withStyle } from "baseui";
import { motion } from "framer-motion";
import isEmpty from "is-empty";
import { Paragraph2 as Paragraph } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";

import { ChildrenProps } from "@/frontend/utils/common-prop-types";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const FullscreenLoader = ({ children }) => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				position: "fixed",
				top: "0px",
				left: "0px",
				right: "0px",
				bottom: "0px",
				backgroundColor: "#fff",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				zIndex: "9995",
				textAlign: "center"
			})}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 20
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				className={css({
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column"
				})}
			>
				<Spinner $size={SPINNER_SIZE.large} />
				{!isEmpty(children) && (
					<Paragraph marginTop="25px" color={theme.colors.contentTertiary}>
						{children}
					</Paragraph>
				)}
			</motion.div>
		</div>
	);
};

FullscreenLoader.propTypes = {
	children: ChildrenProps
};

FullscreenLoader.defaultProps = {
	children: null
};

export default FullscreenLoader;
