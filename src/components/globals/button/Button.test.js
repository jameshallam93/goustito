import { render } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
/*eslint-disable*/
import { Button } from "./Button";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("The Button component", () => {
	let component;
	const handleClick = jest.fn();

	const hideOrShow = jest.fn()

	beforeEach(() => {
		component = render(
			<Button onClick={handleClick}
				hideOrShow={hideOrShow}
				label="Test button" />
		)
	})
	test("when rendered, displays the label prop that is passed to it", () => {
		const button = component.container.querySelector(".button");
		expect(button).toHaveTextContent("Test button");
	})
	test("when the button is clicked, it calls the onClick method that was passed to it", () => {
		const button = component.container.querySelector(".button");
		userEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	})
	test("if provided a hideOrShow function which returns hide, has a className of hide", () => {
		hideOrShow.mockReturnValue("hide");
		const hiddenComponent = render(<Button label="test" onClick={handleClick} hideOrShow={hideOrShow} />);
		const hiddenButton = hiddenComponent.container.querySelector(".button");
		expect(hiddenButton.className).toEqual("button hide");
	})

})
