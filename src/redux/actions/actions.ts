import type { PlainAction, ActionWithRecipesPayload, ActionWithSearchPayload, CLEAR_USER_RECIPES } from "./recipeActions";
export type { PlainAction, ActionWithRecipesPayload, ActionWithSearchPayload };

import { GET_RECIPES, SET_RECIPES, SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE, INIT_USER_RECIPES } from "./recipeActions";
export { GET_RECIPES, SET_RECIPES, INIT_USER_RECIPES };

//for testing
export const NAVIGATION_ACTIONS = {
	SHOW_NEXT_PAGE,
	SHOW_PREVIOUS_PAGE
};
//this isn't working - find a way to have non-any type in reducers.
export type userReducerActions = ReturnType<typeof SET_USER_DETAILS | typeof CLEAR_USER_DETAILS | typeof INIT_USER_RECIPES | typeof CLEAR_USER_RECIPES | typeof SAVE_RECIPE | typeof DELETE_RECIPE | typeof LOGIN_ERROR>;

import type { ActionWithSavedRecipeIdPayload, ActionWithSavedRecipePayload } from "./saveAndDeleteActions";
export type { ActionWithSavedRecipeIdPayload, ActionWithSavedRecipePayload };

import { SAVE_RECIPE, SAVE_USER_RECIPE, DELETE_RECIPE, DELETE_USER_RECIPE } from "./saveAndDeleteActions";
export { SAVE_RECIPE, SAVE_USER_RECIPE, DELETE_RECIPE, DELETE_USER_RECIPE };


import type { ActionWithUserPayload, ActionWithCredentialsPayload, ActionWithErrorPayload, ActionWithSessionValidationPayload } from "./loginActions";
export type { ActionWithUserPayload, ActionWithCredentialsPayload, ActionWithErrorPayload, ActionWithSessionValidationPayload };

import { SET_USER_DETAILS, CLEAR_USER_DETAILS, ATTEMPT_LOGIN, LOGIN_ERROR, VALIDATE_SESSION_DETAILS } from "./loginActions";
export { SET_USER_DETAILS, CLEAR_USER_DETAILS, ATTEMPT_LOGIN, LOGIN_ERROR, VALIDATE_SESSION_DETAILS };

export type Actions = ReturnType<typeof SET_RECIPES>

