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
	DollarSign as HourlyRateIcon
} from "react-feather";
import * as yup from "yup";

import SelectField from "@/components/Fields/Select";
import TextField from "@/components/Fields/Text";
import CheckboxField from "@/components/Fields/Checkbox";
import FileUploaderField from "@/components/Fields/FileUploader";
import Emoji from "@/components/Emoji";
import useUser from "@/hooks/use-user";

import FeeCalculator from "./FeeCalculator";

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
				paddingBottom: "10px"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px"
			}
		}
	}
};

export const purposeOptions = [
	{ label: "Advice", id: "advice" },
	{ label: "Expertise", id: "expertise" },
	{ label: "Consultancy", id: "consultancy" },
	{ label: "Guidance", id: "guidance" },
	{ label: "Companionship", id: "companionship" },
	{ label: "Therapy", id: "therapy" },
	{ label: "Other", id: "other" }
];

export const initialValues = {
	operator: false,
	hourlyRate: "",
	profilePicture: {},
	purpose: {
		option: purposeOptions[0],
		value: ""
	},
	messageBroadcast: ""
};

export const schemaProperties = {
	operator: yup.boolean().required(),
	hourlyRate: yup
		.string()
		.when("operator", { is: true, then: (s) => s.required() }),
	profilePicture: yup.object().when("operator", {
		is: true,
		then: (s) =>
			s.shape({
				cdnUrl: yup.string().required().label("Profile Picture")
			})
	}),
	purpose: yup.object().shape({
		option: yup
			.object()
			.shape({
				label: yup.string(),
				id: yup.string()
			})
			.when("operator", { is: true, then: (s) => s.required() }),
		value: yup.string()
	}),
	messageBroadcast: yup
		.string()
		.when("operator", { is: true, then: (s) => s.required() })
};

export const validationSchema = yup.object().shape(schemaProperties);

const OperatorStep = ({ values }) => {
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
						Make money offering your expertise, advice or time over phone calls!
					</Subheader>
					<div>
						<ListItem artwork={AnonPhoneIcon} {...listItemProps}>
							<ListItemLabel description="We create a call session between you and your caller to hide your personal phone number.">
								Hidden phone numbers
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={PayoutsIcon} {...listItemProps}>
							<ListItemLabel description="Get paid directly into your bank account or payout method of choice">
								Payouts guaranteed
							</ListItemLabel>
						</ListItem>
					</div>
				</Cell>
			</Grid>
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
								<TextField
									name="hourlyRate"
									label="What is your hourly rate?"
									startEnhancer={() => <HourlyRateIcon />}
									endEnhancer={() => <span>/hour</span>}
									caption={`Callers will be charged per second based on this rate. Currency is in ${user.currency}.`}
									placeholder="30"
									numeric
								/>
								<FeeCalculator hourlyRate={values.hourlyRate} />
							</div>
						</Cell>
						<Cell span={12}>
							<FileUploaderField
								name="profilePicture"
								label="Profile Picture"
								caption="Must be a JPEG or PNG with a max size of 2MB"
								images
							/>
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
								label="Have a message for your callers? Could be your biography, or a note about your calls."
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
					</Grid>
				</div>
			)}
		</div>
	);
};

OperatorStep.propTypes = {
	values: PropTypes.shape({
		operator: PropTypes.bool,
		hourlyRate: PropTypes.string,
		profilePicture: PropTypes.object,
		purpose: PropTypes.shape({
			option: PropTypes.object,
			value: PropTypes.string
		}),
		messageBroadcast: PropTypes.string
	})
};

OperatorStep.defaultProps = {
	values: {}
};

export default OperatorStep;