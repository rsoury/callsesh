import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const CheckboxField = ({ name, label, caption, ...props }) => (
	<Field name={name} id={snakeCase(name)}>
		{({
			field: { onChange, value, ...field },
			meta,
			form: { setFieldValue }
		}) => (
			<FormControl
				caption={() => caption}
				error={
					meta.touched && meta.error ? () => format.message(meta.error) : null
				}
			>
				<Checkbox
					{...field}
					checked={value}
					onChange={(e) => {
						setFieldValue(name, e.target.checked);
					}}
					labelPlacement={LABEL_PLACEMENT.right}
					{...props}
				>
					{label}
				</Checkbox>
			</FormControl>
		)}
	</Field>
);

CheckboxField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string
};

CheckboxField.defaultProps = {
	label: "",
	caption: ""
};

export default CheckboxField;
