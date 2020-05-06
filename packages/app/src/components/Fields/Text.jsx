import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const TextField = ({
	name,
	label,
	caption,
	placeholder,
	onChange: onChangeProp,
	maxLength,
	...props
}) => (
	<Field name={name} id={snakeCase(name)}>
		{({ field: { onChange, ...field }, meta }) => (
			<FormControl
				label={() => label || name}
				caption={() => caption}
				error={
					meta.touched && meta.error ? () => format.message(meta.error) : null
				}
			>
				<Input
					{...field}
					type="text"
					placeholder={placeholder}
					error={meta.touched ? !!meta.error : false}
					onChange={(e) => {
						if (maxLength > 0) {
							if (e.target.value.length > maxLength) {
								return false;
							}
						}
						onChange(e);
						onChangeProp(e);
						return true;
					}}
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
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func
};

TextField.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	maxLength: 0,
	onChange() {}
};

export default TextField;
