import React from "react";
import NextApp from "next/app";
import { LightTheme, BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";

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
			<StyletronProvider value={styletron} debug={debug} debugAfterHydration>
				<BaseProvider theme={theme}>
					<Component {...pageProps} />
				</BaseProvider>
			</StyletronProvider>
		);
	}
}

export default App;
