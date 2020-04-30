import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useStyletron } from "baseui";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

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
					maxWidth: "1280px",
					margin: "0 auto",
					padding: "20px",
					position: "relative"
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
			</main>
		</ToasterContainer>
	);
};

export default App;
