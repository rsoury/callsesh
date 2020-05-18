/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H1 as Heading,
	Paragraph2 as Paragraph,
	H4 as SmallHeading
} from "baseui/typography";
import isEmpty from "is-empty";
import {
	Phone as PhoneIcon,
	User as UserIcon,
	DollarSign as HourlyRateIcon,
	Image as PictureIcon,
	AlignLeft as PurposeIcon,
	Users as GenderIcon,
	Calendar as CalendarIcon
} from "react-feather";
import { Avatar } from "baseui/avatar";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import nl2br from "nl2br";
import ono from "@jsdevtools/ono";

import Layout from "@/components/Layout";
import UppercaseLabel from "@/components/UppercaseLabel";
import LabelControl from "@/components/LabelControl";
import EditEnhancer from "@/components/Settings/EditEnhancer";
import EditModal from "@/components/Settings/EditModal";
import useUser from "@/hooks/use-user";
import {
	schemaProperties as generalSchemaProperties,
	genderOptions
} from "@/components/Onboarding/GeneralStep";
import {
	schemaProperties as operatorSchemaProperties,
	purposeOptions
} from "@/components/Onboarding/OperatorStep";
import validate from "@/utils/settings-validate";
import SettingsSkeleton from "@/components/Settings/Skeleton";
import * as routes from "@/routes";
import { publicUrl } from "@/env-config";
import request from "@/utils/request";
import TextField from "@/components/Fields/Text";
import SelectField from "@/components/Fields/Select";
import FileUploaderField from "@/components/Fields/FileUploader";
import DateField from "@/components/Fields/Date";
import FeeCalculator from "@/components/Onboarding/FeeCalculator";
import isUserOperator from "@/utils/is-operator";
import handleException, { alerts } from "@/utils/handle-exception";
import ScreenContainer from "@/components/ScreenContainer";

const EDIT_TYPES = {
	firstName: "firstName",
	lastName: "lastName",
	username: "username",
	gender: "gender",
	dob: "dob",
	hourlyRate: "hourlyRate",
	profilePicture: "profilePicture",
	purpose: "purpose",
	messageBroadcast: "messageBroadcast"
};

const fieldGridProps = {
	gridGutters: 16,
	overrides: {
		Grid: {
			style: {
				padding: "0px !important",
				margin: "0 -8px !important"
			}
		}
	}
};

