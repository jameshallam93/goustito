import "@testing-library/jest-dom/extend-expect";
import { call, put } from "redux-saga/effects";
import { recipeService } from "../../services/recipes";
import { GET_RECIPES } from "../actions/recipeActions";
/*eslint-disable*/
import { fetchRecipes, saveRecipe, deleteRecipe } from "./recipeSagas";
import { DELETE_USER_RECIPE, SAVE_USER_RECIPE } from "../actions/saveAndDeleteActions";

const testSearchTerms = "testSearch terms";
const testMealTypes = ["test1", "test2"];
const testUser = "user";
const testRecipeId = "testid";

const testRecipes = [
	{
		label: "testRecipe"
	},
	{
		label: "test2 recipe"
	}
];

const fetchAction = GET_RECIPES(testSearchTerms, testMealTypes);
const saveAction = SAVE_USER_RECIPE(testRecipes[0], testUser);
const deleteAction = DELETE_USER_RECIPE(testRecipeId, testUser);

const fetchRecipesSaga = fetchRecipes(fetchAction);

describe("the fetchRecipes saga", () => {

	test("first yields a call to recipeService.searchByName", () => {
		expect(fetchRecipesSaga.next().value)
			.toEqual(call(recipeService.searchByName, testSearchTerms, testMealTypes));
	}),
		test("then puts a SET_RECIPES action with the returned recipes as a parameter", async () => {
			expect(fetchRecipesSaga.next(testRecipes).value)
				.toEqual(put({ type: "SET_RECIPES", payload: testRecipes }))
		}),
		test("then should be done", () => {
			expect(fetchRecipesSaga.next().done).toBeTruthy();
		})
})

const saveRecipeSaga = saveRecipe(saveAction);
describe("the saveRecipe saga", () => {

	test("first yields a call to recipeService.saveTovault", () => {
		expect(saveRecipeSaga.next().value)
			.toEqual(call(recipeService.saveToVault, testRecipes[0], testUser))
	}),
		test("then puts a SAVE_RECIPE action with the payload.recipe as a parameter", () => {
			expect(saveRecipeSaga.next(testRecipes[0]).value)
				.toEqual(put({ type: "SAVE_RECIPE", payload: { recipe: testRecipes[0] } }))
		})
	test("then should be done", () => {
		expect(saveRecipeSaga.next().done).toBeTruthy();
	})
})
const deleteRecipesSaga = deleteRecipe(deleteAction)
describe("the deleteRecipes saga", () => {
	test("first makes a call to recipeService.deleteFromVault", () => {
		expect(deleteRecipesSaga.next().value)
			.toEqual(call(recipeService.deleteFromVault, testRecipeId, testUser))
	})
	test("then puts a DELETE_RECIPES action with the payload.recipeId as a parameter", () => {
		expect(deleteRecipesSaga.next(testRecipeId).value)
			.toEqual(put({ type: "DELETE_RECIPE", payload: { recipeId: testRecipeId } }))
	})
	test("then should be done", () => {
		expect(deleteRecipesSaga.next().done).toBeTruthy();
	})
})