import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const phoneNumber = yup
	.string()
	.min(9)
	.test("is-valid-phone", "Must be a valid phone number", (value) => {
		if (value.length >= 9) {
			const p = parsePhoneNumberFromString(value);
			return p.isValid();
		}
		return false;
	});
