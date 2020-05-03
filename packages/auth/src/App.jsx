import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { matchPath, withRouter } from "react-router";
import RouterPropTypes from "react-router-prop-types";
import { useStyletron } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

import Header from "@/components/Header";
import { shouldSignup } from "@/utils/auth";

import Signup from "./Signup";
import Login from "./Login";

let actionConsumed = false;

const App = ({ location, history }) => {
	const [css] = useStyletron();

	useEffect(() => {
		// Redirect to signup if action signup and current route is not signup.
		if (!actionConsumed) {
			if (shouldSignup()) {
				const match = matchPath(location.pathname, {
					path: "/signup",
					exact: true
				});
				if (!match) {
					history.push("/signup");
				}
			}
			actionConsumed = true;
		}
	}, [location.pathname, actionConsumed]);

	return (
		<ToasterContainer
			placement={PLACEMENT.topRight}
			autoHideDuration={10000}
			overrides={{
				Root: {
					style: {
						zIndex: "9999999"
					}
				}
			}}
		>
			<main
				id="callsesh-auth"
				className={css({
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100%",
					width: "100%",
					maxWidth: `800px`,
					margin: "0 auto",
					position: "relative"
				})}
			>
				<div className={css({ width: "100%" })}>
					<Header />
					<div
						className={css({
							maxWidth: "640px",
							width: "100%",
							margin: "0 auto"
						})}
					>
						<Switch>
							<Route exact path="/signup">
								<Signup />
							</Route>
							<Route exact path="/">
								<Login />
							</Route>
							<Route path="*">
								<Redirect to="/" />
							</Route>
						</Switch>
					</div>
				</div>
			</main>
		</ToasterContainer>
	);
};

App.propTypes = {
	location: RouterPropTypes.location.isRequired,
	history: RouterPropTypes.history.isRequired
};

export default withRouter(App);
