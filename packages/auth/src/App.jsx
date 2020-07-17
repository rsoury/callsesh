import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { matchPath, withRouter } from "react-router";
import RouterPropTypes from "react-router-prop-types";
import { useStyletron } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";
import { Paragraph4 as Paragraph } from "baseui/typography";

import Link from "@/components/Link";
import Header from "@/components/Header";
import { shouldSignup } from "@/utils/auth";

import Signup from "./Signup";
import Login from "./Login";
import CountryProvider from "./CountryProvider";

let actionConsumed = false;

const tosUrl = `https://callsesh.com/terms`;

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
	}, [location.pathname, history]);

	return (
		<CountryProvider>
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
							<div>
								<Paragraph
									className={css({
										maxWidth: "300px",
										margin: "20px auto",
										textAlign: "center"
									})}
								>
									By registering, authenticating and using a Callsesh account,
									you agree to our{" "}
									<Link
										to={tosUrl}
										target="_blank"
										rel="noopener noreferrer"
										standard
									>
										Terms of Service
									</Link>
								</Paragraph>
							</div>
						</div>
					</div>
				</main>
			</ToasterContainer>
		</CountryProvider>
	);
};

App.propTypes = {
	location: RouterPropTypes.location.isRequired,
	history: RouterPropTypes.history.isRequired
};

export default withRouter(App);
