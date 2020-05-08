import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import Skeleton from "react-loading-skeleton";
import { Block } from "baseui/block";
import { loadStripe } from "@stripe/stripe-js/pure";
import { StripeProvider, CardElement } from "react-stripe-elements";

import { stripe as config } from "@/env-config";

const CreditCardField = ({ name, label, caption, ...props }) => {
	const [isLoading, setLoading] = useState(true);

	let stripe = null;

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (typeof window.Stripe === "undefined") {
				loadStripe.setLoadParameters({ advancedFraudSignals: false });
				loadStripe(config.publicKey).then((s) => {
					stripe = s;
					setLoading(false);
				});
			} else {
				stripe = window.Stripe;
				setLoading(false);
			}
		}
	}, []);

	return (
		<Field name={name} id={snakeCase(name)}>
			{({ meta }) => (
				<FormControl
					label={() => label || name}
					caption={() => caption}
					error={
						meta.touched && meta.error ? () => format.message(meta.error) : null
					}
				>
					{isLoading ? (
						<Skeleton height={50} />
					) : (
						<StripeProvider stripe={stripe}>
							<Block $as={CardElement} {...props} />
						</StripeProvider>
					)}
				</FormControl>
			)}
		</Field>
	);
};

CreditCardField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string
};

CreditCardField.defaultProps = {
	label: "",
	caption: ""
};

export default CreditCardField;
