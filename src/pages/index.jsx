import { useStyletron } from "baseui";

const Index = () => {
	const [css] = useStyletron();

	return (
		<div>
			<p className={css({ fontSize: "32px" })}>Styled by hook</p>
		</div>
	);
};

export default Index;
