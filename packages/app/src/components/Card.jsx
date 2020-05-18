import React from "react";
import PropTypes from "prop-types";
import { Card as BaseCard, StyledBody, StyledAction } from "baseui/card";
import { useStyletron } from "baseui";
import { HelpCircle as HelpIcon } from "react-feather";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";
import { Button } from "baseui/button";
import { Block } from "baseui/block";

import { ChildrenProps } from "@/utils/common-prop-types";
import UppercaseLabel from "@/components/UppercaseLabel";

const Card = ({
	title,
	icon,
	children,
	style,
	actionText,
	actionProps,
	helpText,
	helpPlacement,
	actionEnhancer: ActionEnhancer,
	...props
}) => {
	const [css] = useStyletron();

	let Icon = null;
	if (icon) {
		Icon = icon;
	}

	const iconProps = {
		size: 20,
		className: css({ marginRight: "7.5px", width: "20px" })
	};

	return (
		<div className={css({ marginBottom: "30px", ...style })}>
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: "10px"
				})}
			>
				{title && (
					<UppercaseLabel style={{ marginBottom: "0px" }}>
						<div
							className={css({
								flex: "1",
								display: "flex",
								alignItems: "center"
							})}
						>
							{Icon && <Icon {...iconProps} />}
							<span>{title}</span>
						</div>
					</UppercaseLabel>
				)}
				<div>
					{actionText && <Button {...actionProps}>{actionText}</Button>}
					{helpText && (
						<div
							className={css({
								display: "flex",
								justifyContent: "flex-end",
								marginLeft: "10px"
							})}
						>
							<Tooltip
								content={() => <Block maxWidth="250px">{helpText}</Block>}
								showArrow
								renderAll
								autoFocus
								placement={helpPlacement}
							>
								<div className={css({ display: "flex" })}>
									<HelpIcon size={20} />
								</div>
							</Tooltip>
						</div>
					)}
				</div>
			</div>
			<BaseCard {...props}>
				<StyledBody>{children}</StyledBody>
				{ActionEnhancer && (
					<StyledAction>
						<ActionEnhancer />
					</StyledAction>
				)}
			</BaseCard>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.func,
		PropTypes.element,
		PropTypes.elementType
	]),
	actionText: PropTypes.string,
	actionProps: PropTypes.object,
	helpText: PropTypes.string,
	children: ChildrenProps.isRequired,
	style: PropTypes.object,
	helpPlacement: PropTypes.string,
	actionEnhancer: ChildrenProps
};

Card.defaultProps = {
	title: "",
	icon: null,
	actionText: "",
	actionProps: {},
	helpText: "",
	style: {},
	helpPlacement: TOOLTIP_PLACEMENT.auto,
	actionEnhancer: null
};

export default Card;
