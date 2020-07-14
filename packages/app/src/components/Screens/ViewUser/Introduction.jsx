import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { Avatar } from "baseui/avatar";
import { H1 as Heading } from "baseui/typography";

import Highlight from "@/components/Highlight";
import { ViewUserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import * as fees from "@/utils/fees";

const ViewUserIntroduction = ({ viewUser }) => {
	const [css, theme] = useStyletron();

	let ownerPronoun = "They're";
	if (viewUser.gender.toLowerCase() === "male") {
		ownerPronoun = "He's";
	} else if (viewUser.gender.toLowerCase() === "female") {
		ownerPronoun = "She's";
	}

	const isOperator = isUserOperator(viewUser);

	return (
		<Grid>
			<Cell span={12}>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						marginTop: "10px",
						marginBottom: "10px",
						[theme.mediaQuery.maxSmall]: {
							flexDirection: "column",
							alignItems: "flex-start",
							marginBottom: "50px"
						}
					})}
				>
					<div
						className={css({
							marginTop: "10px",
							marginBottom: "10px",
							marginRight: "30px"
						})}
					>
						<Avatar
							name={viewUser.nickname}
							size="scale4800"
							src={viewUser.picture}
						/>
					</div>
					<div>
						<Heading marginTop="0px" marginBottom="10px">
							<strong className={css({ fontWeight: "900" })}>
								Meet {viewUser.givenName}!
							</strong>
							<br />
							<span
								className={css({
									...theme.typography.HeadingXLarge
								})}
							>
								{ownerPronoun}{" "}
								{isOperator ? (
									<span>
										offering <Highlight>{viewUser.purpose}</Highlight> over a
										call session for{" "}
										<Highlight noBreak>
											{fees.getMinuteRate(viewUser.hourlyRate)}/minute
										</Highlight>
									</span>
								) : (
									<span>
										making calls on Callsesh.
										<br />
										You can too!
									</span>
								)}
							</span>
						</Heading>
					</div>
				</div>
			</Cell>
		</Grid>
	);
};

ViewUserIntroduction.propTypes = {
	viewUser: ViewUserProps.isRequired
};

export default ViewUserIntroduction;
