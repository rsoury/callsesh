import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "@/pages/index";

describe("With Enzyme", () => {
	it("App shows content", () => {
		const app = shallow(<App />);

		expect(app.find("div").text().length).toBeGreaterThan(0);
	});
});

describe("With Snapshot Testing", () => {
	it("App shows matches snapshot", () => {
		const component = renderer.create(<App />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
