import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Label1 as Label,
	ParagraphMedium as Paragraph,
	ParagraphXSmall
} from "baseui/typography";
import nl2br from "nl2br";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import { getName } from "country-list";
import { FixedBottom } from "react-fixed-bottom";
import { Card as BaseCard, StyledBody, StyledAction } from "baseui/card";
import ArrowRight from "baseui/icon/arrow-right";
import { Button } from "baseui/button";
import {
	MessageCircle as MessageIcon,
	PhoneCall as PhoneIcon,
	User as UserIcon,
	Calendar as CalendarIcon,
	Map as MapIcon,
	Lock as LockIcon
} from "react-feather";
import isEmpty from "is-empty";

import useUser from "@/hooks/use-user";
import Card from "@/components/Card";
import Link from "@/components/Link";
import Highlight from "@/components/Highlight";
import { ViewUserProps } from "@/utils/common-prop-types";
import * as routes from "@/routes";

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
				paddingLeft: "0px !important"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px",
				flexWrap: "wrap"
			}
		}
	}
};

const ViewUserOperator = ({ viewUser, onStart }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	const isAuthenticated = !isEmpty(user);
	const isSameUser = isAuthenticated
		? user.username === viewUser.username
		: false;

	const minuteRate = (parseFloat(viewUser.hourlyRate) / 60).toFixed(2);
	const memberSince = new Intl.DateTimeFormat("en-US", {
		month: "long",
		year: "numeric"
	}).format(new Date(viewUser.createdAt));

	return (
		<Grid gridGutters="0px">
			<Cell span={[12, 5, 7]}>
				<div className={css({ marginBottom: "20px" })}>
					<Card
						title="About me"
						icon={UserIcon}
						overrides={{
							Root: {
								style: {
									borderRightWidth: "0px",
									borderLeftWidth: "0px",
									borderBottomWidth: "0px"
								}
							}
						}}
					>
						<ListItem artwork={CalendarIcon} {...listItemProps}>
							<ListItemLabel>
								<Paragraph margin="0px">Member since {memberSince}</Paragraph>
							</ListItemLabel>
						</ListItem>
						<ListItem artwork={MapIcon} {...listItemProps}>
							<ListItemLabel>
								<Paragraph margin="0px">
									Based in {getName(viewUser.country)}
								</Paragraph>
							</ListItemLabel>
						</ListItem>
					</Card>
				</div>
				<div>
					<Card
						title="A message from me"
						icon={MessageIcon}
						overrides={{
							Root: {
								style: {
									borderRightWidth: "0px",
									borderLeftWidth: "0px",
									borderBottomWidth: "0px"
								}
							}
						}}
					>
						<Paragraph
							margin="0"
							dangerouslySetInnerHTML={{
								__html: nl2br(viewUser.messageBroadcast)
							}}
						/>
					</Card>
				</div>
			</Cell>
			<Cell span={[12, 3, 5]}>
				<FixedBottom>
					<div
						className={css({
							position: "relative !important",
							[theme.mediaQuery.maxSmall]: {
								position: "fixed !important",
								left: "0",
								right: "0",
								bottom: "0",
								zIndex: "100",
								borderRight: "0",
								borderBottom: "0",
								borderLeft: "0",
								backgroundColor: "#fff"
							}
						})}
					>
						<BaseCard
							overrides={{
								Root: {
									style: {
										[theme.mediaQuery.maxSmall]: {
											borderRightWidth: "0px",
											borderLeftWidth: "0px",
											borderBottomWidth: "0px"
										}
									}
								}
							}}
						>
							<StyledBody>
								{viewUser.isLive ? (
									<div>
										<Label>
											<Highlight>{viewUser.givenName} is live!</Highlight>
										</Label>
									</div>
								) : (
									<div>
										<Label>
											<strong>{viewUser.givenName} is not available.</strong>
										</Label>
										<ParagraphXSmall marginTop="5px" marginBottom="0px">
											Check back another time or follow their socials for an
											announcement on when they will be live.
										</ParagraphXSmall>
									</div>
								)}
							</StyledBody>
							<StyledAction>
								{!isAuthenticated && (
									<Link href={routes.page.signup} button>
										<Button
											startEnhancer={() => <LockIcon size={20} />}
											endEnhancer={() => <ArrowRight size={20} />}
											overrides={{
												BaseButton: {
													style: {
														width: "100%"
													}
												}
											}}
										>
											Sign up to call {viewUser.givenName}
										</Button>
									</Link>
								)}
								{isAuthenticated && viewUser.isLive && (
									<div>
										<Button
											startEnhancer={() => <PhoneIcon size={20} />}
											disabled={isSameUser}
											onClick={onStart}
											overrides={{
												BaseButton: {
													style: {
														width: "100%"
													}
												}
											}}
										>
											Call {viewUser.givenName} for ${minuteRate}
											/minute
										</Button>
										<ParagraphXSmall marginTop="5px" marginBottom="0px">
											A service fee of $2.50 will be charged upon initiating the
											call. Currency is in {viewUser.currency}.
										</ParagraphXSmall>
									</div>
								)}
							</StyledAction>
						</BaseCard>
					</div>
				</FixedBottom>
			</Cell>
		</Grid>
	);
};

ViewUserOperator.propTypes = {
	viewUser: ViewUserProps.isRequired,
	onStart: PropTypes.func
};

ViewUserOperator.defaultProps = {
	onStart() {}
};

export default ViewUserOperator;
