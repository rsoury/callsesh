// Handles terms-of-service index -- @/md/terms/terms-of-service.md

import TermsTemplate, { getStaticProps as _getStaticProps } from "./[slug]";

export default TermsTemplate;

export async function getStaticProps(ctx) {
	return _getStaticProps({ ...ctx, params: { slug: "terms-of-service" } });
}
