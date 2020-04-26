import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { PinCode } from "baseui/pin-code";

const VerifyField = ({ name, label, caption, ...props }) => {
	return (
		<Field name={name} id={name} type="text">
			{({
				field: { value, onChange, ...field },
				form: { touched, errors, setFieldValue }
			}) => (
				<FormControl
					label={label ? () => label : null}
					caption={caption ? () => caption : null}
					error={() => errors[field.name] || ""}
				>
					<PinCode
						required
						values={Array(6)
							.fill("")
							.map((s, i) => (i + 1 < value.length ? value[i] : s))}
						onChange={(values) => {
							setFieldValue(field.name, values.join(""));
						}}
						{...field}
						error={touched[field.name] ? !!errors[field.name] : false}
						{...props}
					/>
				</FormControl>
			)}
		</Field>
	);
};

VerifyField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string
};

VerifyField.defaultProps = {
	label: "",
	caption: ""
};

export default VerifyField;
