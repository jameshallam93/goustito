import axios, { AxiosResponse } from "axios";

import { harvesters } from "../utils/harvestRecipeData/harvestRecipeData";

const baseUrl = "http://localhost:3001";

export type RecipeType = {
	id: string,
	label: string,
	url: string,
	img: string,
	calories: number,
	source: string,
	ingredients: string[],
	servings: number
}

export type UserValidation = {
	username: string | null,
	token: string | null
}

const recipeService = {

	async searchByName(searchTerms: string, mealTypes: string[]): Promise<RecipeType[]> {
		const response = await axios.post(`${baseUrl}/api/recipe/search`, { searchTerms, mealTypes });
		const filteredResponse = harvesters.harvestRecipeData(response.data);
		return filteredResponse;
	},

	async fetchUserRecipes(currentUser: string): Promise<string[]> {
		const request = `${baseUrl}/api/recipe/userRecipes/${currentUser}`;
		const token = localStorage.getItem("token");

		const response = await axios.get(request, {
			headers: {
				"authorization": `Bearer ${token}`
			}
		});
		return response.data;
	},

	async saveToVault(recipe: RecipeType, currentUser: string): Promise<AxiosResponse> {
		const request = `${baseUrl}/api/recipe/saveById`;
		const token = localStorage.getItem("token");

		const response = await axios.post(
			request,
			{ recipe, currentUser },
			{
				headers: {
					"authorization": `Bearer ${token}`
				}
			}
		);
		return response.data;
	},

	async deleteFromVault(recipeId: string, currentUser: string): Promise<AxiosResponse> {
		const request = `${baseUrl}/api/recipe/deleteById`;
		const token = localStorage.getItem("token");

		const response = await axios.post(
			request,
			{ recipeId, currentUser },
			{
				headers: {
					authorization: `Bearer ${token}`
				}
			}
		);
		return response.data;
	}
};

export { recipeService };