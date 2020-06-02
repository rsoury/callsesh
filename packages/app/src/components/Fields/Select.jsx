import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Select } from "baseui/select";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const SelectField = ({
	name,
	label,
	caption,
	placeholder,
	options,
	...props
}) => (
	<Field name={name} id={snakeCase(name)}>
		{({
			field: { onChange, value, onBlur, ...field },
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
				<Select
					{...field}
					id={`${snakeCase(name)}_select`}
					clearable={false}
					filterOutSelected={false}
					searchable={false}
					backspaceRemoves={false}
					options={options}
					placeholder={placeholder}
					error={meta.touched ? !!meta.error : false}
					onChange={({ value: newValue }) => {
						setFieldValue(name, newValue[0]);
					}}
					value={[value]}
					onBlur={(e) => {
						console.log(e);
						onBlur(e);
					}}
					{...props}
					overrides={{
						ControlContainer: {
							props: {
								id: `${snakeCase(name)}_select_control`
							}
						},
						InputContainer: {
							style: {
								display: "none"
							}
						}
					}}
				/>
			</FormControl>
		)}
	</Field>
);

SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({ label: PropTypes.string, id: PropTypes.string })
	)
};

SelectField.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	options: []
};

export default SelectField;
