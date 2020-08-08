import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
// import { Play as PlayIcon } from "react-feather";
import {
	Modal,
	ModalBody,
	SIZE as MODAL_SIZE,
	ROLE as MODAL_ROLE
} from "baseui/modal";
import PlayIcon from "baseui/icon/triangle-right";

import SignupActionButton from "@/frontend/components/SignupActionButton";
import Highlight from "@/frontend/components/Highlight";

const HeroSection = () => {
	const [css, theme] = useStyletron();
	const [isShowingVideo, setShowingVideo] = useState(false);

	return (
		<section
			id="hero"
			className={css({
				position: "relative",
				padding: "25px 0 75px"
			})}
		>
			<Grid gridGutter={16}>
				<Cell span={[12, 3, 4]}>
					<img
						src="/static/assets/woman-on-laptop-in-coffee-shop.jpg"
						alt="woman-on-laptop-in-coffee-shop"
						className={css({
							objectFit: "cover",
							height: "100%",
							width: "100%",
							boxShadow: `-10px 10px 0 ${theme.colors.warning400}`,
							[theme.mediaQuery.maxSmall]: {
								display: "none"
							}
						})}
					/>
				</Cell>
				<Cell span={[12, 5, 8]}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							position: "relative",
							zIndex: "100",
							// textAlign: "center",
							padding: "75px 0"
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
								marginBottom: "20px"
							})}
						>
							<SignupActionButton />
						</div>
						<div className={css({ width: "100%" })}>
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
						</div>
					</div>
				</Cell>
			</Grid>
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
						allowFullscreen
					/>
				</ModalBody>
			</Modal>
		</section>
	);
};

export default HeroSection;
