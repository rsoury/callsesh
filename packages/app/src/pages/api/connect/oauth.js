/**
 * Manage credit cards using Stripe.
 */

import getHandler from "@/middleware";
import { requireAuthentication } from "@/middleware/auth";
import * as routes from "@/routes";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const { state } = req.query;
	console.log(state);
	console.log(req.cookies);

	res.writeHead(302, {
		Location: routes.page.index
	});
	return res.end();
});

export default handler;