/* eslint-disable react/prop-types */
const getEditConfig = (user, type) => {
	if (isEmpty(user)) {
		return {};
	}

	let editConfig = {
		[EDIT_TYPES.firstName]: {
			title: "First Name",
			validate(values) {
				return validate(
					{
						[EDIT_TYPES.firstName]: generalSchemaProperties.firstName.required()
					},
					values
				);
			},
			initialValue: user.givenName,
			// Will be passing in object data as props to component
			Component: (props) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<TextField {...props} name={EDIT_TYPES.firstName} />
					</Cell>
				</Grid>
			)
		},
		[EDIT_TYPES.lastName]: {
			title: "Last Name",
			validate(values) {
				return validate(
					{
						[EDIT_TYPES.lastName]: generalSchemaProperties.lastName.required()
					},
					values
				);
			},
			initialValue: user.familyName,
			Component: (props) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<TextField {...props} name={EDIT_TYPES.lastName} />
					</Cell>
				</Grid>
			)
		},
		[EDIT_TYPES.username]: {
			title: "Username",
			validate(values) {
				return validate(
					{
						[EDIT_TYPES.username]: generalSchemaProperties.username.required()
					},
					values
				);
			},
			initialValue: user.username,
			Component: ({ values: { username }, ...props }) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<TextField
							{...props}
							caption={`Your link will look like ${publicUrl}/u/${
								username || "..."
							}`}
							name={EDIT_TYPES.username}
						/>
					</Cell>
				</Grid>
			)
		},
		[EDIT_TYPES.gender]: {
			title: "Gender",
			validate(values) {
				return validate(
					{ [EDIT_TYPES.gender]: generalSchemaProperties.gender.required() },
					values
				);
			},
			initialValue: genderOptions.find(({ label }) => label === user.gender),
			Component: (props) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<SelectField
							{...props}
							options={genderOptions}
							name={EDIT_TYPES.gender}
						/>
					</Cell>
				</Grid>
			)
		},
		[EDIT_TYPES.dob]: {
			title: "Date Of Birth",
			validate(values) {
				return validate(
					{ [EDIT_TYPES.dob]: generalSchemaProperties.dob.required() },
					values
				);
			},
			initialValue: new Date(user.dob),
			Component: (props) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<DateField {...props} caption="YYYY/MM/DD" name={EDIT_TYPES.dob} />
					</Cell>
				</Grid>
			)
		}
	};
	if (isUserOperator(user)) {
		// Determine purpose initial value to be compatible with Select
		let purposeInitialValue = {
			option: purposeOptions.find(({ label }) => label === user.purpose),
			value: ""
		};
		if (isEmpty(purposeInitialValue.option)) {
			purposeInitialValue = {
				option: purposeOptions.find(({ label }) => label === "Other"),
				value: user.purpose
			};
		}
		editConfig = {
			...editConfig,
			[EDIT_TYPES.hourlyRate]: {
				title: "Hourly Rate",
				validate(values) {
					return validate(
						{
							[EDIT_TYPES.hourlyRate]: operatorSchemaProperties.hourlyRate.required()
						},
						values
					);
				},
				initialValue: user.hourlyRate,
				// eslint-disable-next-line
				Component: ({ values: { hourlyRate }, ...props }) => (
					<Grid {...fieldGridProps}>
						<Cell span={12}>
							<TextField
								{...props}
								label="What is your hourly rate?"
								startEnhancer={() => <HourlyRateIcon />}
								endEnhancer={() => <span>/hour</span>}
								caption={`Callers will be charged per second based on this rate. Currency is in ${user.currency}.`}
								placeholder="30"
								numeric
								name={EDIT_TYPES.hourlyRate}
							/>
							<FeeCalculator hourlyRate={hourlyRate} />
						</Cell>
					</Grid>
				)
			},
			[EDIT_TYPES.profilePicture]: {
				title: "Profile Picture",
				validate(values) {
					return validate(
						{
							[EDIT_TYPES.profilePicture]: operatorSchemaProperties.profilePicture.required()
						},
						values
					);
				},
				initialValue: user.profilePicture || { cdnUrl: user.picture },
				Component: (props) => (
					<Grid {...fieldGridProps}>
						<Cell span={12}>
							<FileUploaderField
								{...props}
								caption="Must be a JPEG or PNG with a max size of 2MB"
								images
								name={EDIT_TYPES.profilePicture}
							/>
						</Cell>
					</Grid>
				)
			},
			[EDIT_TYPES.purpose]: {
				title: "Purpose",
				validate(values) {
					return validate(
						{
							[EDIT_TYPES.purpose]: operatorSchemaProperties.purpose.required()
						},
						values
					);
				},
				initialValue: purposeInitialValue,
				Component: ({ values: { purpose }, props }) => (
					<Grid {...fieldGridProps}>
						<Cell span={purpose.option?.id === "other" ? [12, 4, 6] : 12}>
							<SelectField
								{...props}
								name={`${EDIT_TYPES.purpose}.option`}
								label="What will you be offering your callers?"
								options={purposeOptions}
								caption="This will appear on your public operator profile"
							/>
						</Cell>
						{purpose.option?.id === "other" && (
							<Cell span={[12, 4, 6]}>
								<TextField
									name={`${EDIT_TYPES.purpose}.value`}
									label="Other?"
									placeholder="Medical Advice"
									maxLength={50}
								/>
							</Cell>
						)}
					</Grid>
				)
			},
			[EDIT_TYPES.messageBroadcast]: {
				title: "Message To Visitors",
				validate(values) {
					return validate(
						{
							[EDIT_TYPES.messageBroadcast]: operatorSchemaProperties.messageBroadcast.required()
						},
						values
					);
				},
				initialValue: user.messageBroadcast,
				Component: (props) => (
					<Grid {...fieldGridProps}>
						<Cell span={12}>
							<TextField
								{...props}
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
								name={EDIT_TYPES.messageBroadcast}
							/>
						</Cell>
					</Grid>
				)
			}
		};
	}

	return editConfig[type] || {};
};
/* eslint-enable react/prop-types */

