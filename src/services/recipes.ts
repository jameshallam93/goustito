import axios, { AxiosResponse } from "axios";

import { generateRequest } from "./generateRequest";

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

const harvestRecipeData = (data: any): RecipeType[] => {//eslint-disable-line

	const recipes: RecipeType[] = [];

	data.hits.map((recipe: any) => {//eslint-disable-line
		const harvestedRecipe: RecipeType = {
			id: recipe.recipe.uri,
			label: recipe.recipe.label,
			url: recipe.recipe.url,
			img: recipe.recipe.image,
			calories: recipe.recipe.calories,
			source: recipe.recipe.source,
			ingredients: recipe.recipe.ingredientLines,
			servings: recipe.recipe.yield
		};
		recipes.push(harvestedRecipe);
	});
	return recipes;
};

const recipeService = {

	async searchByName(searchTerms: string, mealTypes: string[]) { //eslint-disable-line
		const request = generateRequest(searchTerms, mealTypes);
		const response = await axios.get(request);
		console.log(response);
		const filteredResponse = harvestRecipeData(response.data);
		console.log(filteredResponse);
		return filteredResponse;
	},

	async saveToVault(recipeId: string, userValidation: UserValidation): Promise<AxiosResponse> {
		const request = `${baseUrl}/api/recipe/saveById`;
		const response = await axios.post(request, { recipeId, userValidation });
		console.log(response);
		return response.data;
	},
	async deleteFromVault(recipeId: string, userValidation: UserValidation): Promise<AxiosResponse> {
		const request = `${baseUrl}/api/recipe/deleteById`;
		const response = await axios.post(request, { recipeId, userValidation });
		return response.data;
	}
};

export { recipeService };