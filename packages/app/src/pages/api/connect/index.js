/**
 * Initiate Stripe Express OAuth or Login depending on if it has been setup or not.
 */

import { parsePhoneNumberFromString } from "libphonenumber-js";
import { publicUrl, stripe as stripeConfig } from "@/env-config";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as routes from "@/routes";
import stripe from "@/server/stripe";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	const phoneNumber = parsePhoneNumberFromString(user.phoneNumber);

	if (user.payouts.setup) {
		// Get Login Link from stripe Api.
		const login = await stripe.accounts.createLoginLink(user.stripeConnectId, {
			redirect_url: `${publicUrl}${routes.page.index}`
		});
		res.writeHead(302, {
			Location: login.url
		});
	} else {
		// Redirect to Express OAuth Flow.
		const date = new Date(user.dob);
		const params = {
			redirect_uri: `${publicUrl}${routes.api.connect.redirect}`,
			client_id: stripeConfig.connectId,
			scope: "read_write",
			"stripe_user[business_type]": "individual",
			"stripe_user[url]": "https://callsesh.com/",
			"stripe_user[country]": user.country,
			"stripe_user[phone_number]": phoneNumber.nationalNumber,
			"stripe_user[first_name]": user.givenName,
			"stripe_user[last_name]": user.familyName,
			"stripe_user[email]": user.email,
			"stripe_user[dob_day]": date.getDate(),
			"stripe_user[dob_month]": date.getMonth(),
			"stripe_user[dob_year]": date.getFullYear(),
			"stripe_user[product_description]": `Call Sessions`
		};
		const queryString = Object.entries(params)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
		const startUrl = `https://connect.stripe.com/express/oauth/authorize?${queryString}`;
		res.writeHead(302, {
			Location: startUrl
		});
	}

	return res.end();
});

export default handler;
