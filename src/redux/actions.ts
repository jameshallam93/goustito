
export type RecipeType = {
	label: string,
	url: string,
}

export type ActionWithRecipesPayload = {
	type: string,
	payload: {
		recipes: RecipeType[]
	}
}
export type ActionWithSavedRecipePayload = {
	type: string,
	payload: {
		recipeId: string,
		username: string
	}
}
export type ActionWithSearchPayload = {
	type: string,
	payload: {
		searchTerms: string,
		mealTypes: string[]
	}
}
export type ActionWithUserPayload = {
	type: string,
	payload: {
		username: string | null,
		token: string | null
	}
}

export type PlainAction = {
	type: string;
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

export const SET_USER_DETAILS = (username: string, token: string | null): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username,
			token
		}
	};
};
export const CLEAR_USER_DETAILS = (): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username: null,
			token: null
		}
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

export const SAVE_USER_RECIPE = (recipeId: string, username: string): ActionWithSavedRecipePayload => {
	return {
		type: "SAVE_USER_RECIPE",
		payload: {
			recipeId,
			username
		}
	};
};
export const SAVE_RECIPE = (recipeId: string, username: string): ActionWithSavedRecipePayload => {
	return {
		type: "SAVE_RECIPE",
		payload: {
			recipeId,
			username
		}
	};
};
export type Actions = ReturnType<typeof SET_RECIPES>

