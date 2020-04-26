import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

const TextField = ({ name, label, caption }) => (
	<Field name={name} id={name} type="text">
		{({ field, form: { touched, errors } }) => (
			<FormControl
				label={label ? () => label : null}
				caption={caption ? () => caption : null}
				error={() => errors[field.name] || ""}
			>
				<Input
					{...field}
					error={touched[field.name] ? !!errors[field.name] : false}
				/>
			</FormControl>
		)}
	</Field>
);

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string
};

TextField.defaultProps = {
	label: "",
	caption: ""
};

export default TextField;
