import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import {
	Button,
	KIND as BUTTON_KIND,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import { Edit2 as EditIcon } from "react-feather";

const EditLabel = ({ label, ...props }) => {
	const [css] = useStyletron();

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "space-between",
				position: "relative"
			})}
		>
			<div>{label}</div>
			<Button
				className={css({
					position: "absolute",
					right: "0px",
					bottom: "-10px"
				})}
				startEnhancer={() => <EditIcon size={20} />}
				kind={BUTTON_KIND.minimal}
				size={BUTTON_SIZE.mini}
				{...props}
			>
				Edit
			</Button>
		</div>
	);
};

EditLabel.propTypes = {
	label: PropTypes.string.isRequired
};

export default EditLabel;
