/**
 * Endpoint to manage redirects to Auth0 Hosted page.
 */

// import isEmpty from "is-empty";
import getHandler from "@/middleware";
// import auth, { getUser } from "@/middleware/auth";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.get(async (req, res) => {
	try {
		await auth.handleCallback(req, res);
	} catch (error) {
		// Check if user is already authenticated. If so, just redirect to index page
		// try {
		// 	const user = await getUser(req);
		// 	if (!isEmpty(user)) {
		// 		res.writeHead(302, {
		// 			Location: `/`
		// 		});
		// 		return res.end();
		// 	}
		// } catch (e) {
		// 	// Empty catch
		// }

		const status = error.status || 400;
		res.status(status).json({
			success: false,
			code: status,
			message: error.message
		});
	}
});

export default handler;
