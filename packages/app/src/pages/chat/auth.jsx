/**
 * Will render in an iframe inside the Rocket Chat Authentication Page
 * Serve a static page that fires a POST request to an CORS enabled API endpoint for login token
 * Post message with login token to parent window.
 */

// import { useEffect } from "react";
// import isEmpty from "is-empty";
// import ono from "@jsdevtools/ono";

// import request from "@/utils/request";
// import * as routes from "@/routes";
// import handleException, { alerts } from "@/utils/handle-exception";
// import { chat as config } from "@/env-config";
import FullscreenLoader from "@/components/FullscreenLoader";
// import { getUser } from "@/server/middleware/auth";
// import * as chat from "@/server/chat";

const ChatAuth = () => {
	// useEffect(() => {
	// 	request
	// 		.get(routes.api.chatToken, {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`
	// 			}
	// 		})
	// 		.then(({ data }) => data)
	// 		.then(({ token: loginToken }) => {
	// 			window.parent.postMessage(
	// 				{
	// 					event: "login-with-token",
	// 					loginToken
	// 				},
	// 				config.url
	// 			);
	// 		})
	// 		.catch((e) => {
	// 			handleException(e);
	// 			alerts.error();
	// 		});
	// }, []);

	return (
		<FullscreenLoader>
			<strong>Loading chat...</strong>
		</FullscreenLoader>
	);
};

// export async function getServerSideProps({ req }) {
// 	try {
// 		// Get currently authed user
// 		const user = await getUser(req, { withContext: true });
// 		console.log(user);

// 		// Login to chat service and get encrypted password
// 		const { data = {} } = await chat.login(
// 			user.username,
// 			user.chatUser.password
// 		);
// 		const token = data.authToken || "";

// 		return {
// 			props: {
// 				token
// 			}
// 		};
// 	} catch (e) {
// 		return { props: {} };
// 	}
// }

export default ChatAuth;
