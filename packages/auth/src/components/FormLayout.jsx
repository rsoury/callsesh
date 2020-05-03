import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";
import ChevronLeft from "baseui/icon/chevron-left";

import { ChildrenProps } from "@/utils/common-prop-types";

const FormLayout = ({
	children,
	goToPreviousStep,
	canGoBack,
	actionLabel,
	isSubmitting
}) => {
	const [css] = useStyletron();
	const buttonProps = {
		disabled: isSubmitting,
		overrides: {
			BaseButton: {
				style: {
					height: "52px",
					width: "100%"
				}
			}
		}
	};

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
					paddingBottom: "20px"
				})}
			>
				{children}
			</div>
			<Grid
				overrides={{
					Grid: {
						style: {
							width: "100%"
						}
					}
				}}
			>
				<Cell span={12}>
					<div className={css({ textAlign: "center" })}>
						<div className={css({ padding: "5px" })}>
							<Button {...buttonProps} type="submit" isLoading={isSubmitting}>
								{actionLabel || "Continue"}
							</Button>
						</div>
						{canGoBack && (
							<div className={css({ padding: "5px" })}>
								<Button
									{...buttonProps}
									type="button"
									onClick={goToPreviousStep}
									kind={BUTTON_KIND.minimal}
									startEnhancer={() => <ChevronLeft size={24} />}
								>
									Cancel
								</Button>
							</div>
						)}
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

// Prop types form an object provided by Formik Wizard
FormLayout.propTypes = {
	children: ChildrenProps.isRequired,
	goToPreviousStep: PropTypes.func.isRequired,
	canGoBack: PropTypes.bool.isRequired,
	actionLabel: PropTypes.string,
	isSubmitting: PropTypes.bool
};

FormLayout.defaultProps = {
	isSubmitting: false,
	actionLabel: ""
};

export default FormLayout;
