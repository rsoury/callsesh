import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom"; // Using HashRouter to route ontop of Auth0 Url.
import { BaseProvider, LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { Helmet } from "react-helmet";
import App from "./App";
import * as serviceWorker from "./service-worker";
import "modern-normalize";

const rootEl = document.getElementById("root");

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

const engine = new Styletron();

// Ensure that button loaders render appropriately with style
ReactDOM.render(
	<StyletronProvider value={engine}>
		<Helmet>
			<style type="text/css">
				{`
				button > div:nth-child(2) > span{
					box-sizing: content-box;
				}
			`}
			</style>
		</Helmet>
		<BaseProvider theme={theme}>
			<Router basename="/">
				<App />
			</Router>
		</BaseProvider>
	</StyletronProvider>,
	rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
