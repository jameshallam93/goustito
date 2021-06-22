import "@testing-library/jest-dom/extend-expect";
import { removeLocalStorageData } from "./removeLocalStorageData";



describe("the removeLocalStorageData function", () => {

	test("when items are set beforehand, they are removed by the removeLocalStorageData function", async () => {
		localStorage.setItem("username", "testUser");
		localStorage.setItem("token", "testToken");
		localStorage.setItem("token-expiry", "1000");
		removeLocalStorageData();
		expect(localStorage.getItem("username")).toEqual(null);
		expect(localStorage.getItem("token")).toEqual(null);
		expect(localStorage.getItem("token-expiry")).toEqual(null);
	});

	test("calls on localStorage.removeItem three times", () => {
		const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "removeItem");
		removeLocalStorageData();
		expect(localStorageSpy).toHaveBeenCalledTimes(3);
	});

});
