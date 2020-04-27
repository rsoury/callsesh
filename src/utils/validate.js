import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const phoneNumber = yup
	.string()
	.min(9)
	.test("is-valid-phone", "Must be a valid phone number", (value) => {
		const v = value || "";
		if (v.length >= 9) {
			const p = parsePhoneNumberFromString(v);
			return p.isValid();
		}
		return false;
	});
