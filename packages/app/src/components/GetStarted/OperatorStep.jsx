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
	DollarSign as PayoutIcon
} from "react-feather";
import * as yup from "yup";

import SelectField from "@/components/Fields/Select";
import TextField from "@/components/Fields/Text";
import CheckboxField from "@/components/Fields/Checkbox";
import FileUploaderField from "@/components/Fields/FileUploader";
import Emoji from "@/components/Emoji";

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

const purposeOptions = [
	{ label: "Advice", id: "advice" },
	{ label: "Expertise", id: "expertise" },
	{ label: "Consultancy", id: "consultancy" },
	{ label: "Guidance", id: "guidance" },
	{ label: "Companionship", id: "companionship" },
	{ label: "Therapy", id: "therapy" },
	{ label: "Other", id: "other" }
];

export const initialValues = {
	operator: true, // false,
	hourlyRate: "",
	profilePicture: {},
	purpose: {
		option: purposeOptions[0],
		value: ""
	},
	messageBroadcast: ""
};

export const validationSchema = yup.object().shape({
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	profilePicture: yup.string(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
});

const OperatorStep = ({ values }) => {
	const [css, theme] = useStyletron();

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
							<ListItemLabel description="We create a call session between you and your caller to anonymise your personal phone number.">
								Anonymised phone numbers
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={PayoutIcon} {...listItemProps}>
							<ListItemLabel description="Get paid directly into your bank account or payout method of choice">
								Payouts guaranteed
							</ListItemLabel>
						</ListItem>
					</div>
				</Cell>
			</Grid>
			<div className={css({ marginTop: "20px" })}>
				<Grid>
					<Card
						overrides={{
							Root: {
								style: {
									width: "100%",
									transition: "border-color 0.25s",
									...(values.operator
										? {
												borderColor: theme.colors.accent
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
				</Grid>
			</div>
			{values.operator && (
				<div className={css({ marginTop: "20px", paddingBottom: "100px" })}>
					<Grid>
						<Cell span={12}>
							<FileUploaderField
								name="profilePicture"
								label="Profile Picture"
								caption="Must be a JPEG or PNG with a max size of 2MB"
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
