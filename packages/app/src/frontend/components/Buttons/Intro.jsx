import React, { useState } from "react";
import { useStyletron } from "baseui";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
import {
	Modal,
	ModalBody,
	SIZE as MODAL_SIZE,
	ROLE as MODAL_ROLE
} from "baseui/modal";
import PlayIcon from "baseui/icon/triangle-right";

const IntroButton = () => {
	const [css, theme] = useStyletron();
	const [isShowingVideo, setShowingVideo] = useState(false);

	return (
		<>
			<Button
				kind={BUTTON_KIND.minimal}
				size={BUTTON_SIZE.large}
				endEnhancer={() => (
					<div
						className={css({
							width: "28px",
							height: "28px",
							backgroundColor: theme.colors.borderOpaque,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "100%"
						})}
					>
						<PlayIcon size={24} />
					</div>
				)}
				onClick={() => setShowingVideo(true)}
			>
				How it works?
			</Button>
			<Modal
				onClose={() => setShowingVideo(false)}
				closeable
				isOpen={isShowingVideo}
				animate
				autoFocus
				size={MODAL_SIZE.auto}
				role={MODAL_ROLE.dialog}
				overrides={{
					Root: {
						style: {
							zIndex: "999"
						}
					},
					Close: {
						style: {
							zIndex: "100",
							borderRadius: "100px",
							backgroundColor: "#fff"
						}
					}
				}}
			>
				<ModalBody>
					<iframe
						title="Callsesh - How it works - Youtube Video"
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/_gOmJp6eCF4"
						frameBorder=""
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</ModalBody>
			</Modal>
		</>
	);
};

export default IntroButton;
