import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
/*eslint-disable*/
import { InputButton } from "./InputButton";

describe("the input button component", () => {
    let component;
    const hideOrShow = jest.fn()
    beforeEach(() => {
        component = render(
            <InputButton hideOrShow={hideOrShow} />
        )
    })
    test("has type 'submit'", () => {
        const button = component.container.querySelector(".login-form-button");
        expect(button.type).toBe("submit");
    })
    test("and takes the appropriate className from the hideOrShow function", () => {
        hideOrShow.mockReturnValue("hide");
        const component = render(< InputButton hideOrShow={hideOrShow} />)
        const input = component.container.querySelector("input")
        expect(input.className).toBe("login-form-button hide")
    })
})