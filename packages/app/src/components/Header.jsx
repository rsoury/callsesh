import React, { useState } from "react";
import { useStyletron } from "baseui";
import {
	Button,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import { Drawer, ANCHOR as DRAWER_ANCHOR } from "baseui/drawer";
import MobileMenuIcon from "baseui/icon/menu";
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationList as NavigationList,
	StyledNavigationItem as NavigationItem
} from "baseui/header-navigation";
import Link from "next/link";
import {
	CreditCard as PaymentMethodsIcon,
	Bell as NotificationsIcon,
	User as ProfileIcon
} from "react-feather";
import isEmpty from "is-empty";
import Skeleton from "react-loading-skeleton";
// import ChevronUp from "baseui/icon/chevron-up";
// import ChevronDown from "baseui/icon/chevron-down";
import * as routes from "@/routes";
import appendReturnUrl from "@/utils/append-return-url";

import Logo from "./Logo";

const Header = () => {
	const [css, theme] = useStyletron();
	const [isMobileMenuOpen, showMobileMenu] = useState(false);
	// const [isUserMenuOpen, showUserMenu] = useState(false);
	// const [user, { loading: isLoading }] = useUser();
	const user = {};
	const isLoading = false;

	let mainMenuItems = [];
	let userMenuItems = [];
	if (isLoading) {
		mainMenuItems = Object.entries({
			button1: () => <Skeleton height={45} width={100} />,
			button2: () => <Skeleton height={45} width={100} />
		});
	} else if (isEmpty(user)) {
		mainMenuItems = Object.entries({
			login: (props) => (
				<Link href={appendReturnUrl(routes.page.login, true)}>
					<Button kind={BUTTON_KIND.tertiary} {...props}>
						Log in
					</Button>
				</Link>
			),
			signup: (props) => (
				<Link href={appendReturnUrl(routes.page.signup, true)}>
					<Button {...props}>Sign up</Button>
				</Link>
			)
		});
	} else {
		userMenuItems = Object.entries({
			profile: (props) => (
				<Link href={routes.page.settings.profile}>
					<Button
						kind={BUTTON_KIND.tertiary}
						startEnhancer={() => <ProfileIcon size={20} />}
						{...props}
					>
						Profile
					</Button>
				</Link>
			),
			paymentMethods: (props) => (
				<Link href={routes.page.settings.paymentMethods}>
					<Button
						kind={BUTTON_KIND.tertiary}
						startEnhancer={() => <PaymentMethodsIcon size={20} />}
						{...props}
					>
						Payment Methods
					</Button>
				</Link>
			),
			notifications: (props) => (
				<Link href={routes.page.settings.notifications}>
					<Button
						kind={BUTTON_KIND.tertiary}
						startEnhancer={() => <NotificationsIcon size={20} />}
						{...props}
					>
						Notifications
					</Button>
				</Link>
			)
		});
	}

	return (
		<>
			<HeaderNavigation
				overrides={{
					Root: {
						style: {
							borderBottomColor: `transparent`,
							justifyContent: "space-between",
							marginBottom: "15px"
						}
					}
				}}
			>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem className={css({ margin: "0 0 0 -10px" })}>
						<Logo />
					</NavigationItem>
				</NavigationList>
				<NavigationList
					$align={ALIGN.right}
					className={css({
						[theme.mediaQuery.maxSmall]: {
							display: "none"
						},
						paddingRight: `${theme.sizing.scale400} !important`,
						paddingLeft: `${theme.sizing.scale400} !important`
					})}
				>
					{mainMenuItems.map(([key, Item]) => (
						<NavigationItem
							key={key}
							className={css({
								paddingLeft: `${theme.sizing.scale400} !important`
							})}
						>
							<Item />
						</NavigationItem>
					))}
					{!isEmpty(user) && (
						<NavigationItem
							className={css({
								paddingLeft: `${theme.sizing.scale400} !important`
							})}
						>
							<div>User</div>
						</NavigationItem>
					)}
				</NavigationList>
				<NavigationList
					$align={ALIGN.right}
					className={css({
						[theme.mediaQuery.medium]: {
							display: "none"
						}
					})}
				>
					<NavigationItem>
						<Button
							kind={BUTTON_KIND.tertiary}
							shape={BUTTON_SHAPE.round}
							onClick={() => showMobileMenu(true)}
						>
							<MobileMenuIcon size={22} />
						</Button>
					</NavigationItem>
				</NavigationList>
			</HeaderNavigation>
			<Drawer
				animate
				anchor={DRAWER_ANCHOR.right}
				isOpen={isMobileMenuOpen}
				autoFocus
				onClose={() => showMobileMenu(false)}
				overrides={{
					DrawerContainer: {
						style: {
							maxWidth: "300px"
						}
					}
				}}
			>
				{!isEmpty(user) && <div>Some user information</div>}
				{userMenuItems.map(([key, Item]) => (
					<div key={key}>
						<Item
							overrides={{
								BaseButton: {
									style: {
										width: "100%",
										justifyContent: "flex-start"
									}
								}
							}}
							onClick={() => showMobileMenu(false)}
						/>
					</div>
				))}
				{!isEmpty(userMenuItems) && !isEmpty(mainMenuItems) && (
					<div
						className={css({
							height: "2px",
							backgroundColor: theme.colors.borderOpaque,
							padding: "5px"
						})}
					/>
				)}
				{mainMenuItems.map(([key, Item]) => (
					<div key={key}>
						<Item
							overrides={{
								BaseButton: {
									style: {
										width: "100%",
										justifyContent: "flex-start"
									}
								}
							}}
							onClick={() => showMobileMenu(false)}
						/>
					</div>
				))}
			</Drawer>
		</>
	);
};

export default Header;
