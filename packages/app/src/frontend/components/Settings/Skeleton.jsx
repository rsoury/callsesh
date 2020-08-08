import React from "react";
import Skeleton from "react-loading-skeleton";
import { Grid, Cell } from "baseui/layout-grid";
import { useStyletron } from "baseui";

const SettingsSkeleton = () => {
	const [css] = useStyletron();

	return (
		<Grid>
			{[0, 1, 2, 3, 4, 5].map((key) => (
				<Cell key={key} span={[12, 4, 6]}>
					<div className={css({ margin: "10px 0 20px 0" })}>
						<Skeleton height={50} />
					</div>
				</Cell>
			))}
		</Grid>
	);
};

export default SettingsSkeleton;
