import React from "react";
import PropTypes from "prop-types";
import { H1 as Heading, H5 as Subheader } from "baseui/typography";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { STYLE_TYPE as CHECKBOX_STYLE_TYPE } from "baseui/checkbox";
import { Card, StyledBody } from "baseui/card";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import {
	PhoneOff as AnonPhoneIcon,
	Send as PayoutsIcon,
	Clock as MeterIcon,
	MessageSquare as ChatIcon,
	DollarSign as HourlyRateIcon
} from "react-feather";
import * as yup from "yup";
import isNumber from "is-number";
import isUrl from "is-url";

import SelectField from "@/frontend/components/Fields/Select";
import TextField from "@/frontend/components/Fields/Text";
import CheckboxField from "@/frontend/components/Fields/Checkbox";
import MoneyField from "@/frontend/components/Fields/Money";
import LinksField from "@/frontend/components/Fields/Links";
import Emoji from "@/frontend/components/Emoji";
import useUser from "@/frontend/hooks/use-user";
import validateSocialUrl from "@/utils/validate-social-url";

const listItemProps = {
	artworkSize: ARTWORK_SIZES.MEDIUM,
	overrides: {
		Root: {
			style: {
				backgroundColor: "transparent",
				marginTop: "10px",
				marginBottom: "10px"
			}
		},
		ArtworkContainer: {
			style: {
				paddingBottom: "10px",
				justifyContent: "flex-start",
				width: "30px",
				minWidth: "30px",
				marginRight: "10px"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px",
				paddingRight: "0px"
			}
		}
	}
};

export const purposeOptions = [
	{ label: "Advice", id: "advice" },
	{ label: "Expertise", id: "expertise" },
	{ label: "Consultancy", id: "consultancy" },
	{ label: "Coaching", id: "coaching" },
	{ label: "Companionship", id: "companionship" },
	{ label: "Entertainment", id: "entertainment" },
	{ label: "Counseling", id: "counseling" },
	{ label: "Other", id: "other" }
];

export const initialValues = {
	operator: false,
	hourlyRate: 0,
	purpose: {
		option: purposeOptions[0],
		value: ""
	},
	messageBroadcast: "",
	links: {
		website: "",
		twitter: "",
		github: "",
		linkedin: "",
		dribbble: "",
		facebook: "",
		medium: "",
		instagram: ""
	}
};

export const schemaProperties = {
	operator: yup.boolean().required(),
	hourlyRate: yup.number().when("operator", {
		// If the value of "operator" exists, then check if its true, otherwise always return true
		// "operator" will be undefined for profile settings where each properties is validated one at a time.
		is: (value) => (typeof value === "undefined" ? true : value === true),
		then: (s) =>
			s
				.test(
					"is-valid",
					"${path} must be greater than or equal to $1.00 / hour",
					(value) => isNumber(value) && value > 100
				)
				.required()
	}),
	purpose: yup.object().shape({
		option: yup
			.object()
			.shape({
				label: yup.string(),
				id: yup.string()
			})
			.when("operator", {
				is: (value) => (typeof value === "undefined" ? true : value === true),
				then: (s) => s.required()
			}),
		value: yup.string().when("option", {
			is: (value) => value.id === "other",
			then: (s) => s.required()
		})
	}),
	messageBroadcast: yup.string().when("operator", {
		is: (value) => (typeof value === "undefined" ? true : value === true),
		then: (s) => s.required()
	}),
	links: yup.object().shape({
		website: yup
			.string()
			.test("is-url", "Must be a valid URL", (value) =>
				value ? isUrl(value) : true
			),
		twitter: yup
			.string()
			.test(
				"is-twitter-url",
				"Must be a valid Twitter URL",
				validateSocialUrl("twitter.com")
			),
		github: yup
			.string()
			.test(
				"is-github-url",
				"Must be a valid Github URL",
				validateSocialUrl("github.com")
			),
		linkedin: yup
			.string()
			.test(
				"is-linkedin-url",
				"Must be a valid LinkedIn URL",
				validateSocialUrl("linkedin.com")
			),
		facebook: yup
			.string()
			.test(
				"is-facebook-url",
				"Must be a valid Facebook URL",
				validateSocialUrl("facebook.com")
			),
		dribbble: yup
			.string()
			.test(
				"is-dribbble-url",
				"Must be a valid Dribbble URL",
				validateSocialUrl("dribbble.com")
			),
		medium: yup
			.string()
			.test(
				"is-medium-url",
				"Must be a valid Medium URL",
				validateSocialUrl("medium.com")
			),
		instagram: yup
			.string()
			.test(
				"is-instagram-url",
				"Must be a valid Instagram URL",
				validateSocialUrl("instagram.com")
			)
	})
};

