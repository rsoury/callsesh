import { useStyletron } from "baseui";

const Index = () => {
	const [css] = useStyletron();

	return (
		<div>
			<p className={css({ fontSize: "32px" })}>Hello by hook</p>
		</div>
	);
};

export default Index;
