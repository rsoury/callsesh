/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState, useEffect, useCallback } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H1 as Heading,
	H5 as SmallHeading,
	Label1 as Label
} from "baseui/typography";
import isEmpty from "is-empty";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
import ono from "@jsdevtools/ono";
import { toaster } from "baseui/toast";
import { Trash2 as DeleteIcon, AlertCircle as AlertIcon } from "react-feather";
import { Notification, KIND as NOTIFICATION_KIND } from "baseui/notification";
import Skeleton from "react-loading-skeleton";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";

import AmexIcon from "baseui/payment-card/icons/amex";
import DinersClubIcon from "baseui/payment-card/icons/dinersclub";
import DiscoverIcon from "baseui/payment-card/icons/discover";
import EloIcon from "baseui/payment-card/icons/elo";
import GenericIcon from "baseui/payment-card/icons/generic";
import JcbIcon from "baseui/payment-card/icons/jcb";
import MaestroIcon from "baseui/payment-card/icons/maestro";
import MastercardIcon from "baseui/payment-card/icons/mastercard";
import UnionPayIcon from "baseui/payment-card/icons/unionpay";
import VisaIcon from "baseui/payment-card/icons/visa";

import Layout from "@/components/Layout";
import UppercaseLabel from "@/components/UppercaseLabel";
import useUser from "@/hooks/use-user";
import SettingsSkeleton from "@/components/Settings/Skeleton";
import * as routes from "@/routes";
import request from "@/utils/request";
import { CreditCardInput } from "@/components/Fields/CreditCard";
import handleException, { alerts } from "@/utils/handle-exception";

const CardTypeToComponent = {
	visa: VisaIcon,
	mastercard: MastercardIcon,
	"american-express": AmexIcon,
	"diners-club": DinersClubIcon,
	discover: DiscoverIcon,
	jcb: JcbIcon,
	unionpay: UnionPayIcon,
	maestro: MaestroIcon,
	elo: EloIcon,
	generic: GenericIcon
};

