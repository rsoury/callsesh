import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { H1 as Heading } from "baseui/typography";
import { Avatar } from "baseui/avatar";

import UppercaseLabel from "@/components/UppercaseLabel";

const InSessionWith = ({ name, picture }) => {
	const [css] = useStyletron();

	return (
		<div className={css({ textAlign: "center" })}>
			<UppercaseLabel style={{ marginBottom: "10px", opacity: "0.3" }}>
				In session with
			</UppercaseLabel>
			<Avatar name={name} size="scale4800" src={picture} />
			<Heading>
				<strong className={css({ fontWeight: 900 })}>{name}</strong>
			</Heading>
		</div>
	);
};

InSessionWith.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired
};

export default InSessionWith;
