import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import {
	StatefulTooltip as Tooltip,
	PLACEMENT as TOOLTIP_PLACEMENT
} from "baseui/tooltip";
import { HelpCircle as HelpIcon } from "react-feather";
import { LabelSmall } from "baseui/typography";
import * as fees from "@/utils/fees";

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
					showArrow
				>
					<div
						className={css({
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "flex-start"
						})}
					>
						<LabelSmall>
							Callsesh fees are{" "}
							<strong>{fees.applicationRate(hourlyRate)} / hour</strong>
						</LabelSmall>
						<div className={css({ marginLeft: "10px", display: "flex" })}>
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
					You will be paid <strong>{fees.payoutRate(hourlyRate)} / hour</strong>
				</LabelSmall>
			</div>
		</div>
	);
};

FeeCalculator.propTypes = {
	hourlyRate: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired
};

export default FeeCalculator;
