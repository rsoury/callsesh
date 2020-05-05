import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Datepicker } from "baseui/datepicker";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const SelectField = ({ name, label, caption, placeholder, ...props }) => (
	<Field name={name} id={snakeCase(name)}>
		{({ field: { onChange, ...field }, meta, form: { setFieldValue } }) => (
			<FormControl
				label={label || name ? () => label || name : null}
				caption={caption ? () => caption : null}
				error={() => (meta.touched ? format.message(meta.error) : "")}
			>
				<Datepicker
					{...field}
					placeholder={placeholder}
					error={meta.touched ? !!meta.error : false}
					onChange={({ date }) => {
						const value = Array.isArray(date) ? date : [date];
						setFieldValue(name, value);
					}}
					{...props}
				/>
			</FormControl>
		)}
	</Field>
);

SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string
};

SelectField.defaultProps = {
	label: "",
	caption: "",
	placeholder: ""
};

export default SelectField;
