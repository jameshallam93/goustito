import "@testing-library/jest-dom/extend-expect";
import React from "react";
/*eslint-disable*/
import { UseTogglableComponent } from "./useTogglableComponent";
import { fireEvent, render } from "@testing-library/react";

describe("the useToggle hook", () => {
	let component;

	beforeEach(() => {
		component = render(
			<UseTogglableComponent />
		)

	})

	test("initially starts with a value of false, as passed to it as a parameter", () => {
		const button = component.container.querySelector(".togglable-button");
		expect(button).toHaveTextContent("false");
	});
	test("when the button with onClick set to toggle, changes value to true.", async () => {
		const button = component.container.querySelector(".togglable-button");
		await fireEvent.click(button)
		expect(button).toHaveTextContent("true");
	})
});
