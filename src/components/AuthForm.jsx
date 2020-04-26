import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import ChevronLeft from "baseui/icon/chevron-left";
import { ChildrenProps } from "@/utils/common-prop-types";
import { isProd } from "@/env-config";

const Form = ({
	children,
	goToPreviousStep,
	canGoBack,
	actionLabel,
	isSubmitting
}) => {
	const [css] = useStyletron();

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
				maxWidth: "640px",
				padding: "0 20px",
				margin: "0 auto",
				minHeight: "100%",
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				justifyContent: "center"
			})}
		>
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
			<div>
				<div className={css({ padding: "5px" })}>
					<Button
						type="submit"
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
						{actionLabel || "Continue"}
					</Button>
				</div>
				{canGoBack && (
					<div className={css({ padding: "5px" })}>
						<Button
							onClick={goToPreviousStep}
							kind={BUTTON_KIND.minimal}
							disabled={isSubmitting}
							startEnhancer={() => <ChevronLeft size={24} />}
							overrides={{
								BaseButton: {
									style: {
										height: "52px"
									}
								}
							}}
						>
							Cancel
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

// Prop types form an object provided by Formik Wizard
Form.propTypes = {
	children: ChildrenProps.isRequired,
	// isLastStep: PropTypes.bool.isRequired,
	goToPreviousStep: PropTypes.func.isRequired,
	canGoBack: PropTypes.bool.isRequired,
	actionLabel: PropTypes.string,
	isSubmitting: PropTypes.bool.isRequired
	// currentStep: PropTypes.string.isRequired,
	// steps: PropTypes.arrayOf(PropTypes.string).isRequired
};

Form.defaultProps = {
	actionLabel: ""
};

export default Form;
