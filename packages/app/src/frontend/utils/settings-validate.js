/**
 * Util for validating values against any shema and returning errors object.
 * Used with Formik
 * Used in Settings pages.
 */

import * as yup from "yup";
import { format } from "@callsesh/utils";
import set from "lodash/set";

const validate = async (schema, values) => {
	const errors = {};
	try {
		await yup.object().shape(schema).validate(values);
	} catch (err) {
		console.error(err); // eslint-disable-line
		set(errors, err.path, format.message(err.errors[0]));
	}
	return errors;
};

export default validate;
