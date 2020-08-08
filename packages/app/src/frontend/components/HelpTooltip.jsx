import React from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { HelpCircle as HelpIcon } from "react-feather";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";
import { Block } from "baseui/block";
import isEmpty from "is-empty";

import { ChildrenProps } from "@/frontend/utils/common-prop-types";

const HelpTooltip = ({ text, placement, size, style, children }) => {
	const [css] = useStyletron();

	const icon = (
		<span className={css({ display: "flex" })}>
			<HelpIcon size={size} />
		</span>
	);

	return (
		<span
			className={css({
				display: "flex",
				...style
			})}
		>
			<Tooltip
				content={() => <Block maxWidth="250px">{text}</Block>}
				showArrow
				renderAll
				autoFocus
				placement={placement}
			>
				{isEmpty(children) ? (
					icon
				) : (
					<span className={css({ display: "flex", alignItems: "center" })}>
						<span className={css({ display: "flex", marginRight: "5px" })}>
							{children}
						</span>
						{icon}
					</span>
				)}
			</Tooltip>
		</span>
	);
};

HelpTooltip.propTypes = {
	text: PropTypes.string,
	placement: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.number,
	children: ChildrenProps
};

HelpTooltip.defaultProps = {
	text: "",
	placement: TOOLTIP_PLACEMENT.auto,
	style: {},
	size: 20,
	children: null
};

export default HelpTooltip;
