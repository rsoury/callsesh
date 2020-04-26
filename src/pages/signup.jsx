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
// import VerifyField from "@/components/Fields/Phone";
import * as validations from "@/utils/validate";
import returnUserRedirect from "@/utils/return-user-redirect";

const formSteps = [
	{
		id: "info",
		component: () => (
			<Grid>
				<Cell span={[12, 4, 6]}>
					<TextField name="firstName" label="First Name" />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<TextField name="lastName" label="Last Name" />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<PhoneField
						name="phoneNumber"
						label="Phone Number"
						caption="You will receive an SMS message to confirm your phone number."
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
			<>
				<div>Hello World</div>
			</>
		),
		initialValue: {
			code: []
		},
		validationSchema: yup.object().shape({
			code: yup.array().length(6).of(yup.number())
		})
	}
];

const Index = ({ isAuth }) => {
	const [isSubmitting, setSubmitting] = useState(false);
	const [css, theme] = useStyletron();

	useEffect(() => {
		if (isAuth) {
			// do nothing is user is authenticated
			return;
		}
		// Return user
		returnUserRedirect();
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
