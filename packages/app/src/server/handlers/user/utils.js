import * as yup from "yup";
import isEmail from "is-email";

import slugify from "@/utils/slugify";

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
		.required(),
	gender: yup.string().oneOf(["Male", "Female", "Other"]).required(),
	dob: yup.string().required(),
	profilePicture: yup.object(),
	country: yup.string(),
	currency: yup.string(),
	paymentMethod: yup.object(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
};
