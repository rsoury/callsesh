/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect, useCallback } from "react";
import { useStyletron, withStyle } from "baseui";
import PropTypes from "prop-types";
import {
	GiftedChat,
	Send,
	LoadEarlier,
	Time,
	InputToolbar,
	Composer
} from "react-native-gifted-chat";
import { View } from "react-native";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { Send as SendIcon } from "react-feather";
import isEmpty from "is-empty";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";
import MobileDetect from "mobile-detect";
import Autolink from "react-native-autolink";

import useUser from "@/hooks/use-user";
import { ViewUserProps } from "@/utils/common-prop-types";
import Link from "@/components/Link";
import * as routes from "@/routes";

import Header from "./Header";
import ChatEmpty from "./ChatEmpty";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "30px",
	height: "30px"
});

// TODO: May need to use use-persisted-state to persist message data.

const styleLR = (obj) => ({ left: obj, right: obj });
const specialCharacters = `\`~!@#$%^&*()-_=+[]{}\\|;':",.<>/?`.split("");

const ChatScreen = ({ viewUser, onClose }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [messages, setMessages] = useState([]);
	const [isSendDisabled, setSendDisabled] = useState(true); // by default, no text in input
	const inputRef = React.createRef();
	const sendRef = React.createRef();

	const md = new MobileDetect(window.navigator.userAgent);

	useEffect(() => {
		setMessages([
			{
				_id: 3,
				text: "How's your experience with Gifted Chat?",
				createdAt: new Date(),
				user: {
					_id: viewUser.id,
					name: viewUser.givenName,
					avatar: viewUser.picture
				},
				sent: true,
				received: true,
				pending: false
			},
			{
				_id: 2,
				text: "How are you?",
				createdAt: new Date(),
				user: {
					_id: viewUser.id,
					name: viewUser.givenName,
					avatar: viewUser.picture
				},
				sent: true,
				received: false,
				pending: false
			},
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: viewUser.id,
					name: viewUser.givenName,
					avatar: viewUser.picture
				},
				sent: false,
				received: false,
				pending: true
			}
		]);
	}, []);

	// Mount listeners that auto focus the text input composer
	useEffect(() => {
		const { current: input } = inputRef;

		const pageClickHandler = () => {
			input.focus();
		};
		const pageKeyboardPressHandler = (event) => {
			const inputValue = String.fromCharCode(event.keyCode);
			if (
				/[a-zA-Z0-9-_]/.test(inputValue) ||
				specialCharacters.includes(inputValue)
			) {
				input.focus();
			}
		};
		const sendOnEnterListener = (event) => {
			if (
				event.keyCode === 13 &&
				!event.shiftKey &&
				!event.ctrlKey &&
				!event.altKey &&
				!event.metaKey
			) {
				sendRef.current.click();
				input.blur();
			}
		};
		if (!isEmpty(input)) {
			document.addEventListener("click", pageClickHandler, false);
			document.addEventListener("keypress", pageKeyboardPressHandler, false);
			// Only mount sendOnEnter if not phone
			if (!md.phone()) {
				input.addEventListener("keypress", sendOnEnterListener, false);
			}
		}

		return () => {
			if (!isEmpty(input)) {
				document.removeEventListener("click", pageClickHandler);
				document.removeEventListener("keypress", pageKeyboardPressHandler);
				input.removeEventListener("keypress", sendOnEnterListener, false);
			}
		};
	}, [inputRef, sendRef]);

	const handleSend = useCallback(
		(newMessages = []) => {
			setMessages((previousMessages) =>
				GiftedChat.append(previousMessages, newMessages)
			);
		},
		[inputRef]
	);

	const handleLoadEarlier = useCallback(() => {
		console.log("loading earlier...");
	}, []);

	return (
		<div
			id="callsesh-session-chat"
			className={css({
				height: "100vh",
				display: "flex",
				flexDirection: "column"
			})}
		>
			<Header
				name={viewUser.givenName}
				picture={viewUser.picture}
				onClose={onClose}
			/>
			<div
				id="callsesh-session-chat-container"
				className={css({ flexGrow: "1" })}
			>
				<View style={{ width: "100%", height: "100%" }}>
					<GiftedChat
						messages={messages}
						onSend={handleSend}
						user={{
							_id: user.id,
							name: user.givenName
						}}
						loadEarlier={!isEmpty(messages)}
						onLoadEarlier={handleLoadEarlier}
						renderLoading={() => (
							<div
								className={css({
									display: "flex",
									width: "100%",
									height: "100%",
									alignItems: "center",
									justifyContent: "center"
								})}
							>
								<Spinner $size={SPINNER_SIZE.medium} />
							</div>
						)}
						renderLoadEarlier={(props) => (
							<Button
								size={BUTTON_SIZE.mini}
								shape={BUTTON_SHAPE.pill}
								kind={BUTTON_KIND.secondary}
								overrides={{
									BaseButton: {
										style: {
											width: "auto",
											maxWidth: "200px",
											marginTop: "0px",
											marginBottom: "0px",
											marginLeft: "auto",
											marginRight: "auto"
										}
									}
								}}
							>
								<LoadEarlier
									{...props}
									containerStyle={{
										margin: "0px"
									}}
									wrapperStyle={{
										height: "auto",
										backgroundColor: "transparent"
									}}
									textStyle={{
										...theme.typography.ParagraphXSmall,
										fontWeight: 700,
										color: theme.colors.primary
									}}
								/>
							</Button>
						)}
						renderTime={() => null}
						renderMessageText={({ currentMessage, ...props }) => {
							const textColor =
								currentMessage.user._id === user.id ? "#fff" : "#000";
							return (
								<Tooltip
									content={() => (
										<div>
											<Time
												{...{ currentMessage, ...props }}
												timeTextStyle={styleLR({
													...theme.typography.LabelXSmall,
													color: "#fff",
													margin: "0px",
													padding: "0px",
													fontWeight: 700
												})}
												containerStyle={styleLR({
													marginLeft: 0,
													marginBottom: 0,
													marginRight: 0
												})}
											/>
										</div>
									)}
									placement={TOOLTIP_PLACEMENT.left}
									showArrow
								>
									<div
										className={css({
											display: "inline-block",
											marginLeft: "14px",
											marginRight: "14px",
											marginTop: "5px",
											marginBottom: "5px",
											lineHeight: "21px"
										})}
									>
										<Autolink
											text={currentMessage.text}
											stripPrefix={false}
											stripTrailingSlash={false}
											webFallback
											renderLink={(text, match) => (
												<Link
													href={routes.build.externalLink(
														match.getAnchorHref()
													)}
													target="_blank"
													rel="noopener noreferrer"
													standard
													style={{
														color: `${textColor} !important`
													}}
												>
													<span
														className={css({
															...theme.typography.ParagraphMedium,
															color: `${textColor} !important`,
															fontSize: "15px"
														})}
													>
														{text}
													</span>
												</Link>
											)}
											renderText={(text) => (
												<span
													className={css({
														...theme.typography.ParagraphMedium,
														color: `${textColor} !important`,
														fontSize: "15px"
													})}
												>
													{text}
												</span>
											)}
										/>
									</div>
								</Tooltip>
							);
						}}
						renderChatEmpty={ChatEmpty}
						renderInputToolbar={(props) => (
							<InputToolbar
								{...props}
								containerStyle={{
									border: "none",
									paddingBottom: "5px",
									paddingTop: "5px",
									backgroundColor: "#fff"
								}}
							/>
						)}
						renderComposer={(props) => (
							<Composer
								{...props}
								textInputStyle={{
									borderRadius: "18px",
									backgroundColor: `rgba(0, 0, 0, 0.05)`,
									marginRight: "10px",
									padding: "10px",
									height: "auto",
									lineHeight: "21px"
								}}
								textInputProps={{
									ref: inputRef
								}}
							/>
						)}
						renderSend={(props) => (
							<Send
								{...props}
								containerStyle={{
									justifyContent: "center",
									alignItems: "center",
									alignSelf: "center"
								}}
								disabled={isSendDisabled}
								sendButtonProps={{
									ref: sendRef
								}}
							>
								<Button
									size={BUTTON_SIZE.compact}
									shape={BUTTON_SHAPE.round}
									disabled={isSendDisabled}
								>
									<div
										className={css({
											transform: "rotate(45deg) translate(-2.5px, 2.5px)",
											display: "flex"
										})}
									>
										<SendIcon size={20} />
									</div>
								</Button>
							</Send>
						)}
						renderChatFooter={() => (
							<div>
								<div
									className={css({ paddingTop: "15px", paddingBottom: "5px" })}
								/>
							</div>
						)}
						alwaysShowSend
						maxComposerHeight={200}
						minComposerHeight={40}
						onInputTextChanged={(textValue) => {
							setSendDisabled(isEmpty(textValue));
						}}
						parsePatterns={(linkStyle) => [
							{ type: "url", style: linkStyle, onPress: () => {} } // override url clicks
						]}
					/>
				</View>
			</div>
		</div>
	);
};

ChatScreen.propTypes = {
	viewUser: ViewUserProps.isRequired,
	onClose: PropTypes.func
};

ChatScreen.defaultProps = {
	onClose() {}
};

export default ChatScreen;
