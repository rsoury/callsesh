import React from "react";
import { FormControl } from "baseui/form-control";
import { useStyletron } from "baseui";

import { ChildrenProps } from "@/utils/common-prop-types";

const Content = ({ children }) => children;

const itemStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
};

const LabelControl = ({
	children,
	startEnhancer: StartEnhancer,
	endEnhancer: EndEnhancer,
	...props
}) => {
	const [css, theme] = useStyletron();

	return (
		<FormControl {...props}>
			<Content>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						minHeight: "50px",
						backgroundColor: theme.colors.backgroundSecondary
					})}
				>
					{StartEnhancer && (
						<div
							className={css({
								...itemStyle,
								padding: "10px",
								margin: "-10px",
								marginRight: "0px"
							})}
						>
							<StartEnhancer />
						</div>
					)}
					<div className={css({ flex: "1", padding: "10px 14px" })}>
						{children}
					</div>
					{EndEnhancer && (
						<div
							className={css({
								...itemStyle,
								padding: "10px",
								margin: "-10px",
								marginLeft: "0px"
							})}
						>
							<EndEnhancer />
						</div>
					)}
				</div>
			</Content>
		</FormControl>
	);
};

LabelControl.propTypes = {
	children: ChildrenProps.isRequired,
	startEnhancer: ChildrenProps,
	endEnhancer: ChildrenProps
};

LabelControl.defaultProps = {
	startEnhancer: null,
	endEnhancer: null
};

export default LabelControl;
