import React from "react";
import NextApp from "next/app";
import { LightTheme, BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { ToasterContainer, PLACEMENT } from "baseui/toast";
import { DefaultSeo } from "next-seo";
import { engine, debug } from "@config/styletron";
import seoConfig from "@config/seo";

const theme = {
	...LightTheme,
	mediaQuery: {
		small: `@media screen and (min-width: ${LightTheme.breakpoints.small}px)`,
		medium: `@media screen and (min-width: ${LightTheme.breakpoints.medium}px)`,
		large: `@media screen and (min-width: ${LightTheme.breakpoints.large}px)`,
		maxSmall: `@media screen and (max-width: ${
			LightTheme.breakpoints.medium - 1
		}px)`,
		maxMedium: `@media screen and (max-width: ${
			LightTheme.breakpoints.large - 1
		}px)`
	}
};

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<StyletronProvider value={engine} debug={debug} debugAfterHydration>
				<BaseProvider theme={theme}>
					<DefaultSeo {...seoConfig} />
					<ToasterContainer
						placement={PLACEMENT.topRight}
						autoHideDuration={10000}
						overrides={{
							Root: {
								style: {
									zIndex: "99999999"
								}
							}
						}}
					>
						<div id="wagecall-app">
							<Component {...pageProps} />
						</div>
					</ToasterContainer>
				</BaseProvider>
			</StyletronProvider>
		);
	}
}

export default App;