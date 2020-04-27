import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { PinCode, SIZE as PIN_SIZE } from "baseui/pin-code";
import snakeCase from "lodash/snakeCase";

import * as format from "@/utils/format";

const VerifyField = ({ name, label, caption, ...props }) => {
	const [css] = useStyletron();

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
					<div className={css({ padding: "10px 0" })}>
						<PinCode
							required
							values={Array(6)
								.fill("")
								.map((s, i) => (i + 1 < value.length ? value[i] : s))}
							onChange={(values) => {
								setFieldValue(field.name, values.join(""));
							}}
							size={PIN_SIZE.large}
							autoFocus
							overrides={{
								Root: {
									style: {
										justifyContent: "center"
									}
								}
							}}
							{...field}
							error={meta.touched ? !!meta.error : false}
							{...props}
						/>
					</div>
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
