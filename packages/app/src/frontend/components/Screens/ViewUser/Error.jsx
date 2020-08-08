import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import ArrowLeft from "baseui/icon/arrow-left";

import InlineErrorPage from "@/frontend/components/InlineErrorPage";
import Link from "@/frontend/components/Link";
import * as routes from "@/routes";

const ViewUserError = ({ error }) => {
	const [css] = useStyletron();

	return (
		<div>
			<InlineErrorPage statusCode={error.code} title={error.message} />
			<div className={css({ textAlign: "center", marginTop: "30px" })}>
				<Link href={routes.page.index} button>
					<Button
						startEnhancer={() => <ArrowLeft size={22} />}
						kind={BUTTON_KIND.secondary}
					>
						Back to Callsesh
					</Button>
				</Link>
			</div>
		</div>
	);
};

ViewUserError.propTypes = {
	error: PropTypes.shape({
		code: PropTypes.number,
		message: PropTypes.string
	}).isRequired
};

export default ViewUserError;
