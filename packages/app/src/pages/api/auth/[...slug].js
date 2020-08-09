/**
 * Endpoint to manage logouts
 */

import getHandler from "@/server/middleware";
import logout from "@/server/handlers/auth/logout";
import callback from "@/server/handlers/auth/callback";
import login from "@/server/handlers/auth/login";
import signup from "@/server/handlers/auth/signup";

const handler = getHandler();

handler
	.get("/api/auth/callback", callback)
	.get("/api/auth/logout", logout)
	.get("/api/auth/login", login)
	.get("/api/auth/signup", signup);

export default handler;
