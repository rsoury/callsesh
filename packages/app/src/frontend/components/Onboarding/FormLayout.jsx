import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import ArrowLeft from "baseui/icon/arrow-left";
import ArrowRight from "baseui/icon/arrow-right";
import Check from "baseui/icon/check";
import { ProgressBar } from "baseui/progress-bar";
import startCase from "lodash/startCase";

import { ChildrenProps } from "@/frontend/utils/common-prop-types";

export const FormContainer = ({ children, style }) => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				width: "100%",
				maxWidth: "800px",
				paddingTop: "0px",
				paddingRight: "20px",
				paddingBottom: "50px",
				paddingLeft: "20px",
				margin: "0 auto",
				minHeight: "100%",
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				justifyContent: "center",
				[theme.mediaQuery.maxSmall]: {
					paddingLeft: "0px",
					paddingRight: "0px"
				},
				...style
			})}
		>
			{children}
		</div>
	);
};

FormContainer.propTypes = {
	children: ChildrenProps.isRequired,
	style: PropTypes.object
};

FormContainer.defaultProps = {
	style: {}
};

const FormLayout = ({
	children,
	isLastStep,
	goToPreviousStep,
	canGoBack,
	actionLabel,
	isSubmitting,
	currentStep,
	steps,
	values
}) => {
	const [css, theme] = useStyletron();

	const stepIndex = steps.indexOf(currentStep);
	const progressValue =
		((stepIndex + (isSubmitting ? 1 : 0)) / steps.length) * 100;

	// Load a onbeforeleave listener to confirm that users want to leave the form.
	useEffect(() => {
		if (typeof window !== "undefined") {
			const returnMessage = () => "Are you sure you would like to leave?";
			if (isSubmitting) {
				window.onbeforeunload = null;
				window.removeEventListener("beforeunload", returnMessage, false);
			} else {
				window.onbeforeunload = returnMessage;
				window.addEventListener("beforeunload", returnMessage, false);
			}
		}
	}, []);

	return (
		<FormContainer>
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
					paddingBottom: "150px"
				})}
			>
				{React.cloneElement(children, {
					formValues: values
				})}
			</div>
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
						borderTopWidth: "1px",
						borderTopStyle: "solid",
						borderTopColor: theme.colors.borderOpaque,
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
		</FormContainer>
	);
};

FormLayout.propTypes = {
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
	steps: PropTypes.arrayOf(PropTypes.string).isRequired,
	values: PropTypes.object.isRequired
};

FormLayout.defaultProps = {
	actionLabel: ""
};

export default FormLayout;
