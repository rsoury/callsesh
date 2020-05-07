import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import { FormControl } from "baseui/form-control";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImageCrop from "filepond-plugin-image-crop"; // Crops image
import FilePondPluginImageTransform from "filepond-plugin-image-transform"; // Changes image to match crop

registerPlugin(
	FilePondPluginFileValidateType,
	FilePondPluginFileEncode,
	FilePondPluginFileValidateSize,
	FilePondPluginImagePreview,
	FilePondPluginImageEdit,
	FilePondPluginImageCrop,
	FilePondPluginImageTransform
);

const FileUploaderField = ({ name, label, caption, placeholder, ...props }) => {
	const filepondRef = React.createRef();

	return (
		<Field name={name} id={snakeCase(name)}>
			{({
				field: { onChange, value, ...field },
				meta,
				form: { setFieldValue }
			}) => (
				<FormControl
					label={() => label || name}
					caption={() => caption}
					error={
						meta.touched && meta.error
							? () => format.message(meta.error || "")
							: null
					}
				>
					<FilePond
						{...field}
						ref={filepondRef}
						files={value}
						onupdatefiles={(files) => {
							setFieldValue(name, files);
						}}
						allowMultiple={false}
						accept="image/png, image/jpeg, image/gif"
						labelIdle={`Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`}
						maxFileSize="2MB"
						allowImageCrop
						allowImageTransform
						imageCropAspectRatio="1:1"
						{...props}
					/>
				</FormControl>
			)}
		</Field>
	);
};

FileUploaderField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string
};

FileUploaderField.defaultProps = {
	label: "",
	caption: "",
	placeholder: ""
};

export default FileUploaderField;
