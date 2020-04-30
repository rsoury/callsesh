/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { PhoneInput, COUNTRIES } from "baseui/phone-input";
import {
	parsePhoneNumberFromString,
	getExampleNumber
} from "libphonenumber-js";
import examplePhoneNumbers from "libphonenumber-js/examples.mobile.json";
import isEmpty from "is-empty";
import snakeCase from "lodash/snakeCase";
import { useRequest } from "@wagecall/utils";

import getSpinner from "@/components/getSpinner";
import onChangeIsNumber from "@/utils/on-change-is-number";
import * as format from "@/utils/format";

const Spinner = getSpinner({
	width: "22px",
	height: "22px",
	borderBottomColor: "rgb(220, 220, 220)",
	borderLeftColor: "rgb(220, 220, 220)",
	borderRightColor: "rgb(220, 220, 220)"
});

const PhoneInputField = ({
	field: { onChange, value, onBlur, ...field },
	form: { setFieldValue },
	meta,
	label,
	caption,
	placeholder: placeholderProp,
	ipLookup
}) => {
	if (!isEmpty(value)) {
		const phoneNumber = parsePhoneNumberFromString(value);
		if (phoneNumber) {
			value = phoneNumber.nationalNumber;
		}
	}
	const [text, setText] = useState(value);
	const [country, setCountry] = useState(COUNTRIES.AU);
	const [placeholder, setPlaceholder] = useState(placeholderProp);

	// Lookup IP to localise phone number input.
	let lookupData = [];
	let isLoadingLookup = true;
	if (ipLookup) {
		const { data, isValidating } = useRequest({
			url: "http://ip-api.com/json",
			method: "GET"
		});
		lookupData = data;
		isLoadingLookup = isValidating;
	}

	useEffect(() => {
		if (lookupData?.countryCode) {
			const exampleNumber = getExampleNumber(
				lookupData.countryCode,
				examplePhoneNumbers
			);
			const newPlaceholder = exampleNumber
				.formatInternational()
				.replace(country.dialCode, "")
				.trim();
			setPlaceholder(newPlaceholder);

			setCountry(COUNTRIES[lookupData.countryCode.toUpperCase()]);
		}
	}, [lookupData]);

	return (
		<FormControl
			label={label || field.name ? () => label || field.name : null}
			caption={caption ? () => caption : null}
			error={meta.touched ? format.message(meta.error) : ""}
		>
			<PhoneInput
				id={snakeCase(field.name)}
				country={country}
				error={meta.touched ? !!meta.error : false}
				onTextChange={onChangeIsNumber((e) => {
					onChange(e);
					setText(e.target.value);
					setFieldValue(field.name, `${country.dialCode}${e.target.value}`);
				})}
				onCountryChange={({ option }) => {
					setCountry(option);
					const exampleNumber = getExampleNumber(
						option.id,
						examplePhoneNumbers
					);
					const newPlaceholder = exampleNumber
						.formatInternational()
						.replace(option.dialCode, "")
						.trim();
					setPlaceholder(newPlaceholder);
				}}
				onBlur={(e) => {
					const v = `${country.dialCode}${e.target.value}`;
					const phoneNumber = parsePhoneNumberFromString(v);
					if (phoneNumber) {
						setFieldValue(field.name, phoneNumber.number);
					}
					onBlur(e);
				}}
				{...field}
				text={text}
				placeholder={placeholder}
				overrides={{
					CountrySelect: {
						props: {
							overrides: {
								Root: {
									style: {
										cursor: "pointer"
									}
								},
								ControlContainer: {
									style: {
										cursor: "pointer"
									}
								}
							}
						}
					}
				}}
				endEnhancer={isLoadingLookup && (() => <Spinner />)}
				disabled={isLoadingLookup}
			/>
		</FormControl>
	);
};

const PhoneField = ({ name, ...fieldProps }) => (
	<Field name={name} id={snakeCase(name)} type="text">
		{(props) => <PhoneInputField {...props} {...fieldProps} />}
	</Field>
);

PhoneField.propTypes = {
	name: PropTypes.string.isRequired
};

export default PhoneField;
