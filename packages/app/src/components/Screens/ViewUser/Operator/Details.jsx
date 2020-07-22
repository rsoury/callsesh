import React from "react";
import { useStyletron } from "baseui";
import { ParagraphMedium as Paragraph } from "baseui/typography";
import nl2br from "nl2br";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { getName } from "country-list";
import {
	MessageCircle as MessageIcon,
	Calendar as CalendarIcon,
	MapPin as MapIcon,
	User as UserIcon,
	Link as LinkIcon
} from "react-feather";
import isEmpty from "is-empty";
import startCase from "lodash/startCase";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";

import Card from "@/components/Card";
import Link from "@/components/Link";
import { ViewUserProps } from "@/utils/common-prop-types";
import { OPERATOR_LINK_TYPES } from "@/constants";

const listItemProps = {
	artworkSize: ARTWORK_SIZES.MEDIUM,
	overrides: {
		Root: {
			style: {
				backgroundColor: "transparent",
				marginTop: "0px",
				marginBottom: "10px"
			}
		},
		ArtworkContainer: {
			style: {
				paddingBottom: "0px",
				paddingLeft: "0px !important",
				paddingRight: "10px",
				width: "auto !important"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "0px",
				flexWrap: "wrap",
				borderBottomWidth: "0px"
			}
		}
	}
};

const ViewUserOperatorDetails = ({ viewUser }) => {
	const [css, theme] = useStyletron();

	const memberSince = new Intl.DateTimeFormat("en-US", {
		month: "long",
		year: "numeric"
	}).format(new Date(viewUser.createdAt));

	const { website, ...links } = viewUser.links || {};

	return (
		<div
			className={css({
				paddingRight: "10px",
				[theme.mediaQuery.maxSmall]: {
					paddingRight: "0px"
				}
			})}
		>
			<div
				className={css({
					marginBottom: "20px",
					paddingBottom: "10px",
					borderBottom: `1px solid ${theme.colors.borderOpaque}`
				})}
			>
				<ListItem artwork={() => <UserIcon size={20} />} {...listItemProps}>
					<ListItemLabel>
						<Paragraph margin="0px">{viewUser.username}</Paragraph>
					</ListItemLabel>
				</ListItem>
				<ListItem artwork={() => <CalendarIcon size={20} />} {...listItemProps}>
					<ListItemLabel>
						<Paragraph margin="0px">Joined {memberSince}</Paragraph>
					</ListItemLabel>
				</ListItem>
				<ListItem artwork={() => <MapIcon size={20} />} {...listItemProps}>
					<ListItemLabel>
						<Paragraph margin="0px">{getName(viewUser.country)}</Paragraph>
					</ListItemLabel>
				</ListItem>
				{!isEmpty(website) && (
					<ListItem artwork={() => <LinkIcon size={20} />} {...listItemProps}>
						<ListItemLabel>
							<Paragraph margin="0px">
								<Link href={website} target="_blank" standard highlight>
									{website}
								</Link>
							</Paragraph>
						</ListItemLabel>
					</ListItem>
				)}
				{!isEmpty(links) && (
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
							margin: "20px 0 0"
						})}
					>
						{Object.entries(links).map(([key, value]) => {
							const { Icon } = OPERATOR_LINK_TYPES[key];

							return (
								<Tooltip
									key={key}
									content={() => <div>{startCase(key)}</div>}
									showArrow
									placement={TOOLTIP_PLACEMENT.bottom}
								>
									<div className={css({ display: "flex", marginRight: "5px" })}>
										<Link href={value} target="_blank" button standard>
											<Button
												size={BUTTON_SIZE.compact}
												shape={BUTTON_SHAPE.round}
												kind={BUTTON_KIND.secondary}
											>
												<Icon size={20} />
											</Button>
										</Link>
									</div>
								</Tooltip>
							);
						})}
					</div>
				)}
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
								borderBottomWidth: "0px",
								borderTopWidth: "0px"
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
		</div>
	);
};

ViewUserOperatorDetails.propTypes = {
	viewUser: ViewUserProps.isRequired
};

export default ViewUserOperatorDetails;
