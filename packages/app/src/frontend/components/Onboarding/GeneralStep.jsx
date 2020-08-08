import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { H1 as Heading, H5 as Subheader } from "baseui/typography";
import {
	Button,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";
import Confetti from "react-dom-confetti";
import { Edit2 as EditIcon } from "react-feather";
import { useStyletron } from "baseui";
import * as yup from "yup";
import debounce from "lodash/debounce";
import isEmail from "is-email";

import { publicUrl } from "@/env-config";
import TextField from "@/frontend/components/Fields/Text";
import SelectField from "@/frontend/components/Fields/Select";
import DateField from "@/frontend/components/Fields/Date";
import FileUploaderField from "@/frontend/components/Fields/FileUploader";
import Emoji from "@/frontend/components/Emoji";
import * as routes from "@/routes";
import request from "@/utils/request";
import slugify from "@/utils/slugify";

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

export const genderOptions = [
	{ label: "Male", id: "male" },
	{ label: "Female", id: "female" },
	{ label: "Other", id: "other" }
];

// Generate unique username.
const generateUsername = (firstName, lastName) => {
	const username = [firstName, lastName]
		.join("_")
		.split(" ")
		.join("_")
		.toLowerCase()
		.substring(0, 25);

	return slugify(username);
};

const checkUsernameAvailable = debounce(async (value) => {
	try {
		const { available } = await request
			.get(routes.api.usernameAvailable, {
				params: {
					username: value
				}
			})
			.then(({ data }) => data);
		return available === true;
	} catch (e) {
		// Empty catch
	}
	return false;
}, 500);

export const initialValues = {
	email: "",
	firstName: "",
	lastName: "",
	username: "",
	gender: genderOptions[2],
	dob: new Date("1996/08/31"),
	profilePicture: {}
};

export const schemaProperties = {
	email: yup
		.string()
		.test("is-email", "${path} is not valid", (value) => isEmail(value))
		.required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	username: yup
		.string()
		.test(
			"is-valid",
			"Your ${path} can only contain letters, numbers and '_'",
			(value) => value === slugify(value)
		)
		.test("is-available", "${path} is not available", checkUsernameAvailable)
		.required(),
	gender: yup
		.object()
		.shape({
			label: yup.string().oneOf(["Male", "Female", "Other"]),
			id: yup.string().oneOf(["male", "female", "other"])
		})
		.required(),
	dob: yup
		.string()
		.test(
			"is-over-18",
			"Must be over 18 years of age",
			(value) => new Date().getFullYear() - new Date(value).getFullYear() > 18
		),
	profilePicture: yup.object().shape({
		cdnUrl: yup.string().label("Profile picture")
	})
};

export const validationSchema = yup.object().shape(schemaProperties);

const GeneralStep = ({ setFieldValue, values }) => {
	const [css] = useStyletron();
	const [confetti, setConfetti] = useState(false);
	const [selfManagedUsername, setSelfManagedUsername] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setConfetti(true);
		}, 250);
	}, []);

	return (
		<div className={css({ paddingBottom: "100px" })}>
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
				<Cell span={12}>
					<TextField
						name="email"
						label="Email"
						placeholder="your.email@provider.com"
						maxLength={250}
					/>
				</Cell>
				<Cell span={[12, 4, 6]}>
					<TextField
						name="firstName"
						label="First Name"
						placeholder="Christie"
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
						placeholder="Holderplace"
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
					<TextField
						name="username"
						label="Username"
						caption={`Your link will look like ${publicUrl}${routes.build.user(
							values.username || "..."
						)}`}
						placeholder="christie_holderplace"
						maxLength={25}
						{...(selfManagedUsername
							? {}
							: {
									endEnhancer: () => (
										<Button
											onClick={() => setSelfManagedUsername(true)}
											shape={BUTTON_SHAPE.square}
											kind={BUTTON_KIND.minimal}
											overrides={{
												BaseButton: {
													style: {
														marginLeft: "-16px",
														marginRight: "-16px"
													}
												}
											}}
										>
											<EditIcon size={22} />
										</Button>
									),
									disabled: true
							  })}
					/>
				</Cell>
				<Cell span={[12, 4, 6]}>
					<SelectField name="gender" label="Gender" options={genderOptions} />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<DateField name="dob" label="Date of birth" caption="YYYY/MM/DD" />
				</Cell>
				<Cell span={12}>
					<FileUploaderField
						name="profilePicture"
						label="Profile Picture"
						caption="Must be a JPEG or PNG with a max size of 2MB"
						images
					/>
				</Cell>
			</Grid>
		</div>
	);
};

GeneralStep.propTypes = {
	setFieldValue: PropTypes.func,
	values: PropTypes.shape({
		username: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string
	})
};

GeneralStep.defaultProps = {
	setFieldValue() {},
	values: {
		username: "",
		firstName: "",
		lastName: ""
	}
};

export default GeneralStep;
