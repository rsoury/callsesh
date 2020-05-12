import React from "react";
import PropTypes from "prop-types";
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
	noBg,
	style,
	...props
}) => {
	const [css, theme] = useStyletron();

	const wrapperStyle = {};
	if (StartEnhancer !== null) {
		wrapperStyle.paddingLeft = "14px";
	}
	if (EndEnhancer !== null) {
		wrapperStyle.paddingRight = "14px";
	}

	return (
		<FormControl {...props}>
			<Content>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						minHeight: "50px",
						backgroundColor: noBg
							? "transparent"
							: theme.colors.backgroundSecondary,
						...wrapperStyle
					})}
				>
					{StartEnhancer && (
						<div
							className={css({
								...itemStyle,
								padding: "10px",
								marginTop: "-10px",
								marginLeft: "-10px",
								marginBottom: "-10px",
								marginRight: "0px"
							})}
						>
							<StartEnhancer />
						</div>
					)}
					<div
						className={css({
							flex: "1",
							padding: "10px 14px",
							...style
						})}
					>
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
	endEnhancer: ChildrenProps,
	noBg: PropTypes.bool,
	style: PropTypes.object
};

LabelControl.defaultProps = {
	startEnhancer: null,
	endEnhancer: null,
	noBg: false,
	style: {}
};

export default LabelControl;
