/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { Field } from "formik";
import {
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
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import {
	Link as LinkIcon,
	Twitter as TwitterIcon,
	Github as GithubIcon,
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Linkedin as LinkedinIcon
} from "react-feather";

const LinksInput = ({ label, caption, value, error, onChange, ...props }) => {
	const [css, theme] = useStyletron();
	// An array to determine which inputs are showing.
	// Should be those in value, and inputs shown after selecting add link
	const activeInputs = useState(
		isEmpty(value) ? ["website"] : Object.keys(value)
	);

	/* eslint-disable react/prop-types */
	const linkTypes = {
		website: {
			placeholder: "https://website.com",
			Icon: LinkIcon
		},
		twitter: {
			placeholder: "https://twitter.com/...",
			Icon: TwitterIcon
		},
		github: {
			placeholder: "https://github.com/...",
			Icon: GithubIcon
		},
		linkedin: {
			placeholder: "https://linkedin.com/in/...",
			Icon: LinkedinIcon
		},
		dribbble: {
			placeholder: "https://dribbble.com/...",
			Icon({ size }) {
				return (
					<img
						src=""
						alt="Dribble icon"
						className={css({ maxWidth: `${size}px`, maxHeight: `${size}px` })}
					/>
				);
			}
		},
		facebook: {
			placeholder: "https://www.facebook.com/...",
			Icon: FacebookIcon
		},
		medium: {
			placeholder: "https://medium.com/...",
			Icon({ size }) {
				return (
					<img
						src=""
						alt="Medium icon"
						className={css({ maxWidth: `${size}px`, maxHeight: `${size}px` })}
					/>
				);
			}
		},
		substack: {
			placeholder: "https://....substack.com/",
			Icon({ size }) {
				return (
					<img
						src=""
						alt="Substack icon"
						className={css({ maxWidth: `${size}px`, maxHeight: `${size}px` })}
					/>
				);
			}
		},
		instagram: {
			placeholder: "https://instagram.com/...",
			Icon: InstagramIcon
		}
	};
	/* eslint-enable react/prop-types */

	return (
		<div>
			{label && <Label>{label}</Label>}
			{isEmpty(error) && caption && <Caption>{caption}</Caption>}
			{!isEmpty(error) && (
				<Caption
					overrides={{
						color: theme.colors.negative
					}}
				>
					Please ensure your links are valid URLs
				</Caption>
			)}
			{
				<div>
					{activeInputs.map((inputType) => (
						<Input
							type="text"
							placeholder={linkTypes[inputType].placeholder}
							error={isEmpty(error) ? false : error[inputType]}
							onChange={(e) => {
								const { value: inputValue } = e.target;
								if (inputValue.length < 250) {
									value[inputType] = inputValue;
									onChange(value);
								}
							}}
							{...props}
						/>
					))}
				</div>
			}
			<div
				className={css({
					display: "flex",
					alignItems: "center"
				})}
			>
				<div className={css({ display: "flex", marginRight: "10px" })}>
					<Label>Add link: </Label>
				</div>
				{Object.entries(linkTypes)
					.filter(([key]) => !activeInputs.includes(key))
					.map(([key, { Icon }]) => (
						<Button
							key={key}
							size={BUTTON_SIZE.compact}
							shape={BUTTON_SHAPE.pill}
							overrides={{
								BaseButton: {
									style: {
										marginRight: "10px"
									}
								}
							}}
						>
							<Icon size={22} />
						</Button>
					))}
			</div>
		</div>
	);
};

const LinksField = ({ name, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{({
				field: { value, onChange, ...field },
				meta,
				form: { setFieldValue }
			}) => (
				<LinksInput
					{...props}
					error={
						meta.touched && meta.error ? () => format.message(meta.error) : null
					}
					onChange={(newValue) => setFieldValue(name, newValue)}
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
	error: PropTypes.string,
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
