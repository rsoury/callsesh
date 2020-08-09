import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { H1, Paragraph2 as Paragraph } from "baseui/typography";
import Markdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob-promise";
import styleToCss from "style-object-to-css-string";
import { Block } from "baseui/block";
import isEmpty from "is-empty";

import { publicUrl } from "@/env-config";
import Layout from "@/frontend/components/Layout";
import ScreenContainer from "@/frontend/components/ScreenContainer";

const TermsTemplate = ({ title, date, body, contents }) => {
	const [, theme] = useStyletron();

	const headingStyle = styleToCss(theme.typography.HeadingSmall);
	const smallHeadingStyle = styleToCss(theme.typography.HeadingXSmall);
	const paragraphStyle = styleToCss(theme.typography.ParagraphSmall);

	return (
		<Layout>
			<ScreenContainer id="callsesh-terms">
				<article>
					<H1>{title}</H1>
					<Paragraph fontStyle="italic">Last amended: {date}</Paragraph>
					{!isEmpty(contents) && (
						<ol>
							{contents.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ol>
					)}
					<Block
						marginTop="20px"
						marginBottom="20px"
						id="callsesh-terms-content"
					>
						<Markdown
							source={body}
							escapeHtml={false}
							linkTarget={(url) => {
								if (url.indexOf(publicUrl) < 0 || url.charAt(0) !== "/") {
									return "_blank";
								}
								return undefined;
							}}
						/>
					</Block>
				</article>
			</ScreenContainer>
			<style jsx global>
				{`
					#callsesh-terms-content ol {
						list-style: none;
						padding: 0;
						margin: 10px 0;
					}
					#callsesh-terms-content {
						counter-reset: section-counter;
					}
					#callsesh-terms-content > ol {
						counter-increment: section-counter;
						counter-reset: item-counter;
					}
					#callsesh-terms-content > ol > li {
						counter-increment: item-counter;
						padding-left: 40px;
					}
					#callsesh-terms-content > ol > li > ol {
						counter-reset: sub-item-counter;
					}
					#callsesh-terms-content > ol > li > ol > li {
						counter-increment: sub-item-counter;
						padding-left: 50px;
					}
					#callsesh-terms-content > ol > li:before {
						content: counter(section-counter) "." counter(item-counter);
						position: absolute;
						left: 0;
						top: 0px;
						font-weight: 700;
					}
					#callsesh-terms-content > ol > li > ol > li:before {
						content: counter(section-counter) "." counter(item-counter) "."
							counter(sub-item-counter);
						position: absolute;
						left: 0;
						top: 0px;
						font-weight: 700;
					}
					#callsesh-terms h2 {
						${headingStyle}
						margin-top: 40px;
					}
					#callsesh-terms h3 {
						${smallHeadingStyle}
					}
					#callsesh-terms p,
					#callsesh-terms li {
						${paragraphStyle}
						position: relative;
					}
				`}
			</style>
		</Layout>
	);
};

TermsTemplate.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	body: PropTypes.string,
	contents: PropTypes.arrayOf(PropTypes.string)
};

TermsTemplate.defaultProps = {
	title: "",
	date: "",
	body: "",
	contents: []
};

export async function getStaticProps({ params: { slug } = {} }) {
	const rawContent = await import(`@/md/terms/${slug}.md`).then(
		(m) => m.default || m
	);
	const {
		data: { title = "", date = "", contents: tableOfContents = [] },
		content
	} = matter(rawContent);

	return {
		props: {
			title,
			date: new Intl.DateTimeFormat("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			}).format(new Date(date)),
			body: content,
			contents: tableOfContents
		}
	};
}

export async function getStaticPaths() {
	// get all .md files in the md/terms dir
	const terms = await glob("src/md/terms/**/*.md");

	// remove path and extension to leave filename only
	const termsSlugs = terms
		.map((file) =>
			file.replace("src/md/terms/", "").replace(/ /g, "-").slice(0, -3).trim()
		)
		// Handled in terms/index.jsx
		.filter((slug) => slug !== "terms-of-service");

	// create paths with `slug` param
	const paths = termsSlugs.map((slug) => `/terms/${slug}`);

	return {
		paths,
		fallback: false
	};
}

export default TermsTemplate;
