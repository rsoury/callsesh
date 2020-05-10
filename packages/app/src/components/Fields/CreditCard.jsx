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
import { alerts } from "@/utils/handle-exception";

import { stripe as config } from "@/env-config";
import LabelControl from "@/components/LabelControl";

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
		disabled: isVerifying || !isCardEmpty,
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

			setVerifying(true);

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

			const cardElement = elements.getElement(CardElement);

			cardElement.clear();

			setFieldValue(name, {});
		},
		[elements, name]
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
					<div
						className={css({ pointerEvents: isCardEmpty ? "auto" : "none" })} // disable input if card is not empty
					>
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
									<CardElement
										options={cardElementOptions}
										onBlur={() => {
											setFocussed(false);
										}}
										onFocus={() => {
											setFocussed(true);
										}}
									/>
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
