import React from "react";
import PropTypes from "prop-types";
import {
	H1 as Heading,
	H5 as Subheader,
	Paragraph2 as Paragraph
} from "baseui/typography";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { Card, StyledBody } from "baseui/card";
import * as yup from "yup";
import isEmpty from "is-empty";

import CreditCardField from "@/components/Fields/CreditCard";
import Emoji from "@/components/Emoji";

export const initialValues = {
	// This should be a stripe payment_source id
	paymentMethod: {}
};

export const validationSchema = yup.object().shape({
	paymentMethod: yup.object()
});

// eslint-disable-next-line
const CallerStep = ({ values, formValues }) => {
	const [css] = useStyletron();

	return (
		<div className={css({ paddingBottom: "50px" })}>
			<Grid>
				<Cell span={12}>
					<Heading>
						<strong className={css({ fontWeight: 800 })}>
							Making calls?&nbsp;&nbsp;
							<Emoji label="pen" symbol="🖋" />
						</strong>
					</Heading>
					<Subheader>
						Learn from experts, consult a professional, or hang out with someone
						unique
					</Subheader>
				</Cell>
			</Grid>
			<Grid>
				<Cell span={12}>
					<Card
						overrides={{
							Root: {
								style: {
									width: "100%"
								}
							}
						}}
					>
						<StyledBody>
							<Paragraph>
								The payment is powered by Stripe and we do not store sensitive
								payment information on our servers.
							</Paragraph>
							<CreditCardField
								name="paymentMethod"
								label="Add a card"
								caption="We charge and instantly refund $1 to verify your card."
								billingDetails={
									isEmpty(formValues)
										? {}
										: {
												name: `${formValues.general.firstName} ${formValues.general.lastName}`
										  }
								}
							/>
						</StyledBody>
					</Card>
				</Cell>
			</Grid>
		</div>
	);
};

CallerStep.propTypes = {
	values: PropTypes.shape({
		paymentMethod: PropTypes.object
	}),
	formValues: PropTypes.shape({
		general: PropTypes.shape({
			firstName: PropTypes.string,
			lastName: PropTypes.string
		})
	})
};

CallerStep.defaultProps = {
	values: {},
	formValues: {}
};

export default CallerStep;
