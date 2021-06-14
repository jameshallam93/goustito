import { UserValidation } from "../services/recipes";


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
		currentUser: string
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
		password?: string | null
	}
}
export type ActionWithCredentialsPayload = {
	type: string,
	payload: {
		credentials: {
			username: string | null,
			password?: string | null
		}
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

export const SET_USER_DETAILS = (username: string): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username
		}
	};
};
export const CLEAR_USER_DETAILS = (): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username: null,
		}
	};
};

export const ATTEMPT_LOGIN = (credentials: any) => {
	return {
		type: "ATTEMPT_LOGIN",
		payload: {
			credentials
		}
	};
};

export const LOGIN_ERROR = (error: any) => {
	return {
		type: "LOGIN_ERROR",
		payload: {
			error
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

export const SAVE_USER_RECIPE = (recipeId: string, currentUser: string): ActionWithSavedRecipePayload => {
	return {
		type: "SAVE_USER_RECIPE",
		payload: {
			recipeId,
			currentUser
		}
	};
};
export const SAVE_RECIPE = (recipeId: string, currentUser: string): ActionWithSavedRecipePayload => {
	return {
		type: "SAVE_RECIPE",
		payload: {
			recipeId,
			currentUser
		}
	};
};
export const DELETE_USER_RECIPE = (recipeId: string, currentUser: string): ActionWithSavedRecipePayload => {
	return {
		type: "DELETE_USER_RECIPE",
		payload: {
			recipeId,
			currentUser
		}
	};
};
export const DELETE_RECIPE = (recipeId: string, currentUser: string): ActionWithSavedRecipePayload => {
	return {
		type: "DELETE_RECIPE",
		payload: {
			recipeId,
			currentUser
		}
	};
};

export type Actions = ReturnType<typeof SET_RECIPES>

