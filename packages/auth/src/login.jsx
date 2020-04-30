/**
 * Login page
 */

import React from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, Paragraph3 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import { Helmet } from "react-helmet";

import Link from "@/components/Link";

import Form from "./Form";

const Login = () => {
	const [css] = useStyletron();

	return (
		<>
			<Helmet>
				<title>Log in to Wagecall</title>
			</Helmet>
			<div>
				<Grid>
					<Cell span={12}>
						<Heading marginTop="0px">Log In</Heading>
					</Cell>
				</Grid>
				<Form />
				<Grid>
					<Cell span={12}>
						<Paragraph className={css({ textAlign: "center" })}>
							Don&apos;t have an acount? <Link to="/signup">Sign up</Link>
						</Paragraph>
					</Cell>
				</Grid>
			</div>
		</>
	);
};

export default Login;
