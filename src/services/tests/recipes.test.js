import "@testing-library/jest-dom/extend-expect";
/*eslint-disable*/
import { recipeService } from "../recipes";
import axios from "axios";
import { data, harvestedData, mockRecipes } from "./recipeData";
import { harvesters } from "../../utils/harvestRecipeData/harvestRecipeData";


const mockUsername = "testuser";

describe("the fetchUserRecipes service", () => {
	beforeEach(() => {
		jest.mock("axios");
		axios.get.mockImplementation(() =>
			Promise.resolve({
				data: {
					recipes: [
						...mockRecipes
					]
				}
			})
		)
	})

	test("returns mock data when called with valid username,", async () => {
		const returnedData = await recipeService.fetchUserRecipes(mockUsername);
		expect(returnedData.recipes).toEqual(mockRecipes);
	})

	const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "getItem")
		.mockImplementation(() => "someFakeToken");
	test("calls on localStorage.getItem to collect the token", async () => {

		await recipeService.fetchUserRecipes(mockUsername);
		expect(localStorageSpy).toHaveBeenCalledTimes(1);
	})
})

describe("the searchByName service", () => {
	beforeEach(() => {
		jest.mock("axios");
		axios.post.mockImplementation(() =>
			data
		)
	})

	test("returns harvested data", async () => {
		const response = await recipeService.searchByName("test", ["Breakfast", "lunch"]);
		console.log(response);
		expect(response).toEqual(harvestedData);
	})
	test("calls on harvestRecipeData", async () => {
		const harvesterSpy = jest.spyOn(harvesters, "harvestRecipeData")
		await recipeService.searchByName("test", ["Breakfast", "lunch"]);
		expect(harvesterSpy).toHaveBeenCalledTimes(1);
	})
})

describe("the deleteFromVault service", () => {
	beforeEach(() => {
		axios.post.mockImplementation(() =>
			Promise.resolve({
				data: "FakeRecipeId"
			})
		)
	})
	test("returns the deleted recipe id on successful deletion", async () => {
		const response = await recipeService.deleteFromVault("FakeRecipeId", "FakeUser");
		expect(response).toBe("FakeRecipeId")
	})
	test("calls on localStorage.getItem to collect the token", async () => {
		const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "getItem")
		await recipeService.deleteFromVault("FakeRecipeId", "FakeUser");
		expect(localStorageSpy).toHaveBeenCalledTimes(1);
	})
})

describe("the saveToVault service", () => {
	const testRecipe = {
		recipe: {
			label: "testLabel"
		}
	}
	beforeEach(() => {
		axios.post.mockImplementation(() =>
			Promise.resolve({
				data: {
					testRecipe
				}
			})
		)
	})
	test("returns the submitted recipe on successful saving", async () => {
		const response = await recipeService.saveToVault(testRecipe, "testUser");
		expect(response.testRecipe).toEqual(testRecipe);
	})
	test("calls on localStorage.getItem to collect user token", async () => {
		const localStorageSpy = jest.spyOn(window.localStorage.__proto__, "getItem")
		await recipeService.saveToVault(testRecipe, "testUser");
		expect(localStorageSpy).toHaveBeenCalledTimes(1);
	})
})