import { RecipeType } from "../../services/recipes";

export const harvestRecipeData = (data: any): RecipeType[] => {//eslint-disable-line

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