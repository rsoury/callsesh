import React from "react";
import { useStyletron } from "baseui";
import { ChildrenProps } from "@/utils/common-prop-types";

const PhoneMockup = ({ children }) => {
	const [css] = useStyletron();

	return (
		<div className="device device-iphone-x">
			<div className="device-frame">
				<div className={css({ overflow: "hidden", borderRadius: "30px" })}>
					{children}
				</div>
			</div>
			<div className="device-stripe" />
			<div className="device-header" />
			<div className="device-sensors" />
			<div className="device-btns" />
			<div className="device-power" />
		</div>
	);
};

PhoneMockup.propTypes = {
	children: ChildrenProps.isRequired
};

export default PhoneMockup;
