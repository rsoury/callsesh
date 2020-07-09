import { styled } from "baseui";

const ScreenContainer = styled("div", ({ $theme }) => ({
	width: "100%",
	maxWidth: "1000px",
	margin: "0 auto",
	padding: "0 20px 20px",
	[$theme.mediaQuery.maxSmall]: {
		paddingLeft: "0px",
		paddingRight: "0px"
	}
}));

export default ScreenContainer;
