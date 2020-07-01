import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import isNumber from "is-number";

import FeeCalculator from "@/components/FeeCalculator";

const TextField = ({
	name,
	label,
	caption,
	placeholder,
	onChange: onChangeProp,
	calculator,
	...props
}) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{({ field: { onChange, ...field }, meta, form: { setFieldValue } }) => (
				<div>
					<FormControl
						label={label ? () => label : null}
						caption={() => caption}
						error={
							meta.touched && meta.error
								? () => format.message(meta.error)
								: null
						}
					>
						<Input
							{...field}
							type="text"
							placeholder={placeholder}
							error={meta.touched ? !!meta.error : false}
							onChange={(e) => {
								if (isNumber(e.target.value)) {
									// Only AUD and USD -- In the future we'll add support for zero-decimal currencies
									const value = parseFloat(e.target.value) * 100;
									setFieldValue(name, value);
									onChangeProp(e);
									return true;
								}
								return false;
							}}
							{...props}
						/>
					</FormControl>
					{calculator && <FeeCalculator hourlyRate={field.value} />}
				</div>
			)}
		</Field>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	calculator: PropTypes.bool
};

TextField.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	onChange() {},
	calculator: false
};

export default TextField;
