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
import { StatefulTooltip as Tooltip } from "baseui/tooltip";
import {
	Link as LinkIcon,
	Twitter as TwitterIcon,
	GitHub as GithubIcon,
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Linkedin as LinkedinIcon,
	Dribbble as DribbbleIcon
} from "react-feather";
import startCase from "lodash/startCase";

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
			Icon: DribbbleIcon
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
						src="/static/assets/socials/medium.svg"
						alt="Medium icon"
						className={css({
							maxWidth: `${size * 2}px`,
							maxHeight: `${size * 2}px`
						})}
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
					{activeInputs.map((inputType) => {
						const { placeholder, Icon } = linkTypes[inputType];

						return (
							<Input
								type="text"
								placeholder={placeholder}
								error={isEmpty(error) ? false : error[inputType]}
								startEnhancer={() => <Icon size={22} />}
								onChange={(e) => {
									const { value: inputValue } = e.target;
									if (inputValue.length < 250) {
										value[inputType] = inputValue;
										onChange(value);
									}
								}}
								{...props}
							/>
						);
					})}
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
						<Tooltip content={() => <div>{startCase(key)}</div>} showArrow>
							<Button
								key={key}
								size={BUTTON_SIZE.compact}
								shape={BUTTON_SHAPE.pill}
								overrides={{
									BaseButton: {
										style: {
											marginRight: "10px",
											color: "#fff"
										}
									}
								}}
							>
								<Icon size={22} />
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
