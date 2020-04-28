import { useStyletron } from "baseui";
import Header from "@/components/Header";

const Index = () => {
	const [css] = useStyletron();

	return (
		<main>
			<Header />
			<p className={css({ fontSize: "32px" })}>Styled by hook</p>
		</main>
	);
};

export default Index;
