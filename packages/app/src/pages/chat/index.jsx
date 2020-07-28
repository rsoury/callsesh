/**
 * A special link to redirect to Chat service
 */

import ono from "@jsdevtools/ono";
import isEmpty from "is-empty";

import * as chat from "@/server/chat";
import * as authManager from "@/server/auth-manager";
import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import checkSession from "@/utils/check-call-session";

const OpenChat = () => null;

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
			// Check if withUsername is in a call session with the current user.
			const withUser = await authManager.getUserByUsername(withUsername, {
				withContext: true
			});
			const { isSame: isInSameSession } = checkSession(user, withUser);
			if (isInSameSession) {
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
		}

		res.writeHead(302, {
			Location: `${config.url}/home?resumeToken=${token}&userId=${
				user.chatUser.id
			}${isEmpty(roomId) ? "" : `&rid=${roomId}`}`
		});
		res.end();
		return { props: {} };
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
