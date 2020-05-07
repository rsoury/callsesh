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

export const initialValues = {
	operator: true, // false,
	hourlyRate: "",
	profilePicture: "",
	purpose: "",
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
		<div>
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
				<div className={css({ marginTop: "20px" })}>
					<Grid>
						<Cell span={12}>
							<FileUploaderField
								name="profilePicture"
								label="Profile Picture"
								caption="Must be a JPEG or PNG with a max size of 2MB"
								overrides={{}}
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
		operator: PropTypes.bool
	})
};

OperatorStep.defaultProps = {
	values: {}
};

export default OperatorStep;
