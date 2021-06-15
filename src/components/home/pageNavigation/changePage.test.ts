import "@testing-library/jest-dom/extend-expect";
import * as reactRedux from "react-redux";

import { NAVIGATION_ACTIONS } from "../../../redux/actions/actions";
import { changePage } from "./changePage";

const mockDispatch = jest.fn();
const mockUseDispatch = jest.spyOn(reactRedux, "useDispatch");//eslint-disable-line
const nextPageSpy = jest.spyOn(NAVIGATION_ACTIONS, "SHOW_NEXT_PAGE");
const prevPageSpy = jest.spyOn(NAVIGATION_ACTIONS, "SHOW_PREVIOUS_PAGE");

//required to stop error messages in jest output.
window.scrollTo = jest.fn();

describe("the changePage Function", () => {
	beforeEach(() => {
		nextPageSpy.mockClear();
		prevPageSpy.mockClear();
	});
	describe("when given parameter 'next'", () => {
		test(" calls on SHOW_NEXT_PAGE action creator", () => {
			changePage("next", mockDispatch);

			expect(nextPageSpy).toHaveBeenCalled();
		});
		test("and does NOT call on SHOW_PREVIOUS_PAGE action creator", () => {
			changePage("next", mockDispatch);

			expect(prevPageSpy).toHaveBeenCalledTimes(0);
		});
	});
	describe("when given parameter 'previous'", () => {
		test(" calls on SHOW_PREVIOUS_PAGE action creator", () => {
			changePage("previous", mockDispatch);

			expect(prevPageSpy).toHaveBeenCalled();
		});
		test("and does NOT call on SHOW_NEXT_PAGE action creator", () => {
			changePage("previous", mockDispatch);

			expect(nextPageSpy).toHaveBeenCalledTimes(0);
		});
	});
	describe("when given nonsense string as a parameter", () => {
		test(" does not call on SHOW_PREVIOUS_PAGE action creator", () => {
			changePage("garblegarble", mockDispatch);

			expect(prevPageSpy).toHaveBeenCalledTimes(0);
		});
		test("and does NOT call on SHOW_NEXT_PAGE action creator", () => {
			changePage("garblegarble", mockDispatch);

			expect(nextPageSpy).toHaveBeenCalledTimes(0);
		});
	});
});