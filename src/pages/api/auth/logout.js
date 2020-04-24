/**
 * Log out
 */

import getHandler from "@/middleware";
import auth from "@/middleware/auth";

const handler = getHandler();

handler.use(auth).get((req, res) => {
	req.logOut();
	res.status(204).end();
});

export default handler;
