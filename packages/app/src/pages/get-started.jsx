/* Page used to register new users */

import { useState, useCallback } from "react";
import { FormikWizard } from "rsoury-formik-wizard";
import isEmpty from "is-empty";
import { toaster } from "baseui/toast";
import Router from "next/router";
import Url from "url-parse";
import ono from "@jsdevtools/ono";

import * as routes from "@/routes";
import { getUser } from "@/middleware/auth";
import FormLayout from "@/components/Onboarding/FormLayout";
import GeneralStep, {
	initialValues as generalInitialValues,
	validationSchema as generalValidationSchema
} from "@/components/Onboarding/GeneralStep";
import OperatorStep, {
	initialValues as operatorInitialValues,
	validationSchema as operatorValidationSchema
} from "@/components/Onboarding/OperatorStep";
import CallerStep, {
	initialValues as callerInitialValues,
	validationSchema as callerValidationSchema
} from "@/components/Onboarding/CallerStep";
import request from "@/utils/request";
import handleException, { alerts } from "@/utils/handle-exception";
import { setUser } from "@/hooks/use-user";
import { UserProps } from "@/utils/common-prop-types";

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

const GetStarted = ({ user }) => {
	setUser(user);
	const [isSubmitting, setSubmitting] = useState(false);

	const handleSubmit = useCallback((values) => {
		setSubmitting(true);
		const params = {
			...values.general,
			gender: values.general.gender.label,
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
				toaster.positive(
					`Nice! Your account has been created. Please wait as we redirect you...`
				);

				// Check for return_url
				const url = new Url(window.location.href, true);
				const { return_url: returnUrl } = url.query;
				if (!isEmpty(returnUrl)) {
					return Router.push(returnUrl.replace(window.location.origin, ""));
				}
				// Otherwise, redirect to index.
				return Router.push(routes.page.index);
			})
			.catch((error) => {
				handleException(ono(error, params));
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

	if (isEmpty(user)) {
		res.writeHead(302, {
			Location: routes.page.index
		});
		res.end();
		return { props: {} };
	}

	// If user is registered, redirect to settings/profile
	if (user.isRegistered) {
		res.writeHead(302, {
			Location: routes.page.settings.profile
		});
		res.end();
	}

	return {
		props: {
			user
		}
	};
}

GetStarted.propTypes = {
	user: UserProps
};

GetStarted.defaultProps = {
	user: {}
};

export default GetStarted;
