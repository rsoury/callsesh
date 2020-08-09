import getHandler from "@/server/middleware";
import proxyCallbackHook from "@/server/handlers/hooks/proxy/callback";

const handler = getHandler();

handler.post(proxyCallbackHook);

export default handler;
