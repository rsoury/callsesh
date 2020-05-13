import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import snakeCase from "lodash/snakeCase";
import { format } from "@callsesh/utils";
import { Widget } from "@uploadcare/react-widget";
import { uploadcare as config } from "@/env-config";
import { toaster } from "baseui/toast";
import { Avatar } from "baseui/avatar";
import isEmpty from "is-empty";
import { useStyletron } from "baseui";

import LabelControl from "@/components/LabelControl";

const FileUploaderField = ({ name, label, caption, images, fileSizeLimit }) => {
	const [css] = useStyletron();

	const getFileSizeLimit = (sizeInBytes) => {
		return (fileInfo) => {
			if (fileInfo.size > sizeInBytes) {
				toaster.negative(`File size too large.`);
				throw new Error("File size too large");
			}
		};
	};

	const validators = [getFileSizeLimit(fileSizeLimit)];

	const id = snakeCase(name);

	return (
		<Field name={name} id={id}>
			{({ field: { value }, meta, form: { setFieldValue } }) => (
				<LabelControl
					label={() => label || name}
					caption={() => caption}
					error={
						meta.touched && meta.error
							? () => format.message(meta.error || "")
							: null
					}
					noBg
				>
					<Widget
						publicKey={config.publicKey}
						id={`${id}_widget`}
						name={`${id}_widget`}
						tabs="file camera instagram facebook url gdrive gphotos dropbox vk"
						previewStep
						clearable
						imagesOnly={images}
						crop="1:1"
						validators={validators}
						// onFileSelect={(file) => {
						// 	console.log("File changed: ", file);

						// 	if (file) {
						// 		file.progress((info) =>
						// 			console.log("File progress: ", info.progress)
						// 		);
						// 		file.done((info) => setFieldValue(info));
						// 	}
						// }}
						onChange={(info) => setFieldValue(name, info)}
					/>
					{!isEmpty(value) && (
						<div className={css({ padding: "10px 0 0" })}>
							<Avatar name={name} size="scale4800" src={value.cdnUrl} />
						</div>
					)}
				</LabelControl>
			)}
		</Field>
	);
};

FileUploaderField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	caption: PropTypes.string,
	images: PropTypes.bool,
	fileSizeLimit: PropTypes.number
};

FileUploaderField.defaultProps = {
	label: "",
	caption: "",
	images: false,
	fileSizeLimit: 1024 * 1024 * 2
};

export default FileUploaderField;
