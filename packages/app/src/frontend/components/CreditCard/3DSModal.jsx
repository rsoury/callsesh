import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { useStyletron } from "baseui";
import {
	Modal,
	ModalBody,
	SIZE as MODAL_SIZE,
	ROLE as MODAL_ROLE
} from "baseui/modal";
import ono from "@jsdevtools/ono";

import { THREE_D_SECURE_MESSAGE_TYPES } from "@/constants";
import events from "@/frontend/utils/events";

export const on3DSResponse = () =>
	new Promise((resolve, reject) => {
		events.on(THREE_D_SECURE_MESSAGE_TYPES.complete, () => {
			resolve();
		});
		events.on(THREE_D_SECURE_MESSAGE_TYPES.failed, () => {
			reject(ono(new Error("Aborted 3DS"), { code: "3ds_abort" }));
		});
	});

const ThreeDSecureModal = ({ url, onClose }) => {
	const [css] = useStyletron();
	const isOpen = !isEmpty(url);

	const listener = (ev) => {
		if (
			ev.data === THREE_D_SECURE_MESSAGE_TYPES.complete ||
			ev.data === THREE_D_SECURE_MESSAGE_TYPES.failed
		) {
			events.emit(ev.data);
		}
	};

	const abort = useCallback(() => {
		events.emit(THREE_D_SECURE_MESSAGE_TYPES.failed);
		onClose();
	}, []);

	useEffect(() => {
		window.addEventListener("message", listener, false);
		return () => {
			window.removeEventListener("message", listener);
		};
	}, []);

	return (
		<Modal
			onClose={abort}
			closeable
			animate
			isOpen={isOpen}
			size={MODAL_SIZE.full}
			role={MODAL_ROLE.dialog}
			overrides={{
				Root: {
					style: {
						zIndex: "9999999"
					}
				},
				Dialog: {
					style: {
						width: "100%",
						display: "flex",
						flexDirection: "column"
					}
				},
				Close: {
					style: {
						backgroundColor: "rgba(0, 0, 0, 0.5) !important",
						borderRadius: "100% !important",
						color: "#fff !important"
					}
				}
			}}
		>
			<ModalBody
				className={css({
					flexGrow: 1,
					marginTop: "0px !important",
					marginRight: "0px !important",
					marginLeft: "0px !important",
					marginBottom: "0px !important"
				})}
			>
				<iframe
					title="Authenticate your payment details"
					src={url}
					border="none"
					scrolling="no"
					className={css({ width: "100%", height: "100%", border: "none" })}
				/>
			</ModalBody>
		</Modal>
	);
};

ThreeDSecureModal.propTypes = {
	url: PropTypes.string,
	onClose: PropTypes.func
};

ThreeDSecureModal.defaultProps = {
	url: "",
	onClose() {}
};

export default ThreeDSecureModal;
