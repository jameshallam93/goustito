
export type ActionWithSavedRecipePayload = {
	type: string,
	payload: {
		recipeId: string,
		currentUser: string
	}
}

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
