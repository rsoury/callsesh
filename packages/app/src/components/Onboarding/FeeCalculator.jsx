import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";
import isEmpty from "is-empty";
import { HelpCircle as HelpIcon } from "react-feather";
import { LabelSmall } from "baseui/typography";

import { FEE_MULTIPLIER } from "@/constants";

const FeeCalculator = ({ hourlyRate }) => {
	const [css, theme] = useStyletron();

	return (
		<div>
			<div className={css({ marginBottom: "10px" })}>
				<Tooltip
					content={() => (
						<div className={css({ maxWidth: "300px" })}>
							Our fees allow us to faciliate the platform, user support and
							future development. If you have any questions, please feel free to
							contact Callsesh Support.
						</div>
					)}
					placement={TOOLTIP_PLACEMENT.topLeft}
				>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start"
						})}
					>
						<LabelSmall>
							Callsesh fees are{" "}
							<strong>
								$
								{isEmpty(hourlyRate)
									? "0.00"
									: (FEE_MULTIPLIER * parseFloat(hourlyRate)).toFixed(2)}{" "}
								/ hour
							</strong>
						</LabelSmall>
						<div className={css({ marginLeft: "5px" })}>
							<HelpIcon size={18} />
						</div>
					</div>
				</Tooltip>
			</div>
			<div className={css({ marginBottom: "10px" })}>
				<LabelSmall
					className={css({
						color: `${theme.colors.accent} !important`
					})}
				>
					You will be paid{" "}
					<strong>
						$
						{isEmpty(hourlyRate)
							? "0.00"
							: ((1 - FEE_MULTIPLIER) * parseFloat(hourlyRate)).toFixed(2)}{" "}
						/ hour
					</strong>
				</LabelSmall>
			</div>
		</div>
	);
};

FeeCalculator.propTypes = {
	hourlyRate: PropTypes.string.isRequired
};

export default FeeCalculator;
