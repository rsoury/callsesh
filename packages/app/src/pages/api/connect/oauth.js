/**
 * Manage credit cards using Stripe.
 */

import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as routes from "@/routes";
import stripe from "@/server/stripe";
import * as authManager from "@/server/auth-manager";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const { code } = req.query;

	const user = await getUser(req);

	// Get stripe connect id
	const response = await stripe.oauth.token({
		grant_type: "authorization_code",
		code
	});

	const { stripe_user_id: stripeConnectId } = response;

	// Store connect id in user account
	await authManager.updateUser(user.id, {
		metadata: {
			app: {
				stripeConnectId,
				stripeConnectData: response
			}
		}
	});

	res.writeHead(302, {
		Location: routes.page.index
	});
	return res.end();
});

export default handler;
