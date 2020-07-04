import React, { useState, useCallback } from "react";
import { useStyletron } from "baseui";
import { Card, StyledBody } from "baseui/card";
import { ParagraphSmall as Paragraph, H5 } from "baseui/typography";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import { toaster } from "baseui/toast";
import {
	Send as ResendIcon,
	Mail as EmailIcon,
	CheckCircle as CheckIcon
} from "react-feather";

import request from "@/utils/request";
import { api as apiRoutes } from "@/routes";
import handleException from "@/utils/handle-exception";

const VerifyIcon = () => {
	const [css, theme] = useStyletron();

	return (
		<div className={css({ position: "relative", display: "flex" })}>
			<div
				className={css({
					display: "flex"
				})}
			>
				<EmailIcon size={40} />
			</div>
			<div
				className={css({
					position: "absolute",
					bottom: "0px",
					right: "-7.5px",
					display: "flex"
					// color: theme.colors.accent
				})}
			>
				<CheckIcon
					size={20}
					className={css({
						backgroundColor: theme.colors.warning100,
						strokeWidth: "3px",
						borderRadius: "100% 0 100% 100%"
					})}
				/>
			</div>
		</div>
	);
};

const VerifyEmail = () => {
	const [css, theme] = useStyletron();
	const [isLoading, setLoading] = useState(false);

	const handleResend = useCallback(() => {
		setLoading(true);
		request
			.post(apiRoutes.resendEmail)
			.then(({ data }) => data)
			.then(({ success }) => {
				if (success) {
					toaster.positive(`Verification email has been sent.`);
				} else {
					toaster.info(`Email already verified.`);
				}
			})
			.catch((e) => {
				handleException(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className={css({ padding: "20px 0" })}>
			<Card
				overrides={{
					Root: {
						style: {
							borderColor: theme.colors.warning100,
							backgroundColor: theme.colors.warning100,
							borderRadius: theme.borders.radius300
						}
					}
				}}
			>
				<StyledBody>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							marginBottom: "10px"
						})}
					>
						<div className={css({ marginRight: "20px" })}>
							<VerifyIcon />
						</div>
						<H5
							className={css({
								...theme.typography.Heading,
								marginTop: "0px",
								marginBottom: "0px"
							})}
						>
							Verify your email
						</H5>
					</div>
					<div>
						<Paragraph marginTop={0}>
							You&apos;ve been sent a verification email.
							<br />
							To ensure the best Callsesh experience, we require your email to
							be verified. This way we know where to send receipts, updates and
							support related emails.
						</Paragraph>
						<div>
							<Button
								size={BUTTON_SIZE.compact}
								startEnhancer={() => <ResendIcon size={20} />}
								isLoading={isLoading}
								onClick={handleResend}
							>
								Resend verification email
							</Button>
						</div>
					</div>
				</StyledBody>
			</Card>
		</div>
	);
};

export default VerifyEmail;
