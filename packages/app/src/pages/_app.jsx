import React from "react";
import NextApp from "next/app";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { ToasterContainer, PLACEMENT as TOOLTIP_PLACEMENT } from "baseui/toast";
import { DefaultSeo } from "next-seo";
import initFastclick from "react-fastclick";
import NProgress from "nprogress";
import Router from "next/router";

import { engine, debug } from "@config/styletron";
import seoConfig from "@config/seo";
import UserProvider from "@/components/Providers/UserProvider";
import RouteReferrerProvider from "@/components/Providers/RouteReferrerProvider";

import "setimmediate";
import "modern-normalize";
import "nprogress/nprogress.css";
import "@/styles.css";

// Add a page load progress indicator
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Setup Baseui Theme
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
					<UserProvider>
						<RouteReferrerProvider>
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
						</RouteReferrerProvider>
					</UserProvider>
				</BaseProvider>
			</StyletronProvider>
		);
	}
}

export default App;
