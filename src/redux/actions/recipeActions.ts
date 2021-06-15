import { RecipeType } from "../../services/recipes";

export type PlainAction = {
	type: string;
}
export type ActionWithRecipesPayload = {
	type: string,
	payload: {
		recipes: RecipeType[]
	}
}

export type ActionWithSearchPayload = {
	type: string,
	payload: {
		searchTerms: string,
		mealTypes: string[]
	}
}



export const GET_RECIPES = (searchTerms: string, mealTypes: string[]): ActionWithSearchPayload => {
	return {
		type: "GET_RECIPES",
		payload: {
			searchTerms,
			mealTypes
		}
	};
};

export const SET_RECIPES = (recipes: RecipeType[]): ActionWithRecipesPayload => {
	return {
		type: "SET_RECIPES",
		payload: {
			recipes
		}
	};
};
export const SHOW_NEXT_PAGE = (): PlainAction => {
	return {
		type: "SHOW_NEXT_PAGE"
	};
};
export const SHOW_PREVIOUS_PAGE = (): PlainAction => {
	return {
		type: "SHOW_PREVIOUS_PAGE"
	};
};



export const INIT_USER_RECIPES = (recipeIds: string[]) => {
	return {
		type: "INIT_USER_RECIPES",
		payload: {
			recipeIds
		}
	};
};
