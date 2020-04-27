import * as db from "@/db";

/* TODO: I need to mock Axios requests */
jest.setTimeout(60000);

const exampleUserResponse = {
	records: [
		{
			fields: {
				"First Name": "Moey",
				"Last Name": "Dw",
				"Phone Number": "+61040220330",
				Username: "moeydw",
				"Local Country": "AU"
			}
		}
	]
};

describe("Database methods", () => {
	it("should create a new user in Airtable", async () => {
		expect.assertions(1);

		const user = await db.createUser({
			firstName: "Moey",
			lastName: "Dw",
			phoneNumber: "+61040220330"
		});

		// expect(mockAxios.post).toHaveBeenCalledWith('/Users')
		expect(user).toEqual(exampleUserResponse);
	});
});
