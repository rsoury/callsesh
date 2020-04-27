import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { PinCode, SIZE as PIN_SIZE } from "baseui/pin-code";
import snakeCase from "lodash/snakeCase";

import * as format from "@/utils/format";

const VerifyField = ({ name, label, caption, ...props }) => (
	<Field name={name} id={snakeCase(name)} type="text">
		{({
			field: { value, onChange, ...field },
			form: { setFieldValue },
			meta
		}) => {
			const pinValues = Array(6)
				.fill("")
				.map((s, i) => (i < value.length ? value[i] : s));

			return (
				<FormControl
					label={label || name ? () => label || name : null}
					caption={caption ? () => caption : null}
					error={meta.touched ? format.message(meta.error) : ""}
				>
					<PinCode
						required
						values={pinValues}
						onChange={({ values }) => {
							setFieldValue(field.name, values.join(""));
						}}
						size={PIN_SIZE.large}
						autoFocus
						overrides={{
							Root: {
								style: {
									justifyContent: "center",
									padding: "10px 0"
								}
							}
						}}
						{...field}
						error={meta.touched ? !!meta.error : false}
						{...props}
					/>
				</FormControl>
			);
		}}
	</Field>
);

VerifyField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string
};

VerifyField.defaultProps = {
	label: "",
	caption: ""
};

export default VerifyField;
