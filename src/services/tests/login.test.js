import "@testing-library/jest-dom/extend-expect";
/*eslint-disable*/
import { loginService } from "../login";
import axios from "axios";

const testUsername = "user";
const testPassword = "pass";

const testRecipes = [
	{
		label: "goodfood",
		url: "http://goodfood.com"
	},
	{
		label: "eats",
		url: "http://eats.com"
	}
]
const testToken = "token";
const testExpiry = 1000;
const credentials = { username: testUsername, password: testPassword }

jest.mock("axios");
describe("the attemptLogin service", () => {
	beforeEach(() => {
		axios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					username: testUsername,
					recipes: testRecipes,
					token: testToken,
					expiry: testExpiry
				}
			})
		)
	})
	test("returns username on successful login", async () => {
		const response = await loginService.attemptLogin(credentials);
		expect(response.username).toBe(testUsername);
	}),
		test("returns recipes on successful login", async () => {
			const response = await loginService.attemptLogin(credentials);
			expect(response.recipes).toBe(testRecipes);
		}),
		test("returns token expiry on successful login", async () => {
			const response = await loginService.attemptLogin(credentials);
			expect(response.expiry).toBe(testExpiry);
		}),

		test("does not return token on successful login", async () => {
			const response = await loginService.attemptLogin(credentials);
			expect(response.token).toBeUndefined();
		}),

		test("calls on localStorage.setItem three times, for the token, expiry, and username", async () => {
			const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "setItem");
			await loginService.attemptLogin(credentials);
			expect(localStorageSpy).toHaveBeenCalledTimes(3);

		})
})