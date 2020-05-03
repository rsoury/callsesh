import React from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, Paragraph3 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import { Helmet } from "react-helmet";

import Link from "@/components/Link";

import Form from "./Form";

const Signup = () => {
	const [css] = useStyletron();

	return (
		<>
			<Helmet>
				<title>Sign up to Callsesh</title>
			</Helmet>
			<div>
				<Grid>
					<Cell span={12}>
						<Heading marginTop="0px">Sign Up</Heading>
					</Cell>
				</Grid>
				<Form />
				<Grid>
					<Cell span={12}>
						<Paragraph className={css({ textAlign: "center" })}>
							Already have an account? <Link to="/">Log in</Link>
						</Paragraph>
					</Cell>
				</Grid>
			</div>
		</>
	);
};

export default Signup;
