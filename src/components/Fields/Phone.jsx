/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { PhoneInput, COUNTRIES } from "baseui/phone-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import isEmpty from "is-empty";

import onChangeIsNumber from "@/utils/on-change-is-number";
import * as format from "@/utils/format";

// TODO: Make this available for all phone numbers
const PhoneInputField = ({
	field: { onChange, value, onBlur, ...field },
	form: { touched, errors, setFieldValue }
}) => {
	if (!isEmpty(value)) {
		const phoneNumber = parsePhoneNumberFromString(value);
		if (phoneNumber) {
			value = phoneNumber.nationalNumber;
		}
	}
	const [inputValue, setInputValue] = useState(value);

	return (
		<FormControl error={format.message(errors[field.name])}>
			<PhoneInput
				id={field.name}
				country={COUNTRIES.AU}
				error={touched[field.name] ? !!errors[field.name] : false}
				onChange={onChangeIsNumber((e) => {
					onChange(e);
					setInputValue(e.target.value);
					setFieldValue(
						field.name,
						`${COUNTRIES.AU.dialCode}${e.target.value}`
					);
				})}
				onBlur={(e) => {
					const v = `${COUNTRIES.AU.dialCode}${e.target.value}`;
					const phoneNumber = parsePhoneNumberFromString(v);
					if (phoneNumber) {
						setFieldValue(field.name, phoneNumber.number);
					}
					onBlur(e);
				}}
				{...field}
				value={inputValue}
			/>
		</FormControl>
	);
};

const PhoneField = () => (
	<Field name="phone" id="phone" type="text">
		{(props) => <PhoneInputField {...props} />}
	</Field>
);

export default PhoneField;
