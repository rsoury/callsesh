import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Button,
	KIND as BUTTON_KIND,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import ChevronLeft from "baseui/icon/chevron-left";
import { H1 as Heading } from "baseui/typography";

import Link from "@/components/Link";
import UppercaseLabel from "@/components/UppercaseLabel";

const SettingsHeader = ({ title }) => {
	const [, theme] = useStyletron();

	return (
		<Grid>
			<Cell span={12}>
				{document.referrer
					.replace(window.location.origin, "")
					.indexOf("/u/") === 0 && (
					<Link href={document.referrer} button>
						<Button
							startEnhancer={() => <ChevronLeft size={22} />}
							kind={BUTTON_KIND.secondary}
							size={BUTTON_SIZE.compact}
							overrides={{
								BaseButton: {
									marginLeft: "-20px",
									display: "none",
									[theme.mediaQuery.maxSmall]: {
										display: "block"
									}
								}
							}}
						>
							Back to User
						</Button>
					</Link>
				)}
				<UppercaseLabel style={{ marginBottom: "10px", marginTop: "20px" }}>
					Account Settings
				</UppercaseLabel>
				<Heading marginTop="0px">{title}</Heading>
			</Cell>
		</Grid>
	);
};

SettingsHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default SettingsHeader;
