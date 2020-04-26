import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import Header from "@/components/Header";

const Index = ({ isAuth }) => {
	const [css] = useStyletron();

	return (
		<main>
			<Header isAuthenticated={isAuth} />
			<p className={css({ fontSize: "32px" })}>Styled by hook</p>
		</main>
	);
};

export const getServerSideProps = ({ req }) => {
	return {
		props: {
			isAuth: !isEmpty(req.user)
		}
	};
};

Index.propTypes = {
	isAuth: PropTypes.bool.isRequired
};

export default Index;
