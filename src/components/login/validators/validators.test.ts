import { validators } from "./validators";

const validUsername = "Username";
const validPassword = "Password1!";

const passwordTooShort = "Pas%1";
const passwordNoUpper = "password1!";
const passwordNoSpecial = "Password1";
const passwordNoNumber = "Password!";

describe("when given a valid username", () => {
	test("the usernameIsvalid function returns true", () => {
		const validity = validators.usernameIsValid(validUsername);
		expect(validity).toBe(true);
	});
});
describe("when given a password that is too short", () => {
	test("the passwordIsValid function returns false", () => {
		const validity = validators.passwordIsValid(passwordTooShort);
		expect(validity).toBe(false);
	});
	test("the passwordLength function returns false", () => {
		const validity = validators.passwordLength(passwordTooShort);
		expect(validity).toBe(false);
	});
});
describe("when given a password with no uppercase letters", () => {
	test("the passwordIsValid function returns false", () => {
		const validity = validators.passwordIsValid(passwordNoUpper);
		expect(validity).toBe(false);
	});
	test("the passwordContainsUpper function returns false", () => {
		const validity = validators.passwordContainsUpper(passwordNoUpper);
		expect(validity).toBe(false);
	});
});
describe("when given a password with no special characters", () => {
	test("the passwordIsValid function returns false", () => {
		const validity = validators.passwordIsValid(passwordNoSpecial);
		expect(validity).toBe(false);
	});
	test("the passwordContainsSpecial function returns false", () => {
		const validity = validators.passwordContainsSpecial(passwordNoSpecial);
		expect(validity).toBe(false);
	});
});
describe("when given a password with no numbers", () => {
	test("the passwordIsValid function returns false", () => {
		const validity = validators.passwordIsValid(passwordNoNumber);
		expect(validity).toBe(false);
	});
	test("the passwordContainsNumber function returns false", () => {
		const validity = validators.passwordContainsNumber(passwordNoNumber);
		expect(validity).toBe(false);
	});
});

//must keep these tests last
describe("When given a valid password", () => {
	describe("the passwordIsValid function", () => {
		test("returns true", () => {
			const validity = validators.passwordIsValid(validPassword);
			expect(validity).toBe(true);
		});
		test("calls on the appropriate password validator functions", () => {
			const upperSpy = jest.spyOn(validators, "passwordContainsUpper");
			const specialSpy = jest.spyOn(validators, "passwordContainsSpecial");
			const numberSpy = jest.spyOn(validators, "passwordContainsNumber");
			const lengthSpy = jest.spyOn(validators, "passwordLength");

			validators.passwordIsValid(validPassword);
			expect(upperSpy).toHaveBeenCalledTimes(1);
			expect(specialSpy).toHaveBeenCalledTimes(1);
			expect(numberSpy).toHaveBeenCalledTimes(1);
			expect(lengthSpy).toHaveBeenCalledTimes(1);
		});
	});
});