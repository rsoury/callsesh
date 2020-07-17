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
import { useUserRouteReferrer } from "@/hooks/use-route-referrer";
import { ChildrenProps } from "@/utils/common-prop-types";

const SettingsHeader = ({ title, children }) => {
	const [css] = useStyletron();
	const [userRouteReferrer] = useUserRouteReferrer();

	return (
		<Grid>
			<Cell span={12}>
				{userRouteReferrer && (
					<Link
						href={userRouteReferrer}
						button
						style={{
							marginLeft: "-20px !important"
						}}
					>
						<Button
							startEnhancer={() => <ChevronLeft size={22} />}
							kind={BUTTON_KIND.secondary}
							size={BUTTON_SIZE.compact}
						>
							Back to User
						</Button>
					</Link>
				)}
				<UppercaseLabel style={{ marginBottom: "10px", marginTop: "20px" }}>
					Account Settings
				</UppercaseLabel>
				<Heading marginTop="0px" marginBottom="0px">
					{title}
				</Heading>
				<div className={css({ marginBottom: "40px" })}>{children}</div>
			</Cell>
		</Grid>
	);
};

SettingsHeader.propTypes = {
	title: PropTypes.string.isRequired,
	children: ChildrenProps
};

SettingsHeader.defaultProps = {
	children: null
};

export default SettingsHeader;
