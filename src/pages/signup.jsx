import { useEffect, useState, useCallback } from "react";
import { useStyletron } from "baseui";
import { H1 as Heading } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import FormikWizard from "formik-wizard";
import * as yup from "yup";
// import { motion, AnimatePresence } from 'framer-motion'
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
					<TextField name="First Name" placeholder="Ryan" />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<TextField name="Last Name" placeholder="Soury" />
				</Cell>
				<Cell span={12}>
					<PhoneField
						name="Phone Number"
						caption="You will receive an SMS message to confirm your phone number."
						placeholder="400 200 300"
						ipLookup
					/>
				</Cell>
			</Grid>
		),
		initialValue: {
			firstName: "",
			lastName: "",
			phoneNumber: ""
		},
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
		initialValue: {
			code: ""
		},
		validationSchema: yup.object().shape({
			code: yup.string().length(6).required()
		})
	}
];

const Index = ({ isAuth }) => {
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

Index.propTypes = {
	isAuth: PropTypes.bool.isRequired
};

export default Index;
