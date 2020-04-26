import React, { useState } from "react";
import PropTypes from "prop-types";
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
import routes from "@/routes";

const logoUrl = "/logo/wagecall-logo@300.png";

const Header = ({ isAuthenticated }) => {
	const [css, theme] = useStyletron();
	const [mobileMenu, showMobileMenu] = useState(false);

	let menuItems = [];
	if (isAuthenticated) {
		menuItems = Object.entries({
			profile: (props) => (
				<Link href={routes.settings.profile}>
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
				<Link href={routes.settings.paymentMethods}>
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
				<Link href={routes.settings.notifications}>
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
	} else {
		menuItems = Object.entries({
			login: (props) => (
				<Link href={routes.login}>
					<Button kind={BUTTON_KIND.tertiary} {...props}>
						Log in
					</Button>
				</Link>
			),
			signup: (props) => (
				<Link href={routes.signup}>
					<Button {...props}>Sign up</Button>
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
						<div
							className={css({
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							})}
						>
							<img
								src={logoUrl}
								alt="Wagecall logo"
								title="Wagecall"
								className={css({ width: "100%", maxWidth: "140px" })}
							/>
						</div>
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
					{menuItems.map(([key, Item]) => (
						<NavigationItem
							key={key}
							className={css({
								paddingLeft: `${theme.sizing.scale400} !important`
							})}
						>
							<Item />
						</NavigationItem>
					))}
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
				isOpen={mobileMenu}
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
				{menuItems.map(([key, Item]) => (
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

Header.propTypes = {
	isAuthenticated: PropTypes.bool
};

Header.defaultProps = {
	isAuthenticated: false
};

export default Header;
