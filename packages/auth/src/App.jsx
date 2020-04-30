import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useStyletron } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

import Header from "@/components/Header";

import Signup from "./Signup";
import Login from "./Login";

const App = () => {
	const [css] = useStyletron();

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

export default App;
