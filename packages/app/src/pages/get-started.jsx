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

const formSteps = [
	{
		id: "general",
		component: GeneralStep,
		initialValues: generalInitialValues,
		validationSchema: generalValidationSchema
	},
	{
		id: "operator",
		component: OperatorStep,
		initialValues: operatorInitialValues,
		validationSchema: operatorValidationSchema
	}
];

const GetStarted = () => {
	const [isSubmitting, setSubmitting] = useState(false);

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
				// steps={formSteps}
				steps={[formSteps[1]]}
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
