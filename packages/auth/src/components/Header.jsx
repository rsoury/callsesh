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

import { authConfig } from "@/env-config";

const returnUrl = authConfig.callbackURL;

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
						{...(() =>
							returnUrl
								? {
										href: returnUrl
								  }
								: {
										onClick() {
											window.history.back();
										}
								  })()}
					>
						Back
					</StyledLink>
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	</header>
);

export default Header;
