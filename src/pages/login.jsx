/**
 * Login page
 * If authenticated, redirect to return_url, otherwise to home page.
 */

import { useEffect, useState, useCallback } from "react";
import { useStyletron } from "baseui";
import { H1 as Heading } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import FormikWizard from "formik-wizard";
import * as yup from "yup";

import AuthForm from "@/components/AuthForm";
import BackHeader from "@/components/BackHeader";
import PhoneField from "@/components/Fields/Phone";
import VerifyField from "@/components/Fields/Verify";
import * as validations from "@/utils/validate";
import returnUserRedirect from "@/utils/return-user-redirect";

const formSteps = [
	{
		id: "info",
		component: () => (
			<Grid gridGutters={16}>
				<Cell span={12}>
					<PhoneField
						name="phoneNumber"
						label="phoneNumber"
						caption="You will receive an SMS message to confirm your phone number."
						placeholder="400 200 300"
						ipLookup
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
			code: yup.string().length(6).required()
		})
	}
];

const Login = ({ isAuth }) => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [css, theme] = useStyletron();

	useEffect(() => {
		if (isAuth) {
			// Return user if authenticated
			returnUserRedirect();
		}
	}, [isAuth]);

	const handleSubmit = useCallback((values) => {
		setSubmitting(true);
		console.log(values);
	});

	return (
		<main>
			<BackHeader />
			<div
				className={css({
					width: "100%",
					maxWidth: `${theme.breakpoints.large}px`,
					margin: "0 auto"
				})}
			>
				<Grid>
					<Cell span={12}>
						<Heading marginTop="0px">Log In</Heading>
					</Cell>
				</Grid>
				<FormikWizard
					steps={formSteps}
					onSubmit={handleSubmit}
					render={(props) => (
						<AuthForm {...props} isSubmitting={isSubmitting} />
					)}
				/>
			</div>
		</main>
	);
};

export const getServerSideProps = ({ req }) => {
	return {
		props: {
			isAuth: !isEmpty(req.user)
		}
	};
};

Login.propTypes = {
	isAuth: PropTypes.bool.isRequired
};

export default Login;
