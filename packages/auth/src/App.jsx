import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { matchPath, withRouter } from "react-router";
import RouterPropTypes from "react-router-prop-types";
import { useStyletron } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

import Header from "@/components/Header";
import { shouldSignup } from "@/utils/auth";

import Signup from "./Signup";
import Login from "./Login";

const App = ({ location }) => {
	const [redirect, setRedirect] = useState("");
	const [css] = useStyletron();

	useEffect(() => {
		// Redirect to signup if action signup and current route is not signup.
		if (shouldSignup()) {
			const match = matchPath(location.pathname, {
				path: "/signup",
				exact: true
			});
			if (!match) {
				setRedirect("/signup");
			}
		}
	}, []);

	if (redirect) {
		return <Redirect to={redirect} />;
	}

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
				id="wagecall-auth"
				className={css({
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100%",
					width: "100%",
					maxWidth: `640px`,
					margin: "0 auto",
					position: "relative"
				})}
			>
				<div className={css({ width: "100%" })}>
					<Header />
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
			</main>
		</ToasterContainer>
	);
};

App.propTypes = {
	location: RouterPropTypes.location.isRequired
};

export default withRouter(App);