const Wallet = () => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading] = useUser();
	const [cards, setCards] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const listItemProps = {
		artworkSize: ARTWORK_SIZES.LARGE,
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
					paddingBottom: "10px"
				}
			},
			Content: {
				style: {
					height: "auto",
					paddingBottom: "10px",
					flexWrap: "wrap"
				}
			},
			EndEnhancerContainer: {
				style: {
					[theme.mediaQuery.maxSmall]: {
						width: "100%",
						margin: "10px 0 0 -10px"
					}
				}
			}
		}
	};

	// Whether to alert that a default payment method is required.
	const showDefaultError =
		!isLoading &&
		cards.reduce((result, card) => {
			if (card.isDefault) {
				return false;
			}
			return result;
		}, true);

	// Remove card
	const removeCard = useCallback(
		(id) => {
			// eslint-disable-next-line
			const resp = window.confirm(`Are you sure you want to remove this card?`);
			if (resp) {
				setCards(cards.filter((card) => card.id !== id));
				const params = { id };
				request
					.delete(routes.api.cards, { params })
					.then(() => {
						toaster.positive(`Successfully removed payment method.`);
					})
					.catch((err) => ono(err, params));
			}
		},
		[cards]
	);

	// Set card as default
	const setDefaultCard = useCallback(
		(id) => {
			const newCards = [...cards].map((card) => {
				card.isDefault = card.id === id;
				return card;
			});
			setCards(newCards);
			const params = { id };
			request
				.patch(routes.api.cards, params)
				.then(() => {
					toaster.positive(`Successfully set new default payment method.`);
				})
				.catch((err) => ono(err, params));
		},
		[cards]
	);

	// Handle card submission
	const onAddCard = useCallback((paymentMethod) => {
		const {
			id,
			billing_details: billingDetails,
			card,
			created
		} = paymentMethod;
		// Remove default from existing cards
		const newCards = [...cards].map((c) => {
			c.isDefault = false;
			return c;
		});
		// Make new card default
		newCards.unshift({
			id,
			billingDetails,
			brand: card.brand,
			checks: card.check,
			country: card.country,
			expMonth: card.exp_month,
			expYear: card.exp_year,
			last4: card.last4,
			created,
			isDefault: true
		});

		setCards(newCards);
	}, []);

	// In mount, load in cards
	useEffect(() => {
		// Load cards
		setLoading(true);
		request
			.get(routes.api.cards)
			.then(({ data }) => data)
			.then(({ cards: responseCards }) => {
				setCards(responseCards);
			})
			.catch((err) => {
				handleException(err);
				toaster.negative(`Could not load cards.`);
				alerts.error();
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Layout>
			<div
				id="callsesh-wallet-settings"
				className={css({
					width: "100%",
					maxWidth: "1000px",
					margin: "0 auto",
					padding: "0 20px 50px 20px",
					[theme.mediaQuery.maxSmall]: {
						paddingLeft: "0px",
						paddingRight: "0px"
					}
				})}
			>
				<Grid>
					<Cell span={12}>
						<UppercaseLabel style={{ marginBottom: "10px", marginTop: "20px" }}>
							Account Settings
						</UppercaseLabel>
						<Heading marginTop="0px">Wallet</Heading>
					</Cell>
				</Grid>
				{isUserLoading || isEmpty(user) ? (
					<SettingsSkeleton />
				) : (
					<Grid>
						<Cell span={12}>
							<SmallHeading marginTop="0px">
								Configure your payment methods
							</SmallHeading>
							{showDefaultError && (
								<Notification
									kind={NOTIFICATION_KIND.negative}
									overrides={{
										Body: {
											style: {
												width: "100%",
												marginBottom: "40px"
											}
										}
									}}
								>
									{() => (
										<div
											className={css({ display: "flex", alignItems: "center" })}
										>
											<div className={css({ marginRight: "10px" })}>
												<AlertIcon size={20} />
											</div>
											<Label>
												No default payment method set. Add a new payment method,
												or set a default payment method to continue using
												Callsesh.
											</Label>
										</div>
									)}
								</Notification>
							)}
							<div className={css({ marginBottom: "10px" })}>
								{isLoading ? (
									<ListItem
										artwork={() => <Skeleton height={22} width={30} />}
										{...listItemProps}
									>
										<ListItemLabel>
											<Skeleton height={40} width={250} />
										</ListItemLabel>
									</ListItem>
								) : (
									<div>
										{cards.map(
											({ id, brand, last4, expMonth, expYear, isDefault }) => {
												const CardIcon =
													CardTypeToComponent[brand] ||
													CardTypeToComponent.generic;

												return (
													<ListItem
														artwork={CardIcon}
														{...listItemProps}
														endEnhancer={() => (
															<div
																className={css({
																	display: "flex",
																	alignItems: "center"
																})}
															>
																<div className={css({ marginLeft: "10px" })}>
																	<Button
																		size={BUTTON_SIZE.mini}
																		kind={BUTTON_KIND.secondary}
																		startEnhancer={() => (
																			<DeleteIcon size={16} />
																		)}
																		onClick={() => removeCard(id)}
																	>
																		Remove
																	</Button>
																</div>
																{!isDefault && (
																	<div className={css({ marginLeft: "10px" })}>
																		<Button
																			size={BUTTON_SIZE.mini}
																			onClick={() => setDefaultCard(id)}
																		>
																			Set as Default
																		</Button>
																	</div>
																)}
															</div>
														)}
													>
														<ListItemLabel>
															<div
																className={css({
																	display: "flex",
																	alignItems: "center"
																})}
															>
																<div>
																	<Label>{last4}</Label>
																</div>
																<div
																	className={css({
																		marginLeft: "20px"
																	})}
																>
																	<Label>
																		{expMonth}/{expYear}
																	</Label>
																</div>
															</div>
														</ListItemLabel>
													</ListItem>
												);
											}
										)}
									</div>
								)}
							</div>
						</Cell>
						<Cell span={12}>
							<div
								className={css({
									padding: "20px 0",
									margin: "20px 0 0",
									borderTopWidth: "1px",
									borderTopStyle: "solid",
									borderTopColor: theme.colors.borderOpaque
								})}
							>
								<CreditCardInput
									label="Add a card"
									caption="Payments are powered by Stripe and we do not store sensitive payment information on our servers."
									billingDetails={{
										name: `${user.givenName} ${user.familyName}`
									}}
									onAdd={onAddCard}
									noRemove
								/>
							</div>
						</Cell>
					</Grid>
				)}
			</div>
		</Layout>
	);
};

export default Wallet;