const Profile = () => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading, { setUser }] = useUser();
	const [editType, setEditType] = useState("");

	const {
		Component: EditModalField = null,
		initialValue,
		...editConfig
	} = getEditConfig(user, editType);
	const editModalProps = {
		onClose() {
			setEditType("");
		},
		onSave(values) {
			if (typeof values.purpose !== "undefined") {
				values.purpose = isEmpty(values.purpose.value)
					? values.purpose.option.label
					: values.purpose.value;
			}
			if (typeof values.gender !== "undefined") {
				values.gender = values.gender.label;
			}
			return request
				.patch(routes.api.user, values)
				.then(({ data }) => data)
				.then(({ user: newUser }) => {
					setEditType("");
					setUser(newUser);
				})
				.catch((err) => {
					handleException(ono(err, values));
					alerts.error();
				});
		},
		initialValues: {
			[editType]: initialValue
		},
		...editConfig
	};

	return (
		<Layout>
			<ScreenContainer id="callsesh-profile-settings">
				<Grid>
					<Cell span={12}>
						<UppercaseLabel style={{ marginBottom: "10px", marginTop: "20px" }}>
							Account Settings
						</UppercaseLabel>
						<Heading marginTop="0px">Profile</Heading>
					</Cell>
				</Grid>
				{isUserLoading || isEmpty(user) ? (
					<SettingsSkeleton />
				) : (
					<div>
						<Grid>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="First Name"
									endEnhancer={() => (
										<EditEnhancer
											onClick={() => setEditType(EDIT_TYPES.firstName)}
										/>
									)}
								>
									<Paragraph margin="0">{user.givenName}</Paragraph>
								</LabelControl>
							</Cell>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="Last Name"
									endEnhancer={() => (
										<EditEnhancer
											onClick={() => setEditType(EDIT_TYPES.lastName)}
										/>
									)}
								>
									<Paragraph margin="0">{user.familyName}</Paragraph>
								</LabelControl>
							</Cell>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="Phone Number"
									startEnhancer={() => <PhoneIcon size={20} />}
								>
									<Paragraph margin="0">{user.phoneNumber}</Paragraph>
								</LabelControl>
							</Cell>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="Username"
									startEnhancer={() => <UserIcon size={20} />}
									endEnhancer={() => (
										<EditEnhancer
											onClick={() => setEditType(EDIT_TYPES.username)}
										/>
									)}
								>
									<Paragraph margin="0">{user.username}</Paragraph>
								</LabelControl>
							</Cell>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="Gender"
									startEnhancer={() => <GenderIcon size={20} />}
									endEnhancer={() => (
										<EditEnhancer
											onClick={() => setEditType(EDIT_TYPES.gender)}
										/>
									)}
								>
									<Paragraph margin="0">{user.gender}</Paragraph>
								</LabelControl>
							</Cell>
							<Cell span={[12, 4, 6]}>
								<LabelControl
									label="Date of birth"
									startEnhancer={() => <CalendarIcon size={20} />}
									endEnhancer={() => (
										<EditEnhancer onClick={() => setEditType(EDIT_TYPES.dob)} />
									)}
								>
									<Paragraph margin="0">
										{(() => {
											const date = new Date(user.dob);
											return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
										})()}
									</Paragraph>
								</LabelControl>
							</Cell>
						</Grid>
						{isUserOperator(user) && (
							<Grid>
								<Cell span={12}>
									<SmallHeading>Operator Profile</SmallHeading>
								</Cell>
								<Cell span={12}>
									<LabelControl label="Profile Picture" noBg>
										<div>
											<Avatar
												name="profilePicture"
												size="scale4800"
												src={user.picture}
											/>
											<div className={css({ paddingTop: "10px" })}>
												<Button
													onClick={() => setEditType(EDIT_TYPES.profilePicture)}
													startEnhancer={() => <PictureIcon size={20} />}
													size={BUTTON_SIZE.compact}
												>
													Edit Profile Picture
												</Button>
											</div>
										</div>
									</LabelControl>
								</Cell>
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
										<LabelControl
											label="Hourly Rate"
											startEnhancer={() => <HourlyRateIcon size={20} />}
											endEnhancer={() => (
												<div
													className={css({
														display: "flex",
														alignItems: "center"
													})}
												>
													<span className={css({ marginRight: "10px" })}>
														/hour
													</span>
													<EditEnhancer
														onClick={() => setEditType(EDIT_TYPES.hourlyRate)}
													/>
												</div>
											)}
											caption={() => (
												<FeeCalculator hourlyRate={user.hourlyRate} />
											)}
										>
											<Paragraph margin="0">{user.hourlyRate}</Paragraph>
										</LabelControl>
									</div>
								</Cell>
								<Cell span={12}>
									<LabelControl
										label="What will you be offering your callers?"
										startEnhancer={() => <PurposeIcon size={20} />}
										endEnhancer={() => (
											<EditEnhancer
												onClick={() => setEditType(EDIT_TYPES.purpose)}
											/>
										)}
									>
										<Paragraph margin="0">{user.purpose}</Paragraph>
									</LabelControl>
								</Cell>
								<Cell span={12}>
									<LabelControl
										label="What message would you like to leave for your page visitors?"
										endEnhancer={() => (
											<EditEnhancer
												onClick={() => setEditType(EDIT_TYPES.messageBroadcast)}
											/>
										)}
									>
										<Paragraph
											margin="0"
											dangerouslySetInnerHTML={{
												__html: nl2br(user.messageBroadcast)
											}}
										/>
									</LabelControl>
								</Cell>
							</Grid>
						)}
					</div>
				)}
			</ScreenContainer>
			<EditModal isOpen={!isEmpty(editType)} {...editModalProps}>
				{EditModalField ? <EditModalField /> : <div />}
			</EditModal>
		</Layout>
	);
};

export default Profile;
