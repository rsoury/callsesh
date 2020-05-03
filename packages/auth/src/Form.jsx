import React, { useCallback, useState } from "react";
import { Grid, Cell } from "baseui/layout-grid";
import FormikWizard from "formik-wizard";
import * as yup from "yup";

import FormLayout from "@/components/FormLayout";
import PhoneField from "@/components/Fields/Phone";
import VerifyField from "@/components/Fields/Verify";
import * as validations from "@/utils/validate";
import * as auth from "@/utils/auth";
import handleException, { alerts } from "@/utils/handle-exception";

const formSteps = [
	{
		id: "info",
		component: () => (
			<Grid gridGutters={16}>
				<Cell span={12}>
					<PhoneField
						name="phoneNumber"
						label="Phone Number"
						caption="You will receive an SMS message to confirm your phone number."
						placeholder="400 200 300"
					/>
				</Cell>
			</Grid>
		),
		initialValues: {
			phoneNumber: ""
		},
		validationSchema: yup.object().shape({
			phoneNumber: validations.phoneNumber.required()
		})
	},
	{
		id: "verify",
		component: () => (
			<Grid gridGutters={16}>
				<Cell span={12}>
					<VerifyField
						name="code"
						label="Verification Code"
						caption="Please enter the 6-digit verification code found in the SMS sent to your phone number."
					/>
				</Cell>
			</Grid>
		),
		initialValues: {
			code: ""
		},
		validationSchema: yup.object().shape({
			code: yup.string().length(6).ensure().required()
		})
	}
];

const Form = () => {
	const [isSubmitting, setSubmitting] = useState(false);

	const handleAction = async (fn) => {
		setSubmitting(true);
		try {
			const result = await fn();
			return result;
		} catch (e) {
			handleException(e);
			alerts.error();
			throw e;
		} finally {
			setSubmitting(false);
		}
	};

	const handleSubmit = useCallback((values) => {
		// Post data to passwordless verification check endpoint
		// Successful request may require a refresh, or will automatically refresh due to isAuth prop
		return handleAction(() =>
			auth.verify(values.info.phoneNumber, values.verify.code)
		);
	}, []);

	// Attach onAction handlers to steps.
	const steps = formSteps.map((step) => {
		switch (step.id) {
			case "info":
				step.onAction = ({ phoneNumber }) => {
					// Setup user verification for phoneNumber
					return handleAction(() => auth.start(phoneNumber));
				};
				break;
			default:
				break;
		}
		return step;
	});

	return (
		<FormikWizard
			steps={steps}
			onSubmit={handleSubmit}
			render={(props) => <FormLayout {...props} isSubmitting={isSubmitting} />}
		/>
	);
};

export default Form;
