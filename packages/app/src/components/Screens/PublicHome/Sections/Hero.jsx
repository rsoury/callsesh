import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
// import { Play as PlayIcon } from "react-feather";
import {
	Modal,
	ModalBody,
	SIZE as MODAL_SIZE,
	ROLE as MODAL_ROLE
} from "baseui/modal";
import PlayIcon from "baseui/icon/triangle-right";

import SignupActionButton from "@/components/SignupActionButton";
import Highlight from "@/components/Highlight";

const HeroSection = () => {
	const [css, theme] = useStyletron();
	const [isShowingVideo, setShowingVideo] = useState(false);

	return (
		<section
			id="hero"
			className={css({
				position: "relative",
				padding: "75px 0"
			})}
		>
			<Grid gridGutter={16}>
				<Cell span={12}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							position: "relative",
							zIndex: "100",
							textAlign: "center",
							padding: "0 0 75px 0"
						})}
					>
						<h1
							className={css({
								...theme.typography.DisplaySmall,
								fontWeight: "900",
								marginTop: "0px",
								marginBottom: "0px"
							})}
						>
							<Highlight>Agile</Highlight> engagement and collaboration for your
							freelance business
						</h1>
						<h2
							className={css({
								...theme.typography.HeadingSmall,
								maxWidth: "700px",
								marginLeft: "auto",
								marginRight: "auto",
								padding: "10px 0"
							})}
						>
							Offer your clients metered call sessions to solve their problems
							on-the-fly, whether it takes 10 minutes or a day.
						</h2>
						<div
							className={css({
								width: "100%",
								marginBottom: "30px"
							})}
						>
							<SignupActionButton />
						</div>
						<div className={css({ textAlign: "center", width: "100%" })}>
							<Button
								kind={BUTTON_KIND.secondary}
								size={BUTTON_SIZE.large}
								shape={BUTTON_SHAPE.pill}
								endEnhancer={() => <PlayIcon size={20} />}
								onClick={() => setShowingVideo(true)}
							>
								How it works?
							</Button>
						</div>
					</div>
				</Cell>
				{/* <Cell span={12}>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center"
						})}
					>
						<div
							className={css({
								display: "inline-flex",
								padding: "10px",
								backgroundColor: theme.colors.accent
							})}
						>
							<iframe
								title="Callsesh - How it works - Youtube Video"
								width="560"
								height="315"
								src="https://www.youtube-nocookie.com/embed/_gOmJp6eCF4"
								frameBorder=""
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullscreen
							/>
						</div>
					</div>
				</Cell> */}
			</Grid>
			<Modal
				onClose={() => setShowingVideo(false)}
				closeable
				isOpen={isShowingVideo}
				animate
				autoFocus
				size={MODAL_SIZE.full}
				role={MODAL_ROLE.dialog}
				overrides={{
					Root: {
						style: {
							zIndex: "999"
						}
					}
				}}
			>
				<ModalBody>
					<iframe
						title="Callsesh - How it works - Youtube Video"
						width="100%"
						height="100%"
						src="https://www.youtube-nocookie.com/embed/_gOmJp6eCF4"
						frameBorder=""
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullscreen
					/>
				</ModalBody>
			</Modal>
		</section>
	);
};

export default HeroSection;
