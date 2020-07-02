import React, { useState } from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import isNumber from "is-number";
import * as fees from "@callsesh/utils/fees";
import { format } from "@callsesh/utils";

import FeeCalculator from "@/components/FeeCalculator";

const MoneyInput = ({
	name,
	label,
	caption,
	placeholder,
	onChange,
	onBlur,
	calculator,
	error,
	value,
	...props
}) => {
	const [inputValue, setInputValue] = useState(fees.format(value, true));

	return (
		<div>
			<FormControl
				label={label ? () => label : null}
				caption={() => caption}
				error={error}
			>
				<Input
					name={name}
					type="text"
					placeholder={placeholder}
					error={!isEmpty(error)}
					onChange={(e) => {
						if (isNumber(e.target.value)) {
							// Only AUD and USD -- In the future we'll add support for zero-decimal currencies
							const intVal = fees.value(e.target.value);
							setInputValue(e.target.value);
							onChange(intVal);
							return true;
						}
						if (isEmpty(e.target.value)) {
							setInputValue("");
							onChange(0);
							return true;
						}
						return false;
					}}
					onBlur={(e) => {
						if (isEmpty(e.target.value)) {
							setInputValue("");
						} else {
							const intVal = fees.value(e.target.value);
							setInputValue(fees.format(intVal, true));
						}
						return onBlur(e);
					}}
					value={inputValue}
					{...props}
				/>
			</FormControl>
			{calculator && <FeeCalculator hourlyRate={value} />}
		</div>
	);
};

MoneyInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	value: PropTypes.number,
	calculator: PropTypes.bool
};

MoneyInput.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	onChange() {},
	onBlur() {},
	error: "",
	value: "",
	calculator: false
};

const MoneyField = ({ name, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{({
				field: { onChange, ...field },
				meta: { touched, error },
				form: { setFieldValue }
			}) => (
				<MoneyInput
					name={name}
					error={touched && error ? () => format.message(error) : null}
					onChange={(value) => setFieldValue(name, value)}
					{...field}
					{...props}
				/>
			)}
		</Field>
	);
};

MoneyField.propTypes = {
	name: PropTypes.string.isRequired
};

export default MoneyField;
