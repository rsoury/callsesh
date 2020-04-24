/**
 * A minimalist header to be used just for a back button
 */

import React from "react";
import Link from "next/link";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationList as NavigationList,
	StyledNavigationItem as NavigationItem
} from "baseui/header-navigation";
import ChevronLeft from "baseui/icon/chevron-left";
import { useRouter } from "next/router";
import routes from "@/routes";

const BackHeader = () => {
	const router = useRouter();

	const buttonProps = {
		startEnhancer: () => <ChevronLeft />,
		kind: BUTTON_KIND.tertiary
	};

	return (
		<HeaderNavigation>
			<NavigationList $align={ALIGN.left}>
				<NavigationItem>
					{window.history.length < 2 ? (
						<Link href={routes.index}>
							<Button {...buttonProps}>Back</Button>
						</Link>
					) : (
						<Button {...buttonProps} onClick={() => router.back()}>
							Back
						</Button>
					)}
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	);
};

export default BackHeader;
