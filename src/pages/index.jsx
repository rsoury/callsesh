import { useStyletron } from "baseui";
import PropTypes from "prop-types";
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

Index.getServerSideProps = ({ req }) => {
	return {
		isAuth: req.isAuthenticated()
	};
};

Index.propTypes = {
	isAuth: PropTypes.bool.isRequired
};

export default Index;
