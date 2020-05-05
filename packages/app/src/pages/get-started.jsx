/* Page used to register new users */

import { useState, useEffect, useCallback } from "react";
import { H1 as Heading, Paragraph2 as Paragraph } from "baseui/typography";
import { useStyletron } from "baseui";
import { Formik, Form } from "formik";
import { Grid, Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";
import * as yup from "yup";
import Confetti from "react-dom-confetti";

import TextField from "@/components/Fields/Text";
import SelectField from "@/components/Fields/Select";
import DateField from "@/components/Fields/Date";
import Emoji from "@/components/Emoji";

const confettiConfig = {
	angle: "109",
	spread: "177",
	startVelocity: "34",
	elementCount: "147",
	dragFriction: "0.09",
	duration: "3310",
	stagger: "0",
	width: "12px",
	height: "9px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const genderOptions = [
	{ label: "Male", id: "male" },
	{ label: "Female", id: "female" },
	{ label: "Other", id: "other" }
];

const validationSchema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	gender: yup.string().oneOf(["male", "female", "other"]).required(),
	dob: yup.string(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	profilePicture: yup.string(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
});

const Register = () => {
	const [css] = useStyletron();
	const [confetti, setConfetti] = useState(false);

	const initialValues = {
		firstName: "",
		lastName: "",
		gender: genderOptions[2],
		dob: [new Date("1996/08/31")]
	};

	useEffect(() => {
		setTimeout(() => {
			setConfetti(true);
		}, 250);
	}, []);

	const handleSubmit = useCallback((values, actions) => {
		setTimeout(() => {
			console.log(values);
			actions.setSubmitting(false);
		}, 1000);
	}, []);

	return (
		<main>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ isSubmitting }) => (
					<Form>
						<div
							className={css({
								maxWidth: "800px",
								width: "100%",
								margin: "0 auto"
							})}
						>
							<div className={css({ marginBottom: "20px" })}>
								<Grid>
									<Cell span={12}>
										<Heading>
											Welcome to Callsesh&nbsp;&nbsp;
											<Emoji label="celebrate" symbol="🎉" />
										</Heading>
										<Paragraph>
											Get started by providing more information about yourself
										</Paragraph>
									</Cell>
								</Grid>
							</div>
							<Confetti active={confetti} config={confettiConfig} />
							<Grid>
								<Cell span={(12, 4, 6)}>
									<TextField
										name="firstName"
										label="First Name"
										placeholder="Ryan"
									/>
								</Cell>
								<Cell span={(12, 4, 6)}>
									<TextField
										name="lastName"
										label="Last Name"
										placeholder="Soury"
									/>
								</Cell>
							</Grid>
							<Grid>
								<Cell span={(12, 4, 6)}>
									<SelectField
										name="gender"
										label="Gender"
										options={genderOptions}
									/>
								</Cell>
								<Cell span={(12, 4, 6)}>
									<DateField
										name="dob"
										label="Date of birth"
										caption="YYYY/MM/DD"
									/>
								</Cell>
							</Grid>
							<div className={css({ marginTop: "40px" })}>
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
												Create your account
											</Button>
										</div>
									</Cell>
								</Grid>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default Register;
