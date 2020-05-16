/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState, useEffect, useCallback } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H1 as Heading,
	H4 as SmallHeading,
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
import { Trash2 as DeleteIcon } from "react-feather";

import Layout from "@/components/Layout";
import UppercaseLabel from "@/components/UppercaseLabel";
import useUser from "@/hooks/use-user";
import SettingsSkeleton from "@/components/Settings/Skeleton";
import * as routes from "@/routes";
import request from "@/utils/request";
import { CreditCardInput } from "@/components/Fields/CreditCard";
import handleException, { alerts } from "@/utils/handle-exception";

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

	// Remove card
	const removeCard = useCallback((id) => {
		// eslint-disable-next-line
		const resp = window.confirm(`Are you sure you want to remove this card?`);
		if (resp) {
			setCards(cards.filter((card) => card.id !== id));
			const params = { id };
			request.delete(routes.api.cards, params).catch((err) => ono(err, params));
		}
	}, []);

	// Set card as default
	const setDefaultCard = useCallback((id) => {
		setCards(
			cards.map((card) => {
				card.isDefault = card === id;
				return card;
			})
		);
		const params = { id };
		request.patch(routes.api.cards, params).catch((err) => ono(err, params));
	}, []);

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
			.then((responseCards) => {
				console.log(responseCards);
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
					<div>
						<SmallHeading>Configure your payment methods</SmallHeading>
						{isLoading ? (
							<div>Loading ...</div>
						) : (
							<div>
								{cards.map(
									({ id, brand, last4, expMonth, expYear, isDefault }) => {
										const CardIcon =
											CardTypeToComponent[brand] || CardTypeToComponent.generic;

										return (
											<div
												key={id}
												className={css({
													display: "flex",
													alignItems: "center",
													padding: "10px",
													marginBottom: "10px",
													backgroundColor: `rgb(250, 250, 250)`,
													borderRadius: "4px"
												})}
											>
												<div>
													<CardIcon />
												</div>
												<div className={css({ marginLeft: "5px" })}>
													<Label>{last4}</Label>
												</div>
												<div className={css({ marginLeft: "5px" })}>
													<Label>
														{expMonth}/{expYear}
													</Label>
												</div>
												<div className={css({ marginLeft: "5px" })}>
													<Button
														size={BUTTON_SIZE.mini}
														kind={BUTTON_KIND.secondary}
														startEnhancer={() => <DeleteIcon size={16} />}
														onClick={() => removeCard(id)}
													>
														Remove
													</Button>
												</div>
												{!isDefault && (
													<div className={css({ marginLeft: "5px" })}>
														<Button
															size={BUTTON_SIZE.mini}
															startEnhancer={() => <DeleteIcon size={16} />}
															onClick={() => setDefaultCard(id)}
														>
															Set as Default
														</Button>
													</div>
												)}
											</div>
										);
									}
								)}
							</div>
						)}
						<div>
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
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Wallet;
