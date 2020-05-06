import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import ArrowLeft from "baseui/icon/arrow-left";
import ArrowRight from "baseui/icon/arrow-right";
import Check from "baseui/icon/check";
import { ProgressBar } from "baseui/progress-bar";
import startCase from "lodash/startCase";
import { FixedBottom } from "react-fixed-bottom";

import { isProd } from "@/env-config";

const Form = ({
	children,
	isLastStep,
	goToPreviousStep,
	canGoBack,
	actionLabel,
	isSubmitting,
	currentStep,
	steps
}) => {
	const [css, theme] = useStyletron();

	const stepIndex = steps.indexOf(currentStep);
	const progressValue =
		((stepIndex + (isSubmitting ? 1 : 0)) / steps.length) * 100;

	// Load a onbeforeleave listener to confirm that users want to leave the form.
	useEffect(() => {
		if (isProd) {
			if (typeof window !== "undefined") {
				const message = "Are you sure you would like to leave?";
				window.onbeforeunload = () => message;
				window.addEventListener("beforeunload", () => message, false);
			}
		}
	}, []);

	return (
		<div
			className={css({
				width: "100%",
				maxWidth: "800px",
				padding: "0 20px 50px",
				margin: "0 auto",
				minHeight: "100%",
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				justifyContent: "center"
			})}
		>
			<ProgressBar
				value={progressValue}
				showLabel
				getProgressLabel={() =>
					`Step ${stepIndex + 1}: ${startCase(steps[stepIndex])}`
				}
				overrides={{
					Label: {
						style: {
							textAlign: "left",
							margin: "0 12px"
						}
					}
				}}
			/>
			<div
				className={css({
					flex: 1,
					height: "100%",
					textAlign: "left",
					paddingBottom: "50px"
				})}
			>
				{children}
			</div>
			<FixedBottom>
				<div
					className={css({
						height: "80px",
						width: "100%",
						position: "fixed",
						bottom: "0px",
						left: "0px",
						right: "0px",
						zIndex: "999"
					})}
				>
					<div
						className={css({
							height: "100%",
							width: "100%",
							padding: "0 10px",
							maxWidth: "800px",
							margin: "0 auto",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderTop: `1px solid ${theme.colors.borderOpaque}`,
							backgroundColor: "#ffffff"
						})}
					>
						{canGoBack ? (
							<Button
								onClick={goToPreviousStep}
								kind={BUTTON_KIND.minimal}
								disabled={isSubmitting}
								startEnhancer={() => <ArrowLeft size={24} />}
								overrides={{
									BaseButton: {
										style: {
											height: "52px"
										}
									}
								}}
							>
								Previous
							</Button>
						) : (
							<div />
						)}
						<Button
							type="submit"
							endEnhancer={
								isLastStep
									? () => <Check size={24} />
									: () => <ArrowRight size={24} />
							}
							isLoading={isSubmitting}
							disabled={isSubmitting}
							overrides={{
								BaseButton: {
									style: {
										height: "52px"
									}
								}
							}}
						>
							{actionLabel || (isLastStep ? "Create your account" : "Next")}
						</Button>
					</div>
				</div>
			</FixedBottom>
		</div>
	);
};

Form.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	isLastStep: PropTypes.bool.isRequired,
	goToPreviousStep: PropTypes.func.isRequired,
	canGoBack: PropTypes.bool.isRequired,
	actionLabel: PropTypes.string,
	isSubmitting: PropTypes.bool.isRequired,
	currentStep: PropTypes.string.isRequired,
	steps: PropTypes.arrayOf(PropTypes.string).isRequired
};

Form.defaultProps = {
	actionLabel: ""
};

export default Form;
