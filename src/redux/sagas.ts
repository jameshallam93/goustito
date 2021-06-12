/*eslint-disable */

import { put, takeLatest, all, call } from "redux-saga/effects";

import { recipeService } from "../axios/recipes";
import { ActionWithSearchPayload } from "./actions";

function* fetchRecipes(action: ActionWithSearchPayload): Generator<
	any,
	any,
	any
> {
	const recipes: any = yield call(recipeService.searchByName, action.payload.searchTerms, action.payload.mealTypes);
	yield put({ type: "SET_RECIPES", payload: recipes.hits });
}

function* recipeWatcher() {
	yield takeLatest("GET_RECIPES", fetchRecipes);
}

export default function* rootSaga() {
	yield all([
		recipeWatcher(),
	]);
}