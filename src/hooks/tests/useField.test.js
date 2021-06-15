import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UseFieldComponent } from "./UseFieldComponent";

/*eslint-disable*/
describe("The useField hook", () => {
	let component;
	beforeEach(() => {
		component = render(
			<UseFieldComponent />
		);
	});
	test(" when given 'text' as a parameter, will return a field with no value", () => {
		const input = component.container.querySelector(".test-field");

		expect(input.value).toEqual("");
	})
	test("when given text as a parameter, will return a field with type text", () => {
		const input = component.container.querySelector(".test-field");

		expect(input.type).toEqual("text");
	})
	test("when input is typed into the field, the value will update accordingly", () => {
		const input = component.container.querySelector(".test-field");

		userEvent.type(input, 'Hello, World!');

		expect(input.value).toEqual("Hello, World!")
	})
})