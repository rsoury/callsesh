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
import ono from "@jsdevtools/ono";

import { api as apiRoutes } from "@/routes";
import handleException, { alerts } from "@/utils/handle-exception";
import { stripe as config } from "@/env-config";
import LabelControl from "@/components/LabelControl";
import request from "@/utils/request";

export const CreditCardElement = ({
	label,
	caption,
	billingDetails,
	value,
	error,
	noRemove,
	onAdd,
	onRemove
}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [css, theme] = useStyletron(); // eslint-disable-line
	const [isFocussed, setFocussed] = useState(false);
	const [isVerifying, setVerifying] = useState(false);

	const isLoading = !stripe;
	const isCardEmpty = noRemove || isEmpty(value);

	const inputStyles = getInputContainerStyles({
		$adjoined: "none",
		$isFocused: isFocussed,
		$error: null,
		$disabled: false,
		$positive: !isCardEmpty,
		$size: INPUT_SIZE.default,
		$theme: theme
	});

	const cardElementOptions = {
		disabled: isVerifying || !isCardEmpty,
		// hidePostalCode: true,
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
				.then(({ error: err, paymentMethod }) => {
					if (err) {
						throw err;
					}
					if (isEmpty(paymentMethod)) {
						toaster.negative(`Could not create payment method.`);
						return {};
					}

					return paymentMethod;
				})
				.then((paymentMethod) => {
					// Send verfication request for card before setting as value.
					return request
						.post(apiRoutes.cards, { paymentMethod })
						.then(({ data }) => ({ response: data, paymentMethod }));
				})
				.then(({ response: { verified = false }, paymentMethod }) => {
					if (verified) {
						onAdd(paymentMethod);
						toaster.positive(`Card successfully verified and added.`);
						if (noRemove) {
							cardElement.clear();
						}
					} else {
						toaster.negative(
							`Card could be verified. Please check the submitted card and try again.`
						);
					}
				})
				.catch((err) => {
					console.log(err);
					console.log(err.code);
					console.log(err.type);
					console.log(err.message);
					if (err.code === "card_declined" || err.type === "validation_error") {
						toaster.negative(
							`${err.message} Please try a different card or check your submission.`
						);
						return;
					}
					handleException(err);
					alerts.error();
				})
				.finally(() => {
					setVerifying(false);
				});
		},
		[noRemove, elements, stripe]
	);

	const removeCard = useCallback(
		(event) => {
			event.preventDefault();

			const cardElement = elements.getElement(CardElement);

			cardElement.clear();

			if (!isEmpty(value)) {
				const params = { id: value.id };
				request.delete(apiRoutes.cards, { params }).catch((err) => {
					handleException(ono(err, params));
				});
			}

			onRemove();
		},
		[value, elements]
	);

	return (
		<LabelControl
			label={label ? () => label : null}
			caption={() => caption}
			error={error}
			noBg
			style={{
				padding: "0 !important",
				pointerEvents: isVerifying ? "none" : "auto"
			}}
		>
			<FlexGrid
				flexGridColumnCount={2}
				flexGridColumnGap="scale400"
				flexGridRowGap="scale400"
				alignItems="center"
				justifyContent="center"
			>
				<FlexGridItem
					className={css({
						flexGrow: "6 !important",
						[theme.mediaQuery.maxSmall]: {
							width: "100% !important",
							margin: "0 0 10px 0 !important"
						}
					})}
				>
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
					className={css({
						width: "auto !important",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					})}
				>
					<Button
						onClick={isCardEmpty ? addCard : removeCard}
						disabled={isLoading}
						isLoading={isVerifying}
						overrides={{
							BaseButton: {
								style: {
									width: "100%",
									height: "50px",
									minWidth: "120px"
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

CreditCardElement.propTypes = {
	label: PropTypes.string,
	caption: PropTypes.string,
	billingDetails: PropTypes.object,
	value: PropTypes.object,
	error: PropTypes.string,
	noRemove: PropTypes.bool,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func
};

CreditCardElement.defaultProps = {
	label: "",
	caption: "",
	billingDetails: {},
	value: {},
	error: null,
	noRemove: false,
	onAdd() {},
	onRemove() {}
};

loadStripe.setLoadParameters({ advancedFraudSignals: false });

export const CreditCardInput = (props) => (
	<Elements stripe={loadStripe(config.publicKey)}>
		<CreditCardElement {...props} />
	</Elements>
);

const CreditCardField = ({ name, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)}>
			{({ field: { value }, meta, form: { setFieldValue } }) => (
				<CreditCardInput
					{...props}
					value={value}
					error={
						meta.touched && meta.error ? () => format.message(meta.error) : null
					}
					onAdd={(paymentMethod) => setFieldValue(name, paymentMethod)}
					onRemove={() => setFieldValue(name, {})}
				/>
			)}
		</Field>
	);
};

CreditCardField.propTypes = {
	name: PropTypes.string.isRequired
};

export default CreditCardField;
