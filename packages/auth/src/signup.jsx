import { useState, useCallback } from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, Paragraph3 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import FormikWizard from "formik-wizard";
import * as yup from "yup";
import Helmet from "react-helmet";

import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
import TextField from "@/components/Fields/Text";
import PhoneField from "@/components/Fields/Phone";
import VerifyField from "@/components/Fields/Verify";
import Link from "@/components/Link";
import * as validations from "@/utils/validate";
import * as auth from "@/utils/auth";

const formSteps = [
	{
		id: "info",
		component: () => (
			<Grid gridGutters={16}>
				<Cell span={[12, 4, 6]}>
					<TextField name="firstName" label="First Name" placeholder="Ryan" />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<TextField name="lastName" label="Last Name" placeholder="Soury" />
				</Cell>
				<Cell span={12}>
					<PhoneField
						name="phoneNumber"
						label="Phone Number"
						caption="You will receive an SMS message to confirm your phone number."
						placeholder="400 200 300"
						ipLookup
					/>
				</Cell>
			</Grid>
		),
		initialValues: {
			firstName: "Ryan",
			lastName: "Smithson",
			phoneNumber: "+61405227363"
		},
		// initialValues: {
		// 	firstName: "",
		// 	lastName: "",
		// 	phoneNumber: ""
		// },
		validationSchema: yup.object().shape({
			firstName: yup.string().required(),
			lastName: yup.string().required(),
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

const Signup = () => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [css, theme] = useStyletron();

	const handleSubmit = useCallback(async (values) => {
		// Post data to passwordless verification check endpoint
		// Successful request may require a refresh, or will automatically refresh due to isAuth prop
		setSubmitting(true);
		try {
			const result = await auth.verify(
				values.info.phoneNumber,
				values.verify.code
			);
			console.log(result);
		} catch (e) {
			console.error(e);
			throw e;
		} finally {
			setSubmitting(false);
		}
	}, []);

	// Attach onAction handlers to steps.
	const steps = formSteps.map((step) => {
		switch (step.id) {
			case "info":
				step.onAction = async ({ phoneNumber }) => {
					// Setup user verification for phoneNumber
					setSubmitting(true);
					try {
						const result = await auth.start(phoneNumber);
						console.log(result);
					} catch (e) {
						console.error(e);
						throw e;
					} finally {
						setSubmitting(false);
					}
				};
				break;
			default:
				break;
		}
		return step;
	});

	return (
		<main>
			<Helmet>
				<title>Sign up to Wagecall</title>
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
						<Heading marginTop="0px">Sign Up</Heading>
					</Cell>
				</Grid>
				<FormikWizard
					steps={steps}
					onSubmit={handleSubmit}
					render={(props) => (
						<AuthForm {...props} isSubmitting={isSubmitting} />
					)}
				/>
				<Grid>
					<Cell span={12}>
						<Paragraph className={css({ textAlign: "center" })}>
							Already have an account? <Link to="/">Log in</Link>
						</Paragraph>
					</Cell>
				</Grid>
			</div>
		</main>
	);
};

export default Signup;
