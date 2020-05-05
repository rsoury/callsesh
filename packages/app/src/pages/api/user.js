/**
 * Get / Manage the currently authenticated user
 */

import * as yup from "yup";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import getHandler from "@/middleware";
import auth, { requireAuthentication } from "@/middleware/auth";
import * as authManager from "@/auth-manager";

const handler = getHandler();

const registeredUserSchema = yup.object().shape({
	name: yup.string().required(),
	nickname: yup.string().required(),
	picture: yup.string().required(),
	sub: yup.string().required(),
	updatedAt: yup.string().required(),
	roles: yup.array().of(yup.string()).default([]),
	username: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	gender: yup.string(),
	dob: yup.object().shape({
		day: yup.string(),
		month: yup.string(),
		year: yup.string()
	}),
	localCountry: yup.string()
});

handler.use(requireAuthentication).get(async (req, res) => {
	const session = await auth.getSession(req);

	const userData = await authManager.getUser(session.user.sub);
	let user = {
		...session.user,
		...userData.user_metadata
	};
	user = mapKeys(user, (value, key) => camelCase(key));

	let isRegistered = false;
	try {
		await registeredUserSchema.validate(user);
		isRegistered = true;
	} catch (e) {
		// Empty catch
	}

	user.isRegistered = isRegistered;

	res.json(user);
});

export default handler;
