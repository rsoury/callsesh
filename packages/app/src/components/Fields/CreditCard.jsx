import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import Skeleton from "react-loading-skeleton";
import {
	CardElement,
	Elements,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";
import { useStyletron } from "baseui";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Button } from "baseui/button";
import { toaster } from "baseui/toast";
import { getInputContainerStyles } from "baseui/input/styled-components";
import { SIZE as INPUT_SIZE } from "baseui/input";
import { loadStripe } from "@stripe/stripe-js/pure";
import isEmpty from "is-empty";
import dynamic from "next/dynamic";
import { alerts } from "@/utils/handle-exception";

import { stripe as config } from "@/env-config";
import LabelControl from "@/components/LabelControl";

const AmexIcon = dynamic(() => import("baseui/payment-card/icons/amex.js"));
const DinersClubIcon = dynamic(() =>
	import("baseui/payment-card/icons/dinersclub.js")
);
const DiscoverIcon = dynamic(() =>
	import("baseui/payment-card/icons/discover.js")
);
const EloIcon = dynamic(() => import("baseui/payment-card/icons/elo.js"));
const GenericIcon = dynamic(() =>
	import("baseui/payment-card/icons/generic.js")
);
const JcbIcon = dynamic(() => import("baseui/payment-card/icons/jcb.js"));
const MaestroIcon = dynamic(() =>
	import("baseui/payment-card/icons/maestro.js")
);
const MastercardIcon = dynamic(() =>
	import("baseui/payment-card/icons/mastercard.js")
);
const UnionPayIcon = dynamic(() =>
	import("baseui/payment-card/icons/unionpay.js")
);
const VisaIcon = dynamic(() => import("baseui/payment-card/icons/visa.js"));

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

const Element = ({
	name,
	label,
	caption,
	billingDetails,
	field: { value },
	meta,
	form: { setFieldValue }
}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [css, theme] = useStyletron(); // eslint-disable-line
	const [isFocussed, setFocussed] = useState(false);
	const [isVerifying, setVerifying] = useState(false);

	const isLoading = !stripe;
	const isCardEmpty = isEmpty(value);

	const inputStyles = getInputContainerStyles({
		$adjoined: "none",
		$isFocused: isFocussed,
		$error: null,
		$disabled: false,
		$positive: false,
		$size: INPUT_SIZE.default,
		$theme: theme
	});

	const cardElementOptions = {
		hidePostalCode: true,
		style: {
			base: {
				backgroundColor: "transparent",
				color: inputStyles.color,
				fontFamily: inputStyles.fontFamily,
				fontWeight: inputStyles.fontWeight,
				fontSize: "16px"
			},
			invalid: {
				color: theme.colors.negative,
				":focus": {
					color: theme.colors.primary
				}
			}
		}
	};

	const addCard = useCallback(
		(event) => {
			event.preventDefault();

			if (!stripe || !elements) {
				// Stripe.js has not loaded yet. Make sure to disable
				// form submission until Stripe.js has loaded.
				return;
			}

			const cardElement = elements.getElement(CardElement);

			stripe
				.createPaymentMethod({
					type: "card",
					card: cardElement,
					billing_details: billingDetails
				})
				.then(({ error, paymentMethod }) => {
					if (error) {
						toaster.negative(error.message);
						return {};
					}

					setVerifying(true);

					console.log(paymentMethod);

					setFieldValue(name, paymentMethod);

					return paymentMethod;
				})
				.catch((error) => {
					console.error(error);
					alerts.error();
				})
				.finally(() => {
					setVerifying(false);
				});

			// Send verfication request for card before setting as value.
		},
		[elements, stripe, name]
	);

	const removeCard = useCallback(
		(event) => {
			event.preventDefault();

			setFieldValue(name, {});
		},
		[name]
	);

	return (
		<LabelControl
			label={() => label || name}
			caption={() => caption}
			error={
				meta.touched && meta.error ? () => format.message(meta.error) : null
			}
			noBg
			className={css({
				padding: "0 !important",
				pointerEvents: isVerifying ? "none" : "auto"
			})}
		>
			<FlexGrid
				flexGridColumnCount={2}
				flexGridColumnGap="scale400"
				flexGridRowGap="scale400"
				alignItems="center"
				justifyContent="center"
			>
				<FlexGridItem flex="auto">
					<div>
						{isLoading ? (
							<Skeleton height={50} />
						) : (
							<div
								className={css({
									...inputStyles,
									height: "50px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "10px 14px"
								})}
							>
								<div
									className={css({
										width: "100%"
									})}
								>
									{isCardEmpty ? (
										<CardElement
											options={cardElementOptions}
											onBlur={() => {
												setFocussed(false);
											}}
											onFocus={() => {
												setFocussed(true);
											}}
										/>
									) : (
										<div
											className={css({ display: "flex", alignItems: "center" })}
										>
											{(() => {
												const CardType = CardTypeToComponent[value.card.brand];
												return (
													<div>
														<CardType />
													</div>
												);
											})()}
											<div>{value.card.last4}</div>
											<div>
												{`${value.card.exp_month}`.padStart(2, "0")}{" "}
												{`${value.card.exp_year}`.slice(-2)}
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</FlexGridItem>
				<FlexGridItem
					flex={1}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Button
						onClick={isCardEmpty ? addCard : removeCard}
						disabled={isLoading}
						isLoading={isVerifying}
						overrides={{
							BaseButton: {
								style: {
									width: "100%",
									height: "50px"
								}
							}
						}}
					>
						{isCardEmpty ? "Add" : "Remove"} card
					</Button>
				</FlexGridItem>
			</FlexGrid>
		</LabelControl>
	);
};

Element.propTypes = {
	name: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	billingDetails: PropTypes.object,
	field: PropTypes.shape({
		value: PropTypes.object
	}),
	form: PropTypes.shape({
		setFieldValue: PropTypes.func
	})
};

Element.defaultProps = {
	label: "",
	caption: "",
	billingDetails: {},
	field: {
		value: {}
	},
	form: {
		setFieldValue() {}
	}
};

loadStripe.setLoadParameters({ advancedFraudSignals: false });

const CreditCardField = ({ name, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{(fieldProps) => (
				<Elements stripe={loadStripe(config.publicKey)}>
					<Element name={name} {...props} {...fieldProps} />
				</Elements>
			)}
		</Field>
	);
};

CreditCardField.propTypes = {
	name: PropTypes.string.isRequired
};

export default CreditCardField;
