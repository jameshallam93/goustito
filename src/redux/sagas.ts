/*eslint-disable */

import { put, takeLatest, all, call } from "redux-saga/effects";

import { recipeService } from "../services/recipes";
import { ActionWithSavedRecipePayload, ActionWithSearchPayload } from "./actions";

function* fetchRecipes(action: ActionWithSearchPayload): Generator<
	any,
	any,
	any
> {
	const recipes: any = yield call(recipeService.searchByName, action.payload.searchTerms, action.payload.mealTypes);

	yield put({ type: "SET_RECIPES", payload: recipes });
}

function* saveRecipe(action: ActionWithSavedRecipePayload): Generator<
	any,
	any,
	any
> {
	yield call(recipeService.saveToVault, action.payload.recipeId, action.payload.username);
	yield put({ type: "SAVE_RECIPE", payload: action.payload.recipeId })
}

function* deleteRecipe(action: ActionWithSavedRecipePayload): Generator<
	any,
	any,
	any
> {
	yield call(recipeService.deleteFromVault, action.payload.recipeId, action.payload.username);
	yield put({ type: "DELETE_RECIPE", payload: action.payload.recipeId })
}

function* recipeWatcher() {
	yield takeLatest("GET_RECIPES", fetchRecipes);
}

function* saveOrRemoveRecipeWatcher() {
	yield takeLatest("SAVE_USER_RECIPE", saveRecipe)
	yield takeLatest("DELETE_USER_RECIPE", deleteRecipe)
}

export default function* rootSaga() {
	yield all([
		recipeWatcher(),
		saveOrRemoveRecipeWatcher()
	]);
}