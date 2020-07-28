/**
 * A special link to autheticate currently authenticated user with Chat service, then open chat service.
 * If d "direct" query parameter with a username is provided, open an instant message session with user.
 */

import { useEffect } from "react";
import ono from "@jsdevtools/ono";
import isEmpty from "is-empty";
import WebSocket from "isomorphic-ws";
import Url from "url-parse";

import * as chat from "@/server/chat";
import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import FullscreenLoader from "@/components/FullscreenLoader";
import generateId from "@/utils/generate-id";
// import request from "@/utils/request";

// eslint-disable-next-line
const OpenChat = ({ token, roomId }) => {
	useEffect(() => {
		const url = new Url(config.url);
		const wsUrl = `${url.protocol === "https" ? "wss" : "ws"}://${
			url.host
		}/websocket`;
		console.log(wsUrl);
		const ws = new WebSocket(wsUrl);
		ws.onopen = () => {
			// login from frontend.
			const uniqueId = generateId(32);
			console.log(uniqueId);
			ws.send({
				msg: "method",
				method: "login",
				id: uniqueId,
				params: [{ resume: token }]
			});
			console.log(`Login sent...`);
		};

		ws.onclose = () => {
			console.log("disconnected");
		};

		ws.onmessage = (data) => {
			console.log("Socket message:");
			console.log(data);
		};
	}, []);

	// useEffect(() => {
	// 	request
	// 		.post(`${config.url}/api/v1/login`, {
	// 			resume: token
	// 		})
	// 		.then(({ data }) => data)
	// 		.then(({ data = {} }) => {
	// 			const { authToken: resumeToken, userId } = data;
	// 			window.location.href = `${
	// 				config.url
	// 			}?resumeToken=${resumeToken}&userId=${userId}${
	// 				isEmpty(roomId) ? "" : `&rid=${roomId}`
	// 			}`;
	// 		});
	// }, []);

	return (
		<FullscreenLoader>
			<strong>Loading chat...</strong>
		</FullscreenLoader>
	);
};

const handler = getHandler();

export async function getServerSideProps({
	req,
	res,
	query: { with: withUsername = "" }
}) {
	handler.use(requireAuthentication);
	try {
		await handler.apply(req, res);

		req.log.info(`Open chat`, { withUsername });

		// Get currently authed user
		const user = await getUser(req, { withContext: true });

		// Login to chat service and get encrypted password
		const { data = {} } = await chat.login(
			user.username,
			user.chatUser.password
		);
		const token = data.authToken || "";

		let roomId = "";
		if (!isEmpty(withUsername)) {
			const { room = {} } = await chat
				.getClient()
				.post("im.create", {
					username: user.username,
					usernames: [withUsername]
				})
				.then(({ data: d }) => d)
				.catch((e) => {
					handleException(e);
				});
			if (room?.rid) {
				roomId = room.rid;
			}
		}

		return {
			props: {
				token,
				roomId
			}
		};
	} catch (e) {
		req.log.error(
			`Could not authenticate with chat service`,
			ono(e, { withUsername })
		);

		res.writeHead(302, {
			Location: `/`
		});
		res.end();
		return { props: {} };
	}
}

export default OpenChat;
