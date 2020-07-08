import getHandler from "@/middleware";
import proxyCallbackHook from "@/server/handlers/hooks/proxy/callback";
import proxyInterceptHook from "@/server/handlers/hooks/proxy/intercept";

const handler = getHandler();

handler.post("/intercept", proxyInterceptHook).post(proxyCallbackHook);

export default handler;
