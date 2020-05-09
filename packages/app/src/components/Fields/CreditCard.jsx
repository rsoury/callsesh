import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import Skeleton from "react-loading-skeleton";
import { Block } from "baseui/block";
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
import { stripe as config } from "@/env-config";

import LabelControl from "@/components/LabelControl";

const Element = ({ name, label, caption, meta, form: { setFieldValue } }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [css, theme] = useStyletron(); // eslint-disable-line
	const cardRef = React.createRef();

	const isLoading = !stripe;

	const inputStyles = getInputContainerStyles({
		$adjoined: "none",
		$isFocused: false,
		$error: null,
		$disabled: false,
		$positive: false,
		$size: INPUT_SIZE.default,
		$theme: theme
	});

	console.log(inputStyles);

	const addCard = async (event) => {
		event.preventDefault();

		const cardElement = elements.getElement(CardElement);
		console.log(elements);
		console.log(cardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement
		});
		if (error) {
			console.log(error);
			toaster.negative(error);
			return;
		}

		setFieldValue(name, paymentMethod);
	};

	return (
		<LabelControl
			label={() => label || name}
			caption={() => caption}
			error={
				meta.touched && meta.error ? () => format.message(meta.error) : null
			}
			noBg
			className={css({ padding: "0 !important" })}
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
							<Block
								$as={CardElement}
								ref={cardRef}
								className={css(inputStyles)}
							/>
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
						onClick={addCard}
						disabled={isLoading}
						overrides={{
							BaseButton: {
								style: {
									width: "100%",
									height: "50px"
								}
							}
						}}
					>
						Add card
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
	form: PropTypes.shape({
		setFieldValue: PropTypes.func
	})
};

Element.defaultProps = {
	label: "",
	caption: "",
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
