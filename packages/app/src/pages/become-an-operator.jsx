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
import Router from "next/router";
import ono from "@jsdevtools/ono";

import * as routes from "@/routes";
import OperatorOnboarding, {
	initialValues,
	requiredValidationSchema
} from "@/components/Onboarding/OperatorStep";
import { FormContainer } from "@/components/Onboarding/FormLayout";
import isUserOperator from "@/utils/is-operator";
import { UserProps } from "@/utils/common-prop-types";
import request from "@/utils/request";
import handleException, { alerts } from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";

// Activate operator field by default
initialValues.operator = true;

const BecomeAnOperator = ({ user }) => {
	const [css] = useStyletron();

	const handleSubmit = useCallback((values, actions) => {
		// We're just going to post to the user endpoint to overwrite user
		const params = {
			firstName: user.givenName,
			lastName: user.familyName,
			username: user.username,
			gender: user.gender,
			dob: user.dob,
			...values,
			purpose: isEmpty(values.purpose.value)
				? values.purpose.option.label
				: values.purpose.value
		};

		request
			.post(routes.api.user, params)
			.then(() => {
				// Redirect user back to home page
				toaster.positive(
					`Congratulations! You're now an Operator. Go live to make money and receive calls from your audience. Please wait while we redirect you...`
				);

				setTimeout(() => {
					Router.push(routes.page.index);
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
			validationSchema={requiredValidationSchema}
			onSubmit={handleSubmit}
		>
			{(props) => {
				// eslint-disable-next-line
				const { isSubmitting } = props;

				return (
					<Form>
						<FormContainer>
							<OperatorOnboarding {...props} />
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
			return { props: {} };
		}

		return {
			props: {
				user
			}
		};
	});
}

BecomeAnOperator.propTypes = {
	user: UserProps
};

BecomeAnOperator.defaultProps = {
	user: {}
};

export default BecomeAnOperator;
