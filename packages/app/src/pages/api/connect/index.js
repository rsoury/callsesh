/**
 * Manage credit cards using Stripe.
 */

import { publicUrl, stripe as stripeConfig } from "@/env-config";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as routes from "@/routes";
import stripe from "@/stripe";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	if (user.payoutsSetup) {
		// Get Login Link from stripe Api.
		const loginUrl = await stripe.accounts.createLoginLink(
			user.stripeConnectId,
			{
				redirect_url: `${publicUrl}${routes.page.index}`
			}
		);
		res.writeHead({
			Location: loginUrl
		});
	} else {
		// Redirect to Express OAuth Flow.
		const date = new Date(user.dob);
		const params = {
			redirect_uri: `${publicUrl}${routes.api.connect.redirect}`,
			client_id: stripeConfig.clientId,
			scope: "read_write",
			"stripe_user[business_type]": "individual",
			"stripe_user[url]": publicUrl,
			"stripe_user[phone_number]": user.phoneNumber,
			"stripe_user[first_name]": user.givenName,
			"stripe_user[last_name]": user.lastName,
			"stripe_user[dob_day]": date.getDate(),
			"stripe_user[dob_month]": date.getMonth(),
			"stripe_user[dob_year]": date.getFullYear(),
			"stripe_user[product_description]": `Call Sessions`
		};
		const queryString = Object.entries(params)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
		const startUrl = `https://connect.stripe.com/express/oauth/authorize?${queryString}`;
		res.writeHead({
			Location: startUrl
		});
	}

	return res.end();
});

export default handler;
