import Pino from "pino";
import { isProd, logLevel } from "@/env-config";

const logger = Pino({
	level: logLevel || "info",
	prettyPrint: !isProd
});

export const withModule = (module) => logger.child({ module });

export default logger;
