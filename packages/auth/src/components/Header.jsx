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
import { StyledLink } from "baseui/link";
import ChevronLeft from "baseui/icon/chevron-left";

const returnUrl = "#";

const Header = () => (
	<header>
		<HeaderNavigation
			overrides={{
				Root: {
					style: { borderBottomColor: `transparent` }
				}
			}}
		>
			<NavigationList $align={ALIGN.left}>
				<NavigationItem>
					<StyledLink
						$as={Button}
						kind={BUTTON_KIND.tertiary}
						startEnhancer={() => <ChevronLeft size={24} />}
						href={returnUrl}
					>
						Back
					</StyledLink>
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	</header>
);

export default Header;
