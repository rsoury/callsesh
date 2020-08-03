import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
// import {
// 	Button,
// 	SIZE as BUTTON_SIZE,
// 	SHAPE as BUTTON_SHAPE,
// 	KIND as BUTTON_KIND
// } from "baseui/button";

import SignupActionButton from "@/components/SignupActionButton";
import Highlight from "@/components/Highlight";

const HeroSection = () => {
	const [css, theme] = useStyletron();

	return <section id="features"></section>;
};

export default HeroSection;
