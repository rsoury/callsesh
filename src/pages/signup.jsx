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
import TextField from "@/components/Fields/Text";
import PhoneField from "@/components/Fields/Phone";
import VerifyField from "@/components/Fields/Verify";
import * as validations from "@/utils/validate";
import returnUserRedirect from "@/utils/return-user-redirect";

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
						name="verificationCode"
						label="Verification Code"
						caption="Please enter the 6-digit verification code found in the SMS sent to your phone number."
					/>
				</Cell>
			</Grid>
		),
		initialValues: {
			verificationCode: ""
		},
		validationSchema: yup.object().shape({
			verificationCode: yup.string().length(6).ensure().required()
		})
	}
];

const Signup = ({ isAuth }) => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [css, theme] = useStyletron();

	useEffect(() => {
		if (isAuth) {
			// Return user if authenticated
			returnUserRedirect();
		}
	}, [isAuth]);

	const handleSubmit = useCallback((values) => {
		console.log(values);
		setSubmitting(true);
	}, []);

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
						<Heading marginTop="0px">Sign Up</Heading>
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

Signup.propTypes = {
	isAuth: PropTypes.bool.isRequired
};

export default Signup;
