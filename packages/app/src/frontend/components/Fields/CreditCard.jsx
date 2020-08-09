import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

import CreditCardInput from "@/frontend/components/CreditCard";

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
