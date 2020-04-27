import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";

const TextField = ({ name, label, caption, placeholder, ...props }) => (
	<Field name={name} id={snakeCase(name)} type="text">
		{({ field, form: { touched, errors } }) => (
			<FormControl
				label={label || name ? () => label || name : null}
				caption={caption ? () => caption : null}
				error={() => errors[field.name] || ""}
			>
				<Input
					{...field}
					placeholder={placeholder}
					error={touched[field.name] ? !!errors[field.name] : false}
					{...props}
				/>
			</FormControl>
		)}
	</Field>
);

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string
};

TextField.defaultProps = {
	label: "",
	caption: "",
	placeholder: ""
};

export default TextField;
