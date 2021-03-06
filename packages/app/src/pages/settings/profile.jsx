/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Paragraph2 as Paragraph,
	H4 as SmallHeading,
	Label3 as Label
} from "baseui/typography";
import isEmpty from "is-empty";
import {
	Phone as PhoneIcon,
	User as UserIcon,
	DollarSign as HourlyRateIcon,
	Image as PictureIcon,
	AlignLeft as PurposeIcon,
	Users as GenderIcon,
	Calendar as CalendarIcon,
	Mail as EmailIcon
} from "react-feather";
import { Avatar } from "baseui/avatar";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import nl2br from "nl2br";
import ono from "@jsdevtools/ono";
import { toaster } from "baseui/toast";
import * as fees from "@/utils/fees";

import Layout from "@/frontend/components/Layout";
import LabelControl from "@/frontend/components/LabelControl";
import EditEnhancer from "@/frontend/components/Settings/EditEnhancer";
import EditModal from "@/frontend/components/Settings/EditModal";
import useUser from "@/frontend/hooks/use-user";
import {
	schemaProperties as generalSchemaProperties,
	genderOptions
} from "@/frontend/components/Onboarding/GeneralStep";
import {
	schemaProperties as operatorSchemaProperties,
	purposeOptions
} from "@/frontend/components/Onboarding/OperatorStep";
import validate from "@/frontend/utils/settings-validate";
import SettingsSkeleton from "@/frontend/components/Settings/Skeleton";
import * as routes from "@/routes";
import { publicUrl } from "@/env-config";
import request from "@/utils/request";
import TextField from "@/frontend/components/Fields/Text";
import MoneyField from "@/frontend/components/Fields/Money";
import SelectField from "@/frontend/components/Fields/Select";
import LinksField from "@/frontend/components/Fields/Links";
import FileUploaderField from "@/frontend/components/Fields/FileUploader";
import DateField from "@/frontend/components/Fields/Date";
import FeeCalculator from "@/frontend/components/FeeCalculator";
import isUserOperator from "@/utils/is-operator";
import handleException, { alerts } from "@/utils/handle-exception";
import ScreenContainer from "@/frontend/components/ScreenContainer";
import Header from "@/frontend/components/Settings/Header";
import { OPERATOR_LINK_TYPES } from "@/constants";

const EDIT_TYPES = {
	firstName: "firstName",
	lastName: "lastName",
	username: "username",
	email: "email",
	gender: "gender",
	dob: "dob",
	hourlyRate: "hourlyRate",
	profilePicture: "profilePicture",
	purpose: "purpose",
	messageBroadcast: "messageBroadcast",
	links: "links"
};

