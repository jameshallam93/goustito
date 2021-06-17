import { put, call } from "redux-saga/effects";
import { recipeService } from "../../services/recipes";
/*eslint-disable*/
import { ActionWithSavedRecipeIdPayload, ActionWithSearchPayload, ActionWithSavedRecipePayload } from "../actions/actions";

export function* fetchRecipes(action: ActionWithSearchPayload): Generator<
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

export function* saveRecipe(action: ActionWithSavedRecipePayload): Generator<
    any,
    void,
    void
> {
    yield call(
        recipeService.saveToVault,
        action.payload.recipe,
        action.payload.currentUser
    );
    yield put({
        type: "SAVE_RECIPE",
        payload: { recipe: action.payload.recipe }
    })
}

export function* deleteRecipe(action: ActionWithSavedRecipeIdPayload): Generator<
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
        payload: { recipeId: action.payload.recipeId }
    })
}