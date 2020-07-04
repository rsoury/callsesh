import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { StatefulTooltip as Tooltip } from "baseui/tooltip";

import useUser from "@/hooks/use-user";
import { ChildrenProps } from "@/utils/common-prop-types";

const EnsureVerified = ({ children, inline }) => {
	const [css] = useStyletron();
	const [user, isLoading] = useUser();

	const wrapProps = {
		className: css({
			pointerEvents: "none",
			display: inline ? "inline-block" : "block",
			opacity: "0.5"
		}),
		onClick(e) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	if (isLoading) {
		return <div {...wrapProps}>{children}</div>;
	}

	if (!(user || {}).emailVerified) {
		return (
			<Tooltip
				content={() => (
					<div>
						<strong>Make sure your email is verified before proceeding.</strong>
					</div>
				)}
				showArrow
			>
				<div className={css({ display: inline ? "inline-block" : "block" })}>
					<div {...wrapProps}>{children}</div>
				</div>
			</Tooltip>
		);
	}

	return children;
};

EnsureVerified.propTypes = {
	children: ChildrenProps.isRequired,
	inline: PropTypes.bool
};

EnsureVerified.defaultProps = {
	inline: false
};

export default EnsureVerified;
