/**
 * A special link to redirect to Chat service
 */

import ono from "@jsdevtools/ono";
import isEmpty from "is-empty";
import Url from "url-parse";

import * as chat from "@/server/chat";
import * as authManager from "@/server/auth-manager";
import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import { chat as config } from "@/env-config";
import handleException from "@/utils/handle-exception";
import checkSession from "@/utils/check-call-session";
import { formatError } from "@/utils/request";

const OpenChat = () => null;

const handler = getHandler();

export async function getServerSideProps({
	req,
	res,
	query: { slug, with: withUsername = "", path }
}) {
	handler.use(requireAuthentication);
	try {
		await handler.apply(req, res);

		req.log.info(`Open chat`, { withUsername });

		// Get currently authed user
		const user = await getUser(req, { withContext: true });

		if (!user.emailVerified) {
			throw new Error("Email not verified");
		}

		const chatUser = await chat.getOrCreateUser(user);

		// Login to chat service and get encrypted password
		const { data = {} } = await chat.login(user.username, chatUser.password);
		const token = data.authToken || "";

		// If deep linking to a room by the chat service, use rid query param
		if (Array.isArray(slug)) {
			if (slug[0] === "room") {
				const redirectUrl = new Url(`${config.url}/home`, true);
				redirectUrl.set("query", {
					...redirectUrl.query,
					resumeToken: token,
					userId: chatUser.id,
					return_url: path,
					remove_cache: true
				});
				res.writeHead(302, {
					Location: redirectUrl.href
				});
				res.end();
				return { props: {} };
			}
		}

		let roomId = "";
		if (!isEmpty(withUsername)) {
			// Check if withUsername is in a call session with the current user.
			const withUser = await authManager.getUserByUsername(withUsername, {
				withContext: true
			});
			const { isSame: isInSameSession } = checkSession(user, withUser);
			if (isInSameSession) {
				await chat.getOrCreateUser(withUser); // ensure the user is created for counterpart user.
				const { room = {} } = await chat
					.getClient()
					.post(
						"im.create",
						{
							username: withUsername
						},
						{
							headers: chat.getAuthHeaderParams(chatUser.id, token)
						}
					)
					.then(({ data: d }) => d)
					.catch((e) => {
						handleException(e);
					});
				if (room?.rid) {
					roomId = room.rid;
				}
			}
		}

		const redirectUrl = new Url(`${config.url}/home`, true);
		const qs = {
			...redirectUrl.query,
			remove_cache: true,
			resumeToken: token,
			userId: chatUser.id
		};
		if (!isEmpty(roomId)) {
			qs.return_url = `/direct/${roomId}`;
		}
		redirectUrl.set("query", qs);
		res.writeHead(302, {
			Location: redirectUrl.href
		});
		res.end();
		return { props: {} };
	} catch (e) {
		req.log.error(
			`Could not authenticate with chat service`,
			ono(formatError(e), { withUsername })
		);

		res.writeHead(302, {
			Location: `/?chat_error=true`
		});
		res.end();
		return { props: {} };
	}
}

export default OpenChat;
