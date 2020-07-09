import React from "react";
import { useStyletron } from "baseui";
import { ParagraphMedium as Paragraph } from "baseui/typography";
import nl2br from "nl2br";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import { getName } from "country-list";
import {
	MessageCircle as MessageIcon,
	User as UserIcon,
	Calendar as CalendarIcon,
	Map as MapIcon
} from "react-feather";

import Card from "@/components/Card";
import { ViewUserProps } from "@/utils/common-prop-types";

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
				paddingLeft: "0px !important",
				paddingRight: "10px",
				width: "auto !important"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px",
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
					borderBottom: `1px solid ${theme.colors.borderOpaque}`
				})}
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
