// import React from "react";
import React, { useState, useEffect } from "react";
import { useStyletron, withStyle } from "baseui";
import { Avatar } from "baseui/avatar";
import { H1 as Heading, Paragraph2 as Paragraph } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import { motion, AnimatePresence } from "framer-motion";

import InCallTopBar from "@/components/Header/InCallTopBar";
import UppercaseLabel from "@/components/UppercaseLabel";
import { ViewUserProps } from "@/utils/common-prop-types";
// import isUserOperator from "@/utils/is-operator";
import useUser from "@/hooks/use-user";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const InSessionScreen = ({ viewUser }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setMount(true);
		}, 100);
	}, []);

	return (
		<main
			id="callsesh-in-session"
			className={css({
				position: "relative",
				backgroundColor: "#fff"
			})}
		>
			<div
				className={css({
					position: "absolute",
					top: "0px",
					left: "0px",
					right: "0px"
				})}
			>
				<InCallTopBar />
			</div>
			<div
				className={css({
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				})}
			>
				<AnimatePresence>
					{mount && (
						<div
							className={css({
								textAlign: "center"
							})}
						>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
							>
								<UppercaseLabel
									style={{ marginBottom: "10px", opacity: "0.3" }}
								>
									In session with
								</UppercaseLabel>
								<Avatar
									name={viewUser.nickname}
									size="scale4800"
									src={viewUser.picture}
								/>
								<Heading>
									<strong className={css({ fontWeight: 900 })}>
										{viewUser.nickname}
									</strong>
								</Heading>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.3
								}}
								className={css({
									textAlign: "center",
									maxWidth: "300px",
									margin: "0 auto",
									display: "flex",
									alignItems: "center",
									flexDirection: "column"
								})}
							>
								<Spinner $size={SPINNER_SIZE.large} />
								<Paragraph
									marginTop="25px"
									color={theme.colors.contentTertiary}
								>
									<strong>
										Your call session has started.
										<br />
										You should receive an SMS with a phone number to call that
										will connect you to your operator.
									</strong>
								</Paragraph>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</main>
	);
};

InSessionScreen.propTypes = {
	viewUser: ViewUserProps.isRequired
};

export default InSessionScreen;

/**
 * const [mount, setMount] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setMount(true);
		}, 100);
	}, []);
 */

/**
 * <AnimatePresence>
	{
		mount && (
			<motion.div>
				<div
					className={css({
						textAlign: "center"
					})}
				>

				</div>
			</motion.div>
		)
	}
</AnimatePresence>
 */
