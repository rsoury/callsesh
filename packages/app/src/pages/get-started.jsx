/* Page used to register new users */

import { useState, useEffect, useCallback } from "react";
import {
	H1 as Heading,
	H5 as Subheader,
	Paragraph2 as Paragraph
} from "baseui/typography";
import { useStyletron } from "baseui";
import { Formik, Form } from "formik";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Button,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import * as yup from "yup";
import Confetti from "react-dom-confetti";
import { Edit2 as EditIcon } from "react-feather";
import { getUser } from "@/middleware/auth";

import { publicUrl } from "@/env-config";
import TextField from "@/components/Fields/Text";
import SelectField from "@/components/Fields/Select";
import DateField from "@/components/Fields/Date";
import Emoji from "@/components/Emoji";
import LabelControl from "@/components/LabelControl";

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
	username: yup.string().required(),
	gender: yup.string().oneOf(["male", "female", "other"]).required(),
	dob: yup.string(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	profilePicture: yup.string(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
});

// Generate unique username.
const generateUsername = (firstName, lastName) => {
	const username = [firstName, lastName]
		.join("_")
		.split(" ")
		.join("_")
		.toLowerCase()
		.substring(0, 25);

	return username;
};

const Register = () => {
	const [css] = useStyletron();
	const [confetti, setConfetti] = useState(false);
	const [selfManagedUsername, setSelfManagedUsername] = useState(false);

	const initialValues = {
		firstName: "",
		lastName: "",
		username: "",
		gender: genderOptions[2],
		dob: [new Date("1996/08/31")]
	};

	useEffect(() => {
		setTimeout(() => {
			setConfetti(true);
		}, 250);
	}, []);

	const handleSubmit = useCallback(
		(values, actions) => {
			setTimeout(() => {
				console.log(values);
				actions.setSubmitting(false);
			}, 1000);
		},
		[selfManagedUsername]
	);

	return (
		<main>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ values, isSubmitting, setFieldValue }) => (
					<Form>
						<div
							className={css({
								maxWidth: "800px",
								width: "100%",
								margin: "0 auto"
							})}
						>
							<Grid>
								<Cell span={12}>
									<Heading>
										<strong className={css({ fontWeight: 800 })}>
											Welcome to Callsesh&nbsp;&nbsp;
											<Emoji label="celebrate" symbol="🎉" />
										</strong>
									</Heading>
									<Subheader>
										Get started by providing more information about yourself
									</Subheader>
								</Cell>
							</Grid>
							<Confetti active={confetti} config={confettiConfig} />
							<Grid>
								<Cell span={[12, 4, 6]}>
									<TextField
										name="firstName"
										label="First Name"
										placeholder="Ryan"
										onChange={(e) => {
											if (!selfManagedUsername) {
												const username = generateUsername(
													e.target.value,
													values.lastName
												);
												setFieldValue("username", username);
											}
										}}
									/>
								</Cell>
								<Cell span={[12, 4, 6]}>
									<TextField
										name="lastName"
										label="Last Name"
										placeholder="Soury"
										onChange={(e) => {
											if (!selfManagedUsername) {
												const username = generateUsername(
													values.firstName,
													e.target.value
												);
												setFieldValue("username", username);
											}
										}}
									/>
								</Cell>
								<Cell span={12}>
									{selfManagedUsername ? (
										<TextField
											name="username"
											label="Username"
											caption={`Your link will look like ${publicUrl}/u/${
												values.username || "..."
											}`}
											placeholder="ryan_soury"
											maxLength={25}
										/>
									) : (
										<LabelControl
											label="Username"
											caption={`Your link will look like ${publicUrl}/u/${
												values.username || "..."
											}`}
											endEnhancer={() => (
												<Button
													onClick={() => setSelfManagedUsername(true)}
													shape={BUTTON_SHAPE.square}
													kind={BUTTON_KIND.minimal}
												>
													<EditIcon size={22} />
												</Button>
											)}
										>
											<Paragraph margin="0">{values.username}</Paragraph>
										</LabelControl>
									)}
								</Cell>
								<Cell span={[12, 4, 6]}>
									<SelectField
										name="gender"
										label="Gender"
										options={genderOptions}
									/>
								</Cell>
								<Cell span={[12, 4, 6]}>
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

export async function getServerSideProps({ req, res }) {
	// Check if user already registered.
	const user = await getUser(req);

	// If user is registered, redirect to settings/profile
	if (user.isRegistered) {
		res.writeHead(302, {
			Location: `/settings/profile`
		});
		res.end();
	}

	return { props: {} };
}

export default Register;
