import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { KIND as BUTTON_KIND } from "baseui/button";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalButton,
	SIZE as MODAL_SIZE,
	ROLE as MODAL_ROLE
} from "baseui/modal";

import { ChildrenProps } from "@/utils/common-prop-types";

const SettingsEditModal = ({
	isOpen,
	title,
	onClose,
	validate,
	initialValues,
	onSave,
	children
}) => {
	const handleSubmit = useCallback((values, { setSubmitting }) => {
		onSave(values).finally(() => {
			setSubmitting(false);
			onClose();
		});
	}, []);

	return (
		<Modal
			onClose={onClose}
			closeable={false}
			animate
			isOpen={isOpen}
			size={MODAL_SIZE.default}
			role={MODAL_ROLE.dialog}
			overrides={{
				Dialog: {
					style: {
						width: "100%",
						maxWidth: "740px"
					}
				}
			}}
		>
			{title && <ModalHeader>Edit {title}</ModalHeader>}
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={handleSubmit}
				validateOnChange
				validateOnBlur
			>
				{({ isSubmitting, submitForm, values }) => {
					return (
						<>
							<ModalBody>
								<Form>{React.cloneElement(children, { values })}</Form>
							</ModalBody>
							<ModalFooter>
								<ModalButton
									onClick={onClose}
									kind={BUTTON_KIND.minimal}
									disabled={isSubmitting}
								>
									Cancel
								</ModalButton>
								<ModalButton
									onClick={submitForm}
									isLoading={isSubmitting}
									overrides={{
										BaseButton: {
											style: {
												pointerEvents: isSubmitting ? "none" : "auto"
											}
										}
									}}
								>
									Save
								</ModalButton>
							</ModalFooter>
						</>
					);
				}}
			</Formik>
		</Modal>
	);
};

SettingsEditModal.propTypes = {
	children: ChildrenProps.isRequired,
	isOpen: PropTypes.bool,
	title: PropTypes.string,
	onClose: PropTypes.func,
	validate: PropTypes.func,
	initialValues: PropTypes.object,
	onSave: PropTypes.func
};

SettingsEditModal.defaultProps = {
	isOpen: false,
	title: "",
	onClose() {},
	validate() {},
	initialValues: {},
	onSave() {}
};

export default SettingsEditModal;
