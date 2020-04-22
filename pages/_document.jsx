import Document, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import * as constants from "../constants";

class MyDocument extends Document {
	static getInitialProps(intialProps) {
		const page = intialProps.renderPage((App) => (props) => (
			<StyletronProvider value={styletron}>
				<App {...props} />
			</StyletronProvider>
		));
		const stylesheets = styletron.getStylesheets() || [];
		return { ...page, stylesheets };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					{this.props.stylesheets.map((sheet, i) => {
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

export default MyDocument;
