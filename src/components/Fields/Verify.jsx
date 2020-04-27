import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { PinCode } from "baseui/pin-code";
import snakeCase from "lodash/snakeCase";
import * as format from "@/utils/format";

const VerifyField = ({ name, label, caption, ...props }) => {
	return (
		<Field name={name} id={snakeCase(name)} type="text">
			{({
				field: { value, onChange, ...field },
				form: { setFieldValue },
				meta
			}) => (
				<FormControl
					label={label || name ? () => label || name : null}
					caption={caption ? () => caption : null}
					error={meta.touched ? format.message(meta.error) : ""}
				>
					<PinCode
						required
						values={Array(6)
							.fill("")
							.map((s, i) => (i + 1 < value.length ? value[i] : s))}
						onChange={(values) => {
							setFieldValue(field.name, values.join(""));
						}}
						{...field}
						error={meta.touched ? !!meta.error : false}
						{...props}
					/>
				</FormControl>
			)}
		</Field>
	);
};

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
