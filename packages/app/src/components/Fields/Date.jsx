import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Datepicker } from "baseui/datepicker";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 118);
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const DateField = ({ name, label, caption, placeholder, ...props }) => (
	<Field name={name} id={snakeCase(name)}>
		{({
			field: { onChange, value, ...field },
			meta,
			form: { setFieldValue }
		}) => (
			<FormControl
				label={label ? () => label : null}
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
					maxDate={maxDate}
					minDate={minDate}
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
