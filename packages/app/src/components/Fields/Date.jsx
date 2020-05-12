import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Datepicker } from "baseui/datepicker";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const DateField = ({ name, label, caption, placeholder, ...props }) => (
	<Field name={name} id={snakeCase(name)}>
		{({
			field: { onChange, value, ...field },
			meta,
			form: { setFieldValue }
		}) => (
			<FormControl
				label={() => label || name}
				caption={() => caption}
				error={
					meta.touched && meta.error ? () => format.message(meta.error) : null
				}
			>
				<Datepicker
					{...field}
					placeholder={placeholder}
					error={meta.touched ? !!meta.error : false}
					onChange={({ date }) => {
						setFieldValue(name, (Array.isArray(date) ? date : [date])[0]);
					}}
					value={[value]}
					{...props}
				/>
			</FormControl>
		)}
	</Field>
);

DateField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string
};

DateField.defaultProps = {
	label: "",
	caption: "",
	placeholder: ""
};

export default DateField;
