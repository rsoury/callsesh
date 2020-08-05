import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import pick from "lodash/pick";

import { publicUrl } from "@/env-config";
import { page as pageRoutes } from "@/routes";

const Sitemap = () => null;

let sitemap = null;

export async function getServerSideProps({ req, res }) {
	if (!req || !res) {
		return {
			props: {}
		};
	}
	res.setHeader("Content-Type", "application/xml");
	res.setHeader("Content-Encoding", "gzip");

	// If our sitemap is cached, we write the cached sitemap, no query to the CMS.
	if (sitemap) {
		res.write(sitemap);
		res.end();
		return {
			props: {}
		};
	}

	const smStream = new SitemapStream({ hostname: `${publicUrl}/` });
	const pipeline = smStream.pipe(createGzip());

	try {
		[
			...Object.values(
				pick(pageRoutes, ["index", "faq", "referrals", "login", "signup"])
			),
			...Object.values(pageRoutes.terms)
		].forEach((url) => {
			smStream.write({ url });
		});

		smStream.end();
		const resp = await streamToPromise(pipeline);

		// cache the sitemap response (cache will be gone on next build.
		// This cache is only useful if your content is static, and you must build the next app on every content change in the cms
		sitemap = resp;

		res.write(resp);
		res.end();
	} catch (error) {
		console.log(error);
		res.statusCode = 500;
		res.write("Could not generate sitemap.");
		res.end();
	}

	return {
		props: {}
	};
}

export default Sitemap;
