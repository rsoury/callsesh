import getHandler from "@/server/middleware";
import proxyInterceptHook from "@/server/handlers/hooks/proxy/intercept";

const handler = getHandler();

handler.post(proxyInterceptHook);

export default handler;
