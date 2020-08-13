import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Tag } from "baseui/tag";
import { StatefulTooltip as Tooltip } from "baseui/tooltip";

import * as fees from "@/utils/fees";

const ActionTags = ({ currency }) => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				marginLeft: "-5px",
				marginRight: "-5px",
				marginBottom: theme.sizing.scale400
			})}
		>
			<Tooltip
				showArrow
				content={() => (
					<div>Only charged if your call session is successfully connected</div>
				)}
			>
				<span
					className={css({
						display: "inline-block"
					})}
				>
					<Tag closeable={false}>
						<span>
							Service Fee: <strong>{fees.preAuth().toString()}</strong>
						</span>
					</Tag>
				</span>
			</Tooltip>
			<span
				className={css({
					display: "inline-block"
				})}
			>
				<Tag closeable={false}>
					<span>
						Currency: <strong>{currency}</strong>
					</span>
				</Tag>
			</span>
		</div>
	);
};

ActionTags.propTypes = {
	currency: PropTypes.string.isRequired
};

export default ActionTags;
