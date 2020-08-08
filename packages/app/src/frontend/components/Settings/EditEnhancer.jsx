import React from "react";
import PropTypes from "prop-types";
import {
	Button,
	SHAPE as BUTTON_SHAPE,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { StatefulTooltip as Tooltip } from "baseui/tooltip";
import { Edit2 as EditIcon } from "react-feather";

const EditEnhancer = ({ onClick }) => {
	return (
		<Tooltip content={() => <div>Edit</div>} showArrow renderAll autoFocus>
			<Button
				shape={BUTTON_SHAPE.square}
				size={BUTTON_SIZE.mini}
				kind={BUTTON_KIND.minimal}
				onClick={onClick}
			>
				<EditIcon size={20} />
			</Button>
		</Tooltip>
	);
};

EditEnhancer.propTypes = {
	onClick: PropTypes.func
};

EditEnhancer.defaultProps = {
	onClick() {}
};

export default EditEnhancer;
