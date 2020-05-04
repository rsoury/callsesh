import React from "react";
import { useStyletron } from "baseui";

const logoUrl = "/static/logo/callsesh-text-logo.png";

const Logo = () => {
	const [css] = useStyletron();

	return (
		<div
			className={css({
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			})}
		>
			<img
				src={logoUrl}
				alt="callsesh logo"
				title="callsesh"
				className={css({ width: "100%", maxWidth: "120px" })}
			/>
		</div>
	);
};

export default Logo;
