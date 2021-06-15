import type { RecipeType, PlainAction, ActionWithRecipesPayload, ActionWithSearchPayload } from "./recipeActions";
export type { RecipeType, PlainAction, ActionWithRecipesPayload, ActionWithSearchPayload };

import { GET_RECIPES, SET_RECIPES, SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE, INIT_USER_RECIPES } from "./recipeActions";
export { GET_RECIPES, SET_RECIPES, INIT_USER_RECIPES };

//for testing
export const NAVIGATION_ACTIONS = {
	SHOW_NEXT_PAGE,
	SHOW_PREVIOUS_PAGE
};


import type { ActionWithSavedRecipePayload } from "./saveAndDeleteActions";
export type { ActionWithSavedRecipePayload };

import { SAVE_RECIPE, SAVE_USER_RECIPE, DELETE_RECIPE, DELETE_USER_RECIPE } from "./saveAndDeleteActions";
export { SAVE_RECIPE, SAVE_USER_RECIPE, DELETE_RECIPE, DELETE_USER_RECIPE };


import type { ActionWithUserPayload } from "./loginActions";
export type { ActionWithUserPayload };

import { SET_USER_DETAILS, CLEAR_USER_DETAILS, ATTEMPT_LOGIN, LOGIN_ERROR, VALIDATE_SESSION_DETAILS } from "./loginActions";
export { SET_USER_DETAILS, CLEAR_USER_DETAILS, ATTEMPT_LOGIN, LOGIN_ERROR, VALIDATE_SESSION_DETAILS };

export type Actions = ReturnType<typeof SET_RECIPES>

