/*eslint-disable */

import { put, takeLatest, all, call } from "redux-saga/effects";

import { loginService } from "../services/login";
import { recipeService } from "../services/recipes";
import { ActionWithSavedRecipePayload, ActionWithSearchPayload } from "./actions/actions";

function* fetchRecipes(action: ActionWithSearchPayload): Generator<
	any,
	void,
	void
> {
	const recipes: any = yield call(
		recipeService.searchByName,
		action.payload.searchTerms,
		action.payload.mealTypes
	);
	yield put({
		type: "SET_RECIPES",
		payload: recipes
	});
}

function* saveRecipe(action: ActionWithSavedRecipePayload): Generator<
	any,
	void,
	void
> {
	yield call(
		recipeService.saveToVault,
		action.payload.recipeId,
		action.payload.currentUser
	);
	yield put({
		type: "SAVE_RECIPE",
		payload: action.payload.recipeId
	})
}

function* deleteRecipe(action: ActionWithSavedRecipePayload): Generator<
	any,
	void,
	void
> {
	yield call(
		recipeService.deleteFromVault,
		action.payload.recipeId,
		action.payload.currentUser
	);
	yield put({
		type: "DELETE_RECIPE",
		payload: action.payload.recipeId
	})
}

function* attempt_Login(action: any): Generator<any, void, void> {
	try {
		const userData: any = yield call(
			loginService.attemptLogin,
			action.payload.credentials
		);
		yield put({
			type: "SET_USER_DETAILS",
			payload: {
				username: action.payload.credentials.username
			}
		})
		yield put({
			type: "INIT_USER_RECIPES",
			payload: {
				recipes: userData.recipes
			}
		})
	} catch (e) {
		yield put({
			type: "LOGIN_ERROR",
			payload: { error: e.e.response.data }
		})
	}
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
		loginWatcher()
	]);
}