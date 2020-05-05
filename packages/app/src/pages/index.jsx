import { useStyletron } from "baseui";
import Layout from "@/components/Layout";

const Index = () => {
	const [css] = useStyletron();

	return (
		<Layout>
			<p className={css({ fontSize: "32px" })}>Hello Callsesh!</p>
		</Layout>
	);
};

export default Index;
