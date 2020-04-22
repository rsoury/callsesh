import NextDocument, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { engine } from "@/config/styletron";
import * as constants from "@/constants";

class Document extends NextDocument {
	static getInitialProps(context) {
		const page = context.renderPage((App) => (props) => (
			<StyletronProvider value={engine}>
				<App {...props} />
			</StyletronProvider>
		));
		const stylesheets = engine.getStylesheets() || [];
		return { ...page, stylesheets };
	}

	render() {
		const { stylesheets } = this.props;

		return (
			<html lang="en">
				<Head>
					{stylesheets.map((sheet, i) => {
						console.log(sheet.attrs);

						return (
							<style
								className={constants.HYDRATE_CLASS}
								dangerouslySetInnerHTML={{ __html: sheet.css }}
								media={sheet.attrs.media}
								data-hydrate={sheet.attrs["data-hydrate"]}
								key={i} // eslint-disable-line
							/>
						);
					})}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default Document;
