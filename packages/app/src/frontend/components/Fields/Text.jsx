import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import { Textarea } from "baseui/textarea";
import isNumber from "is-number";

const TextField = ({
	name,
	label,
	caption,
	placeholder,
	onChange: onChangeProp,
	maxLength,
	area,
	numeric,
	...props
}) => {
	const validateInput = (e) => {
		if (maxLength > 0) {
			if (e.target.value.length > maxLength) {
				return false;
			}
		}
		if (numeric) {
			if (!isNumber(e.target.value)) {
				return false;
			}
		}

		return true;
	};

	return (
		<Field name={name} id={snakeCase(name)}>
			{({ field: { onChange, ...field }, meta }) => (
				<FormControl
					label={label ? () => label : null}
					caption={() => caption}
					error={
						meta.touched && meta.error ? () => format.message(meta.error) : null
					}
				>
					{area ? (
						<Textarea
							{...field}
							placeholder={placeholder}
							error={meta.touched ? !!meta.error : false}
							onChange={(e) => {
								if (validateInput(e)) {
									onChange(e);
									onChangeProp(e);
									return true;
								}
								return false;
							}}
							{...props}
						/>
					) : (
						<Input
							{...field}
							type="text"
							placeholder={placeholder}
							error={meta.touched ? !!meta.error : false}
							onChange={(e) => {
								if (validateInput(e)) {
									onChange(e);
									onChangeProp(e);
									return true;
								}
								return false;
							}}
							{...props}
						/>
					)}
				</FormControl>
			)}
		</Field>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
	area: PropTypes.bool,
	numeric: PropTypes.bool
};

TextField.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	maxLength: 0,
	onChange() {},
	area: false,
	numeric: false
};

export default TextField;
