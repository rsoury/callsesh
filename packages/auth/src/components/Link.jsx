import { StyledLink } from "baseui/link";
import { Link as RouterLink } from "react-router-dom";

const Link = (props) => {
	return <StyledLink $as={RouterLink} {...props} />;
};

export default Link;
