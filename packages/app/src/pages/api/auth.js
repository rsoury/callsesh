/**
 * Endpoint to manage logouts
 */

import getHandler from "@/middleware";
import logout from "@/server/handlers/auth/logout";
import callback from "@/server/handlers/auth/callback";
import login from "@/server/handlers/auth/login";
import signup from "@/server/handlers/auth/signup";

const handler = getHandler();

handler
	.get("/callback", callback)
	.get("/logout", logout)
	.get("/login", login)
	.get("/signup", signup);

export default handler;
