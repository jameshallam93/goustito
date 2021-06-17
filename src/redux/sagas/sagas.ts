/*eslint-disable */

import { takeLatest, all } from "redux-saga/effects";

import { fetchRecipes, saveRecipe, deleteRecipe } from "./recipeSagas";
import { attempt_Login, validateSession } from "./loginSagas";

function* sessionWatcher() {
	yield takeLatest("VALIDATE_SESSION_DETAILS", validateSession)
}

function* recipeWatcher() {
	yield takeLatest("GET_RECIPES", fetchRecipes);
}

function* saveOrRemoveRecipeWatcher() {
	yield takeLatest("SAVE_USER_RECIPE", saveRecipe)
	yield takeLatest("DELETE_USER_RECIPE", deleteRecipe)
}

function* loginWatcher() {
	yield takeLatest("ATTEMPT_LOGIN", attempt_Login)
}

export default function* rootSaga() {
	yield all([
		recipeWatcher(),
		saveOrRemoveRecipeWatcher(),
		loginWatcher(),
		sessionWatcher()
	]);
}