/**
 * Login page
 * If authenticated, redirect to return_url, otherwise to home page.
 */

import { useState, useCallback } from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, Paragraph3 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import FormikWizard from "formik-wizard";
import * as yup from "yup";
import Helmet from "react-helmet";

import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
import PhoneField from "@/components/Fields/Phone";
import VerifyField from "@/components/Fields/Verify";
import Link from "@/components/Link";
import * as validations from "@/utils/validate";

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

const Login = () => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [css, theme] = useStyletron();

	const handleSubmit = useCallback((values) => {
		setSubmitting(true);
		console.log(values);
	});

	return (
		<main>
			<Helmet>
				<title>Log in to Wagecall</title>
			</Helmet>
			<Header />
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
				<Grid>
					<Cell span={12}>
						<Paragraph className={css({ textAlign: "center" })}>
							Don&apos;t have an acount? <Link to="/signup">Sign up</Link>
						</Paragraph>
					</Cell>
				</Grid>
			</div>
		</main>
	);
};

export default Login;
