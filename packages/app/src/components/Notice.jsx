import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Notification } from "baseui/notification";
import { Label2 as Label } from "baseui/typography";
import get from "lodash/get";
import set from "lodash/set";
import isEmpty from "is-empty";

import { ChildrenProps } from "@/utils/common-prop-types";

const Notice = ({ icon: Icon, kind, overrides, children, ...props }) => {
	const [css, theme] = useStyletron();

	let kindStyle = {};
	if (isEmpty(kind)) {
		kindStyle = {
			backgroundColor: theme.colors.primary100,
			color: theme.colors.primary
		};
	}

	// Set default overrides
	const bodyStyle = get(overrides, "Body.style", {});
	set(overrides, "Body.style", {
		borderTopLeftRadius: "8px",
		borderTopRightRadius: "8px",
		borderBottomLeftRadius: "8px",
		borderBottomRightRadius: "8px",
		marginTop: "0px",
		marginBottom: "0px",
		marginLeft: "0px",
		marginRight: "0px",
		width: "100%",
		...bodyStyle,
		...kindStyle
	});

	return (
		<Notification overrides={overrides} kind={kind} {...props}>
			{() => (
				<div className={css({ display: "flex", alignItems: "center" })}>
					{Icon && (
						<div className={css({ marginRight: "10px" })}>
							<Icon size={24} />
						</div>
					)}
					<Label>{children}</Label>
				</div>
			)}
		</Notification>
	);
};

Notice.propTypes = {
	children: ChildrenProps.isRequired,
	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
	kind: PropTypes.string,
	overrides: PropTypes.object
};

Notice.defaultProps = {
	icon: null,
	kind: "",
	overrides: {}
};

export default Notice;
