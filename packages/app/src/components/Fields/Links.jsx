/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { Field } from "formik";
import {
	FormControl,
	StyledLabel as Label,
	StyledCaption as Caption
} from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import isEmpty from "is-empty";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { StatefulTooltip as Tooltip } from "baseui/tooltip";
import startCase from "lodash/startCase";
import CloseIcon from "baseui/icon/delete";
import { OPERATOR_LINK_TYPES } from "@/constants";

const LinksInput = ({ label, caption, value, error, onChange, ...props }) => {
	const [css] = useStyletron();
	// An array to determine which inputs are showing.
	// Should be those in value, and inputs shown after selecting add link
	const [activeInputs, setActiveInputs] = useState(
		isEmpty(Object.entries(value).filter(([, v]) => !isEmpty(v))) // Filter empty string values
			? ["website"]
			: Object.keys(value)
	);

	const inactiveInputs = Object.entries(OPERATOR_LINK_TYPES).filter(
		([key]) => !activeInputs.includes(key)
	);

	console.log(error);

	return (
		<div>
			{label && <Label>{label}</Label>}
			{isEmpty(error) && caption && <Caption>{caption}</Caption>}
			{!isEmpty(error) && (
				<Caption $error>Please ensure your links are valid URLs</Caption>
			)}
			{
				<div>
					{activeInputs.map((inputType) => {
						const { placeholder, Icon } = OPERATOR_LINK_TYPES[inputType];

						let errMessage = null;
						if (!isEmpty(error)) {
							errMessage = error[inputType] || null;
							if (errMessage) {
								errMessage = format.message(errMessage);
							}
						}

						return (
							<FormControl key={inputType} error={errMessage}>
								<Input
									type="text"
									placeholder={placeholder}
									error={!!errMessage}
									startEnhancer={() => <Icon size={20} />}
									endEnhancer={() => (
										<Button
											shape={BUTTON_SHAPE.round}
											kind={BUTTON_KIND.secondary}
											size={BUTTON_SIZE.mini}
											onClick={() => {
												const { [inputType]: dismiss, ...rest } = value;
												onChange(rest);
												setActiveInputs(
													activeInputs.filter((type) => type !== inputType)
												);
											}}
											overrides={{
												BaseButton: {
													props: {
														tabIndex: "-1"
													}
												}
											}}
										>
											<CloseIcon size={24} />
										</Button>
									)}
									onChange={(e) => {
										const { value: inputValue } = e.target;
										if (inputValue.length <= 250) {
											const { ...newValue } = value;
											newValue[inputType] = inputValue;
											onChange(newValue);
										}
									}}
									overrides={{
										EndEnhancer: {
											style: {
												paddingLeft: "5px",
												paddingRight: "5px",
												backgroundColor: "transparent"
											}
										}
									}}
									{...props}
									value={value[inputType] || ""}
								/>
							</FormControl>
						);
					})}
				</div>
			}
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
					margin: "10px 0"
				})}
			>
				{inactiveInputs.length > 0 && (
					<div className={css({ display: "flex", marginRight: "10px" })}>
						<Label>Add link: </Label>
					</div>
				)}
				{inactiveInputs.map(([key, { Icon }]) => (
					<Tooltip
						key={key}
						content={() => <div>{startCase(key)}</div>}
						showArrow
					>
						<Button
							size={BUTTON_SIZE.compact}
							shape={BUTTON_SHAPE.round}
							kind={BUTTON_KIND.secondary}
							overrides={{
								BaseButton: {
									style: {
										marginRight: "5px"
									}
								}
							}}
							onClick={() => {
								setActiveInputs([...activeInputs, key]);
							}}
						>
							<Icon size={20} />
						</Button>
					</Tooltip>
				))}
			</div>
		</div>
	);
};

const LinksField = ({ name, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{({
				field: { onChange, ...field },
				meta,
				form: { setFieldValue, setFieldError }
			}) => (
				<LinksInput
					{...props}
					error={meta.touched && meta.error ? meta.error : null}
					onChange={(newValue) => {
						setFieldValue(name, newValue);
						if (!isEmpty(meta.error) && typeof meta.error === "object") {
							// Remove errors for properties that aren't in new value
							const newValueKeys = Object.keys(newValue);
							const newError = Object.entries(meta.error).reduce(
								(result, [key, val]) => {
									if (newValueKeys.includes(key)) {
										result[key] = val;
									}
									return result;
								},
								{}
							);
							setFieldError(name, newError);
						}
					}}
					{...field}
				/>
			)}
		</Field>
	);
};

LinksInput.propTypes = {
	label: PropTypes.string,
	caption: PropTypes.string,
	value: PropTypes.object, // An object of string key/values.
	error: PropTypes.object,
	onChange: PropTypes.func
};

LinksInput.defaultProps = {
	label: "",
	caption: "",
	value: {}, // An object of string key/values.
	error: null,
	onChange() {}
};

LinksField.propTypes = {
	name: PropTypes.string.isRequired
};

export default LinksField;
