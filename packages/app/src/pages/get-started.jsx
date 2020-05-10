/* Page used to register new users */

import { useState, useCallback } from "react";
import { FormikWizard } from "rsoury-formik-wizard";

import * as routes from "@/routes";
import { getUser } from "@/middleware/auth";
import FormLayout from "@/components/GetStarted/FormLayout";
import GeneralStep, {
	initialValues as generalInitialValues,
	validationSchema as generalValidationSchema
} from "@/components/GetStarted/GeneralStep";
import OperatorStep, {
	initialValues as operatorInitialValues,
	validationSchema as operatorValidationSchema
} from "@/components/GetStarted/OperatorStep";
import CallerStep, {
	initialValues as callerInitialValues,
	validationSchema as callerValidationSchema
} from "@/components/GetStarted/CallerStep";

const GetStarted = () => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [formValues, setFormValues] = useState({});

	const steps = [
		{
			id: "general",
			component: (props) => <GeneralStep {...props} formValues={formValues} />,
			initialValues: generalInitialValues,
			validationSchema: generalValidationSchema,
			onAction(sectionValues, values) {
				setFormValues(values);
			}
		},
		{
			id: "caller",
			component: (props) => <CallerStep {...props} formValues={formValues} />,
			initialValues: callerInitialValues,
			validationSchema: callerValidationSchema,
			onAction(sectionValues, values) {
				setFormValues(values);
			}
		},
		{
			id: "operator",
			component: (props) => <OperatorStep {...props} formValues={formValues} />,
			initialValues: operatorInitialValues,
			validationSchema: operatorValidationSchema,
			onAction(sectionValues, values) {
				setFormValues(values);
			}
		}
	];

	const handleSubmit = useCallback((values) => {
		setSubmitting(true);
		setTimeout(() => {
			console.log(values);
			setSubmitting(false);
		}, 1000);
	}, []);

	return (
		<main>
			<FormikWizard
				// steps={steps}
				steps={[steps[1]]}
				onSubmit={handleSubmit}
				render={(props) => (
					<FormLayout {...props} isSubmitting={isSubmitting} />
				)}
			/>
		</main>
	);
};

export async function getServerSideProps({ req, res }) {
	// Check if user already registered.
	const user = await getUser(req);

	// If user is registered, redirect to settings/profile
	if (user.isRegistered) {
		res.writeHead(302, {
			Location: routes.page.settings.profile
		});
		res.end();
	}

	return { props: {} };
}

export default GetStarted;
