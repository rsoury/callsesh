/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState, useEffect, useCallback } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H5 as SmallHeading, Label2 as Label } from "baseui/typography";
import isEmpty from "is-empty";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { toaster } from "baseui/toast";
import {
	Trash2 as DeleteIcon,
	AlertCircle as AlertIcon,
	CheckCircle as DefaultCardIcon
} from "react-feather";
import { KIND as NOTIFICATION_KIND } from "baseui/notification";
import Skeleton from "react-loading-skeleton";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import { Block } from "baseui/block";

import PaymentCardIcon from "@/components/PaymentCardIcon";
import Notice from "@/components/Notice";
import Layout from "@/components/Layout";
import useUser from "@/hooks/use-user";
import SettingsSkeleton from "@/components/Settings/Skeleton";
import * as routes from "@/routes";
import request from "@/utils/request";
import CreditCard from "@/components/CreditCard";
import handleException, { alerts } from "@/utils/handle-exception";
import ScreenContainer from "@/components/ScreenContainer";
import Header from "@/components/Settings/Header";

const Wallet = () => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading] = useUser({ required: true });
	const [cards, setCards] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const isPageLoading =
		isUserLoading || isEmpty(user) || !(user || {}).isRegistered;

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
				request
					.delete(routes.build.card(id))
					.then(() => {
						toaster.positive(`Successfully removed payment method.`);
					})
					.catch((e) => {
						alerts.error();
						throw e;
					});
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
			request
				.patch(routes.build.card(id))
				.then(() => {
					toaster.positive(`Successfully set new default payment method.`);
				})
				.catch((e) => {
					alerts.error();
					throw e;
				});
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

		setCards((existingCards) => [
			{
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
			},
			...existingCards.map((c) => {
				c.isDefault = false;
				return c;
			})
		]);
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
			<ScreenContainer id="callsesh-wallet-settings">
				<Header title="Wallet" />
				{isPageLoading ? (
					<SettingsSkeleton />
				) : (
					<Grid>
						<Cell span={12}>
							<SmallHeading marginTop="0px">
								Configure your payment methods
							</SmallHeading>
							{showDefaultError && (
								<Notice
									kind={NOTIFICATION_KIND.negative}
									overrides={{
										Body: {
											style: {
												marginBottom: "40px"
											}
										}
									}}
									icon={AlertIcon}
								>
									No default payment method set. Add a new payment method, or
									set a default payment method to continue using Callsesh.
								</Notice>
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
												return (
													<ListItem
														key={id}
														artwork={(props) => (
															<PaymentCardIcon type={brand} {...props} />
														)}
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
																<Block>
																	<Label>{last4.padStart(16, "*")}</Label>
																</Block>
																<Block marginLeft="10px">
																	<Label>
																		{expMonth}/{expYear}
																	</Label>
																</Block>
																{isDefault && (
																	<Block
																		marginLeft="10px"
																		display="flex"
																		alignItems="center"
																	>
																		<DefaultCardIcon
																			size={20}
																			className={css({
																				strokeWidth: "3px",
																				color: theme.colors.positive
																			})}
																		/>
																	</Block>
																)}
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
								<CreditCard
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
			</ScreenContainer>
		</Layout>
	);
};

export default Wallet;
