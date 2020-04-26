/**
 * A minimalist header to be used just for a back button
 */

import React from "react";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationList as NavigationList,
	StyledNavigationItem as NavigationItem
} from "baseui/header-navigation";
import ChevronLeft from "baseui/icon/chevron-left";
import returnUserRedirect from "@/utils/return-user-redirect";

const BackHeader = () => {
	const buttonProps = {
		startEnhancer: () => <ChevronLeft />,
		kind: BUTTON_KIND.tertiary
	};

	return (
		<HeaderNavigation>
			<NavigationList $align={ALIGN.left}>
				<NavigationItem>
					<Button {...buttonProps} onClick={returnUserRedirect}>
						Back
					</Button>
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	);
};

export default BackHeader;
