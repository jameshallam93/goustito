import "@testing-library/jest-dom/extend-expect";

import { CredentialsType, generateCredentials } from "./generateCredentials";

const username = "username";
const password = "password";


describe("The generateCredentials function", () => {
	const credentials = generateCredentials(username, password);
	test("creates an object", () => {
		expect(typeof credentials).toEqual("object");
	});
	test("which has properties username and password", () => {
		expect(credentials.username).toBeDefined();
		expect(credentials.password).toBeDefined();
	});
	test("which match up to the parameters provided", () => {
		expect(credentials.username).toEqual(username);
		expect(credentials.password).toEqual(password);
	});
});