const fieldGridProps = {
	gridGutters: 16,
	overrides: {
		Grid: {
			style: {
				paddingTop: "0px !important",
				paddingLeft: "0px !important",
				paddingRight: "0px !important",
				paddingBottom: "0px !important",
				marginTop: "0px !important",
				marginBottom: "0px !important",
				marginRight: "-8px !important",
				marginLeft: "-8px !important"
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
							caption={`Your link will look like ${publicUrl}${routes.build.user(
								username || "..."
							)}`}
							name={EDIT_TYPES.username}
						/>
						<Label marginTop="10px">
							Changing your username will change your user link.
						</Label>
					</Cell>
				</Grid>
			)
		},
		[EDIT_TYPES.email]: {
			title: "Email",
			validate(values) {
				return validate(
					{
						[EDIT_TYPES.email]: generalSchemaProperties.email.required()
					},
					values
				);
			},
			initialValue: user.email,
			Component: (props) => (
				<Grid {...fieldGridProps}>
					<Cell span={12}>
						<TextField
							{...props}
							placeholder="your.email@provider.com"
							maxLength={250}
							name={EDIT_TYPES.email}
						/>
						<Label marginTop="10px">
							Changing your email requires email verification.
						</Label>
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
							inModal
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
		},
		[EDIT_TYPES.profilePicture]: {
			title: "Profile Picture",
			validate(values) {
				return validate(
					{
						[EDIT_TYPES.profilePicture]:
							generalSchemaProperties.profilePicture.required()
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
		}
	};
	if (isUserOperator(user)) {
		// Determine purpose initial value to be compatible with Select
		// Purpose stored as string. If option doesn't exist, purpose is "Other" with custom value
		let purposeInitialValue = {
			option: purposeOptions.find(({ label }) => label === user.purpose),
			value: ""
		};
		if (isEmpty(purposeInitialValue.option)) {
			purposeInitialValue = {
				option: purposeOptions.find(({ id }) => id === "other"),
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
							[EDIT_TYPES.hourlyRate]:
								operatorSchemaProperties.hourlyRate.required()
						},
						values
					);
				},
				initialValue: user.hourlyRate,
				Component: (props) => (
					<Grid {...fieldGridProps}>
						<Cell span={12}>
							<MoneyField
								{...props}
								label="What is your hourly rate?"
								startEnhancer={() => <HourlyRateIcon />}
								endEnhancer={() => <span>/hour</span>}
								caption={`Callers will be charged per second based on this rate. Currency is in ${user.currency}.`}
								placeholder="30"
								name={EDIT_TYPES.hourlyRate}
								calculator
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
							[EDIT_TYPES.messageBroadcast]:
								operatorSchemaProperties.messageBroadcast.required()
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
								maxLength={480}
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
			},
			[EDIT_TYPES.links]: {
				title: "Links",
				validate(values) {
					return validate(
						{
							[EDIT_TYPES.links]: operatorSchemaProperties.links
						},
						values
					);
				},
				initialValue: user.links,
				Component: (props) => (
					<Grid {...fieldGridProps}>
						<Cell span={12}>
							<LinksField
								{...props}
								name={EDIT_TYPES.links}
								label="Manage your website and social URLs"
								caption="Give a way for a callers to qualify you"
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
	const [user, isUserLoading, { setUser }] = useUser({ required: true });
	const [editType, setEditType] = useState("");

	const isPageLoading =
		isUserLoading || isEmpty(user) || !(user || {}).isRegistered;

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

					toaster.positive(`Profile settings successfully saved.`);
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
				<Header title="Profile" />
				{isPageLoading ? (
					<SettingsSkeleton />
				) : (
					<div>
						<Grid>
							<Cell span={[12, 8, 8]}>
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
							<Cell span={[12, 8, 4]}>
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
						</Grid>
						<Grid>
							<Cell span={12}>
								<div
									className={css({
										borderBottom: `1px solid ${theme.colors.borderOpaque}`,
										marginBottom: "20px"
									})}
								>
									<SmallHeading marginBottom="0px">Account</SmallHeading>
									<Paragraph marginBottom="10px" marginTop="5px">
										These settings are hidden and will never be publicy
										available.
									</Paragraph>
								</div>
							</Cell>
							<Cell span={12}>
								<LabelControl
									label="Phone Number"
									startEnhancer={() => <PhoneIcon size={20} />}
								>
									<Paragraph margin="0">{user.phoneNumber}</Paragraph>
								</LabelControl>
								<LabelControl
									label="Email"
									startEnhancer={() => <EmailIcon size={20} />}
									endEnhancer={() => (
										<EditEnhancer
											onClick={() => setEditType(EDIT_TYPES.email)}
										/>
									)}
								>
									<Paragraph margin="0">{user.email}</Paragraph>
								</LabelControl>
								<LabelControl
									label="Date of birth"
									startEnhancer={() => <CalendarIcon size={20} />}
									endEnhancer={() => (
										<EditEnhancer onClick={() => setEditType(EDIT_TYPES.dob)} />
									)}
								>
									<Paragraph margin="0">
										{isEmpty(user.dob)
											? ""
											: new Intl.DateTimeFormat("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric"
											  }).format(new Date(user.dob))}
									</Paragraph>
								</LabelControl>
							</Cell>
						</Grid>
						{isUserOperator(user) && (
							<Grid>
								<Cell span={12}>
									<div
										className={css({
											borderBottom: `1px solid ${theme.colors.borderOpaque}`,
											marginBottom: "20px"
										})}
									>
										<SmallHeading marginBottom="10px">Operator</SmallHeading>
									</div>
								</Cell>
								<Cell span={12}>
									<div
										className={css({
											padding: "0 0 10px 0",
											margin: "10px 0 20px",
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
											<Paragraph margin="0">
												{fees.format(user.hourlyRate, true)}
											</Paragraph>
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
								<Cell span={12}>
									<LabelControl
										label="Manage your website and social URLs"
										endEnhancer={() => (
											<EditEnhancer
												onClick={() => setEditType(EDIT_TYPES.links)}
											/>
										)}
									>
										<div>
											{Object.entries(user.links || {}).map(
												([linkType, linkValue]) => {
													const { Icon } = OPERATOR_LINK_TYPES[linkType];

													return (
														<LabelControl
															noBg
															startEnhancer={() => <Icon size={16} />}
															overrides={{
																ControlContainer: {
																	style: {
																		marginTop: "-10px",
																		marginBottom: "-10px",
																		marginLeft: "-10px"
																	}
																}
															}}
														>
															<Paragraph margin="0">{linkValue}</Paragraph>
														</LabelControl>
													);
												}
											)}
										</div>
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
