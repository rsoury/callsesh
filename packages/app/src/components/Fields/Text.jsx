import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";

const TextField = ({
	name,
	label,
	caption,
	placeholder,
	options,
	...props
}) => (
	<Field name={name} id={snakeCase(name)}>
		{({ field, meta }) => (
			<FormControl
				label={label || name ? () => label || name : null}
				caption={caption ? () => caption : null}
				error={() => (meta.touched ? format.message(meta.error) : "")}
			>
				<Input
					{...field}
					type="text"
					placeholder={placeholder}
					error={meta.touched ? !!meta.error : false}
					{...props}
				/>
			</FormControl>
		)}
	</Field>
);

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({ label: PropTypes.string, id: PropTypes.string })
	)
};

TextField.defaultProps = {
	label: "",
	caption: "",
	placeholder: "",
	options: []
};

export default TextField;
