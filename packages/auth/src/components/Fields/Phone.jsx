/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { styled } from "baseui";
import { FormControl } from "baseui/form-control";
import {
	PhoneInput,
	CountrySelectDropdown,
	StyledFlag
} from "baseui/phone-input";
import {
	parsePhoneNumberFromString,
	getExampleNumber
} from "libphonenumber-js";
import examplePhoneNumbers from "libphonenumber-js/examples.mobile.json";
import isEmpty from "is-empty";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

import useCountry from "@/use-country";
import getSpinner from "@/components/getSpinner";
import onChangeIsNumber from "@/utils/on-change-is-number";

const Spinner = getSpinner({
	width: "22px",
	height: "22px",
	borderBottomColor: "rgb(220, 220, 220)",
	borderLeftColor: "rgb(220, 220, 220)",
	borderRightColor: "rgb(220, 220, 220)"
});

const FlagContainer = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
});

const FallbackFlag = ({ children, ...props }) => {
	const { $iso: iso } = props;
	return (
		<FlagContainer>
			<StyledFlag iso={iso} {...props} />
		</FlagContainer>
	);
};

const PhoneInputField = ({
	field: { onChange, value, onBlur, ...field },
	form: { setFieldValue },
	meta,
	label,
	caption,
	placeholder: placeholderProp
}) => {
	if (!isEmpty(value)) {
		const phoneNumber = parsePhoneNumberFromString(value);
		if (phoneNumber) {
			value = phoneNumber.nationalNumber;
		}
	}
	const [text, setText] = useState(value);
	const [country, isCountryLoading, { setCountry }] = useCountry();
	const [placeholder, setPlaceholder] = useState(placeholderProp);

	const overrides = {
		FlagContainer: {
			component: FallbackFlag
		},
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
					},
					Dropdown: {
						component: CountrySelectDropdown
					}
				}
			}
		}
	};

	useEffect(() => {
		if (country) {
			const exampleNumber = getExampleNumber(country.id, examplePhoneNumbers);
			const newPlaceholder = exampleNumber
				.formatInternational()
				.replace(country.dialCode, "")
				.trim();
			setPlaceholder(newPlaceholder);
		}
	}, [country]);

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
				overrides={overrides}
				endEnhancer={isCountryLoading && (() => <Spinner />)}
				disabled={isCountryLoading}
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
