/**
 * Will render in an iframe inside the Rocket Chat Authentication Page
 * Serve a static page that fires a POST request to an CORS enabled API endpoint for login token
 * Post message with login token to parent window.
 */

import { useEffect } from "react";

import request from "@/utils/request";
import * as routes from "@/routes";
import handleException, { alerts } from "@/utils/handle-exception";
import { chat as config } from "@/env-config";
import FullscreenLoader from "@/components/FullscreenLoader";

const ChatAuth = () => {
	useEffect(() => {
		request
			.get(routes.api.chatToken)
			.then(({ data }) => data)
			.then(({ token }) => {
				window.parent.postMessage(
					{
						event: "login-with-token",
						loginToken: token
					},
					config.url
				);
			})
			.catch((e) => {
				handleException(e);
				alerts.error();
			});
	}, []);

	return (
		<FullscreenLoader>
			<strong>Loading chat...</strong>
		</FullscreenLoader>
	);
};

export default ChatAuth;
