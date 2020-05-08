import React from "react";
import NextApp from "next/app";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { ToasterContainer, PLACEMENT as TOOLTIP_PLACEMENT } from "baseui/toast";
import { DefaultSeo } from "next-seo";
import initFastclick from "react-fastclick";

import { engine, debug } from "@config/styletron";
import seoConfig from "@config/seo";

import "setimmediate";
import "modern-normalize";
import "@/styles.css";

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

const Container = styled("div", {
	maxWidth: "1024px",
	margin: "0 auto",
	width: "100%"
});

class App extends NextApp {
	componentDidMount() {
		if (typeof window !== "undefined") {
			initFastclick();
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<StyletronProvider value={engine} debug={debug} debugAfterHydration>
				<BaseProvider theme={theme}>
					<DefaultSeo {...seoConfig} />
					<ToasterContainer
						placement={TOOLTIP_PLACEMENT.topRight}
						autoHideDuration={10000}
						overrides={{
							Root: {
								style: {
									zIndex: "99999999"
								}
							}
						}}
					>
						<Container id="callsesh-app">
							<Component {...pageProps} />
						</Container>
					</ToasterContainer>
				</BaseProvider>
			</StyletronProvider>
		);
	}
}

export default App;