export const validationSchema = yup.object().shape(schemaProperties);

const OperatorStep = ({ noToggle, values }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	return (
		<div className={css({ paddingBottom: "50px" })}>
			<Grid>
				<Cell span={12}>
					<Heading>
						<strong className={css({ fontWeight: 800 })}>
							Become an Operator&nbsp;&nbsp;
							<Emoji label="phone" symbol="📞" />
						</strong>
					</Heading>
					<Subheader>
						Make money offering your assistance and collaborate through call
						sessions!
					</Subheader>
					<ul className={css({ margin: "0px", padding: "0px" })}>
						<ListItem artwork={AnonPhoneIcon} {...listItemProps}>
							<ListItemLabel description="We create a call session between you and your caller to hide your personal phone number.">
								Hidden phone numbers
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={MeterIcon} {...listItemProps}>
							<ListItemLabel description="Continue charging for your time outside of your phone call.">
								Meter your session
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={ChatIcon} {...listItemProps}>
							<ListItemLabel description="Share links, files and messages to continue collaboration outside your phone call">
								Chat with your caller
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={PayoutsIcon} {...listItemProps}>
							<ListItemLabel description="Get paid directly into your bank account">
								Payouts guaranteed
							</ListItemLabel>
						</ListItem>
					</ul>
				</Cell>
			</Grid>
			{!noToggle && (
				<div className={css({ marginTop: "20px" })}>
					<Grid>
						<Cell span={12}>
							<Card
								overrides={{
									Root: {
										style: {
											width: "100%",
											transition: "border-color 0.25s, background-color 0.25s",
											...(values.operator
												? {
														borderTopColor: theme.colors.accent,
														borderBottomColor: theme.colors.accent,
														borderRightColor: theme.colors.accent,
														borderLeftColor: theme.colors.accent
												  }
												: {})
										}
									}
								}}
							>
								<StyledBody>
									<CheckboxField
										name="operator"
										label="Want to be a phone call operator?"
										checkmarkType={CHECKBOX_STYLE_TYPE.toggle_round}
										overrides={{
											Label: {
												style: {
													fontWeight: "900"
												}
											}
										}}
									/>
								</StyledBody>
							</Card>
						</Cell>
					</Grid>
				</div>
			)}
			{values.operator && (
				<div className={css({ marginTop: "20px" })}>
					<Grid>
						<Cell span={12}>
							<div
								className={css({
									padding: "20px 0",
									margin: "10px 0 20px",
									borderTopWidth: "1px",
									borderTopStyle: "solid",
									borderTopColor: theme.colors.borderOpaque,
									borderBottomWidth: "1px",
									borderBottomStyle: "solid",
									borderBottomColor: theme.colors.borderOpaque
								})}
							>
								<MoneyField
									name="hourlyRate"
									label="What is your hourly rate?"
									startEnhancer={() => <HourlyRateIcon size={20} />}
									endEnhancer={() => <span>/hour</span>}
									caption={`Callers will be charged per second based on this rate. Currency is in ${user.currency}.`}
									placeholder="30"
									calculator
								/>
							</div>
						</Cell>
						<Cell
							span={values.purpose.option?.id === "other" ? [12, 4, 6] : 12}
						>
							<SelectField
								name="purpose.option"
								label="What will you be offering your callers?"
								options={purposeOptions}
								caption="This will appear on your public operator profile"
							/>
						</Cell>
						{values.purpose.option?.id === "other" && (
							<Cell span={[12, 4, 6]}>
								<TextField
									name="purpose.value"
									label="Other?"
									placeholder="Medical Advice"
									maxLength={50}
								/>
							</Cell>
						)}
						<Cell span={12}>
							<TextField
								name="messageBroadcast"
								label="Have a message for your callers? Could be your biography, or a note about your calls"
								placeholder="Hey! One thing you should know about me is..."
								maxLength={240}
								area
								overrides={{
									Input: {
										style: {
											minHeight: "150px"
										}
									}
								}}
							/>
						</Cell>
						<Cell span={12}>
							<LinksField
								name="links"
								label="Add your website and social URLs"
								caption="Give a way for a callers to qualify you"
							/>
						</Cell>
					</Grid>
				</div>
			)}
		</div>
	);
};

OperatorStep.propTypes = {
	values: PropTypes.shape({
		operator: PropTypes.bool,
		hourlyRate: PropTypes.number,
		purpose: PropTypes.shape({
			option: PropTypes.object,
			value: PropTypes.string
		}),
		messageBroadcast: PropTypes.string
	}),
	noToggle: PropTypes.bool
};

OperatorStep.defaultProps = {
	values: {},
	noToggle: false
};

export default OperatorStep;
