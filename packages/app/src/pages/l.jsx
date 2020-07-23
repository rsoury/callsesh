/**
 * A way for us to log users leaving using external links
 */

import getHandler from "@/server/middleware";

const ExternalLink = () => null;

const handler = getHandler();

export async function getServerSideProps({ req, res, query: { url = "/" } }) {
	await handler.apply(req, res);

	req.log.info(`Redirecting user`, { url });

	res.writeHead(302, {
		Location: url
	});
	res.end();

	return { props: {} };
}

export default ExternalLink;
