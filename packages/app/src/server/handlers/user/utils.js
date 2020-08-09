import * as yup from "yup";
import isEmail from "is-email";
import isUrl from "is-url";

import slugify from "@/utils/slugify";
import validateSocialUrl from "@/utils/validate-social-url";

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
	messageBroadcast: yup.string(),
	links: yup.object().shape({
		website: yup
			.string()
			.test("is-url", "Must be a valid URL", (value) =>
				value ? isUrl(value) : true
			),
		twitter: yup
			.string()
			.test(
				"is-twitter-url",
				"Must be a valid Twitter URL",
				validateSocialUrl("twitter.com")
			),
		github: yup
			.string()
			.test(
				"is-github-url",
				"Must be a valid Github URL",
				validateSocialUrl("github.com")
			),
		linkedin: yup
			.string()
			.test(
				"is-linkedin-url",
				"Must be a valid LinkedIn URL",
				validateSocialUrl("linkedin.com")
			),
		facebook: yup
			.string()
			.test(
				"is-facebook-url",
				"Must be a valid Facebook URL",
				validateSocialUrl("facebook.com")
			),
		dribbble: yup
			.string()
			.test(
				"is-dribbble-url",
				"Must be a valid Dribbble URL",
				validateSocialUrl("dribbble.com")
			),
		medium: yup
			.string()
			.test(
				"is-medium-url",
				"Must be a valid Medium URL",
				validateSocialUrl("medium.com")
			),
		instagram: yup
			.string()
			.test(
				"is-instagram-url",
				"Must be a valid Instagram URL",
				validateSocialUrl("instagram.com")
			)
	})
};
