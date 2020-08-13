import React from "react";
import PropTypes from "prop-types";
import {
	H1 as Heading,
	H5 as Subheader,
	Paragraph2 as Paragraph
} from "baseui/typography";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import * as yup from "yup";
import isEmpty from "is-empty";

import CreditCardField from "@/frontend/components/Fields/CreditCard";
import Emoji from "@/frontend/components/Emoji";

export const initialValues = {
	// This should be a stripe payment_source id
	paymentMethod: {}
};

export const schemaProperties = {
	paymentMethod: yup.object()
};

export const validationSchema = yup.object().shape(schemaProperties);

const CallerStep = ({ formValues }) => {
	const [css, theme] = useStyletron();

	return (
		<div className={css({ paddingBottom: "50px" })}>
			<Grid>
				<Cell span={12}>
					<Heading>
						<strong className={css({ fontWeight: 800 })}>
							Get results and answers fast&nbsp;&nbsp;
							<Emoji label="pen" symbol="🖋" />
						</strong>
					</Heading>
					<Subheader>
						Consult and collaborate with Callsesh Operators as if they were your
						co-workers.
					</Subheader>
					<Paragraph>Provide a payment method to get started...</Paragraph>
				</Cell>
			</Grid>
			<Grid>
				<Cell span={12}>
					<div
						className={css({
							padding: "10px 0",
							margin: "10px 0 20px",
							borderTop: `1px solid ${theme.colors.borderOpaque}`,
							borderBottom: `1px solid ${theme.colors.borderOpaque}`
						})}
					>
						<Paragraph>
							Payments are powered by Stripe and we do not store sensitive
							payment information on our servers.
						</Paragraph>
						<CreditCardField
							name="paymentMethod"
							label="Add a card"
							caption="Add a card if you plan to make calls. You can do this later."
							billingDetails={
								isEmpty(formValues?.general)
									? {}
									: {
											name: `${formValues.general.firstName} ${formValues.general.lastName}`
									  }
							}
						/>
					</div>
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
