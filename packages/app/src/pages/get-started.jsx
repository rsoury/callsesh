/* Page used to register new users */

import { useState, useCallback } from "react";
import { FormikWizard } from "rsoury-formik-wizard";
import isEmpty from "is-empty";

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
import request from "@/utils/request";
import handleException, { alerts } from "@/utils/handle-exception";

const formSteps = [
	{
		id: "general",
		component: GeneralStep,
		initialValues: generalInitialValues,
		validationSchema: generalValidationSchema
	},
	{
		id: "caller",
		component: CallerStep,
		initialValues: callerInitialValues,
		validationSchema: callerValidationSchema
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
		const params = {
			...values.general,
			gender: values.general.gender.label,
			dob: Array.isArray(values.general.dob)
				? values.general.dob[0]
				: values.general.dob,
			...values.caller,
			...values.operator,
			purpose: isEmpty(values.operator.purpose.value)
				? values.operator.purpose.option.label
				: values.operator.purpose.value
		};
		request
			.post(routes.api.user, params)
			.then(({ data }) => data)
			.then(() => {
				// There should be some redirect here to the original url.
			})
			.catch((error) => {
				handleException(error);
				alerts.error();
			})
			.finally(() => {
				setSubmitting(false);
			});
	}, []);

	return (
		<main>
			<FormikWizard
				steps={formSteps}
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
