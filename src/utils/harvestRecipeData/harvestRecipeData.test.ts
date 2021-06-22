import "@testing-library/jest-dom/extend-expect";
import { harvesters } from "./harvestRecipeData";
import { data, harvestedData } from "./data";

describe("the harvest recipe data function", () => {
	test("returns the appropriate data", () => {
		const result = harvesters.harvestRecipeData(data);
		expect(result).toEqual(harvestedData);
	});
});