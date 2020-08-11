import React from "react";
import { useStyletron } from "baseui";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

import * as routes from "@/routes";
import Link from "@/frontend/components/Link";
import { ChildrenProps } from "@/frontend/utils/common-prop-types";

const SignupActionButton = ({ children }) => {
	const [, theme] = useStyletron();

	return (
		<Link
			href={routes.page.signup}
			button
			style={{
				display: "inline-block",
				width: "100%",
				maxWidth: "300px"
			}}
			pass
		>
			<Button
				size={BUTTON_SIZE.large}
				endEnhancer={<ArrowRight size={24} />}
				overrides={{
					BaseButton: {
						style: {
							width: "100%",
							position: "relative",
							"::before": {
								content: '""',
								position: "absolute",
								left: "0px",
								right: "0px",
								top: "0px",
								bottom: "0px",
								backgroundColor: theme.colors.accent,
								transform: "translate(-5px, 5px)",
								zIndex: "-1",
								transition: "transform 0.25s"
							},
							":hover": {
								"::before": {
									transform: "translate(-10px, 10px)"
								}
							},
							":active": {
								"::before": {
									transform: "translate(0)"
								}
							}
						}
					}
				}}
			>
				{children}
			</Button>
		</Link>
	);
};

SignupActionButton.propTypes = {
	children: ChildrenProps
};

SignupActionButton.defaultProps = {
	children: "Get Started"
};

export default SignupActionButton;
