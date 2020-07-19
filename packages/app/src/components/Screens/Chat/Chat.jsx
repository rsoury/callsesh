import React, { useState, useEffect, useCallback } from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { GiftedChat } from "react-native-gifted-chat";
import { View } from "react-native";

import useUser from "@/hooks/use-user";
import { ViewUserProps } from "@/utils/common-prop-types";

// TODO: May need to use use-persisted-state to persist message data.

const ChatScreen = ({ viewUser, onClose }) => {
	const [css] = useStyletron();
	const [messages, setMessages] = useState([]);
	const [user] = useUser();

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: viewUser,
					name: viewUser.givenName,
					avatar: viewUser.picture
				}
			}
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<div id="callsesh-session-chat" className={css({ height: "100vh" })}>
			<View style={{ width: "100%", height: "100%" }}>
				<GiftedChat
					messages={messages}
					onSend={(messages) => onSend(messages)}
					user={{
						_id: user.id,
						name: user.givenName
					}}
					inverted={false}
				/>
			</View>
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
