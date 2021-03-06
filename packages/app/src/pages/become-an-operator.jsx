/**
 * Standalone user onboarding for existing users.
 */

import { useCallback } from "react";
import { Formik, Form } from "formik";
import isEmpty from "is-empty";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";
import { toaster } from "baseui/toast";
import ono from "@jsdevtools/ono";

import * as routes from "@/routes";
import OperatorOnboarding, {
	initialValues,
	validationSchema
} from "@/frontend/components/Onboarding/OperatorStep";
import { FormContainer } from "@/frontend/components/Onboarding/FormLayout";
import isUserOperator from "@/utils/is-operator";
import request from "@/utils/request";
import handleException, { alerts } from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";

// Activate operator field by default
initialValues.operator = true;

const BecomeAnOperator = () => {
	const [css] = useStyletron();

	const handleSubmit = useCallback((values, actions) => {
		// We're just going to post to the user endpoint to overwrite user
		const params = {
			...values,
			operator: true,
			purpose: isEmpty(values.purpose.value)
				? values.purpose.option.label
				: values.purpose.value
		};

		request
			.patch(routes.api.user, params)
			.then(() => {
				// Redirect user back to home page
				toaster.positive(
					`Congratulations! You're now an Operator. Go live to make money and receive calls from your audience. Please wait while we redirect you...`
				);

				setTimeout(() => {
					window.location.href = routes.page.index;
				}, 1000);
			})
			.catch((e) => {
				handleException(ono(e, params));
				alerts.error();
			})
			.finally(() => {
				actions.setSubmitting(false);
			});
	}, []);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{(props) => {
				// eslint-disable-next-line
				const { isSubmitting } = props;

				return (
					<Form>
						<FormContainer>
							<OperatorOnboarding noToggle {...props} />
							<div>
								<Grid gridGutters={16}>
									<Cell span={12}>
										<div className={css({ textAlign: "center" })}>
											<Button
												type="submit"
												isLoading={isSubmitting}
												disabled={isSubmitting}
												overrides={{
													BaseButton: {
														style: {
															height: "52px",
															width: "100%",
															maxWidth: "300px"
														}
													}
												}}
											>
												Become an Operator
											</Button>
										</div>
									</Cell>
								</Grid>
							</div>
						</FormContainer>
					</Form>
				);
			}}
		</Formik>
	);
};

export function getServerSideProps({ req, res }) {
	return ssrUser({ req, res }, (user) => {
		if (isEmpty(user) || isUserOperator(user)) {
			res.writeHead(302, {
				Location: routes.page.index
			});
			res.end();
		}

		return {
			props: {
				user
			}
		};
	});
}

export default BecomeAnOperator;
