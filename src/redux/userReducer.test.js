import "@testing-library/jest-dom/extend-expect";
/*eslint-disable*/
import { userReducer, initialState } from "./userReducer";

import {
	SET_USER_DETAILS,
	CLEAR_USER_DETAILS,
	INIT_USER_RECIPES,
	CLEAR_USER_RECIPES,
	SAVE_RECIPE,
	DELETE_RECIPE,
	LOGIN_ERROR
} from "./actions/actions";
import { MessageType } from "../components/pageElements/notification/Notification";

const testUsername = "user";
const testRecipeId = 1;
const testRecipes = [
	{
		label: "meat",
		id: testRecipeId
	},
	{
		label: "veg",
		id: 2
	}
];
const testNewRecipe = {
	label: "beans"
};
const testError = { type: MessageType.message, message: "testMessage" };


const setUserAction = SET_USER_DETAILS(testUsername);
const clearUserAction = CLEAR_USER_DETAILS();
const initAction = INIT_USER_RECIPES(testRecipes);
const clearRecipeAction = CLEAR_USER_RECIPES();
const saveRecipeAction = SAVE_RECIPE(testNewRecipe, testUsername);
const deleteRecipeAction = DELETE_RECIPE(testRecipeId, testUsername);
const loginErrorAction = LOGIN_ERROR(testError);

describe("the user reducer", () => {
	describe("when passed a SET_USER_DETAILS action", () => {
		test("sets the user.username field to the action.payload.username", () => {
			const result = userReducer(initialState, setUserAction);
			expect(result.user.username).toEqual(testUsername);
		})
	})
	describe("when passed a CLEAR_USER_DETAILSs action", () => {
		test("deletes any existing user recipes", () => {
			const result = userReducer({ user: { username: testUsername } }, clearUserAction);
			expect(result.user.username).toEqual(null);
		})
	})
	const recipeResult = userReducer(initialState, initAction);
	describe("when passed an INIT_USER_RECIPES action", () => {
		test("sets recipes to action.payload.recipes", () => {

			expect(recipeResult.recipes).toEqual(testRecipes);
		})
	})
	describe("when passed a CLEAR_USER_RECIPES action", () => {
		test("clears any user recipes", () => {
			const newResult = userReducer(recipeResult, clearRecipeAction);
			expect(newResult.recipes).toEqual([]);
		})
	})
	describe("when passed a SAVE_RECIPE action", () => {
		test("returns all previous recipes AND new recipe", () => {
			const result = userReducer({ recipes: [...testRecipes] }, saveRecipeAction);
			expect(result.recipes).toEqual([...testRecipes, testNewRecipe]);
		})
	})
	describe("when passed a DELETE_RECIPE action", () => {
		test("returns all previous recipes MINUS deleted recipe", () => {
			const result = userReducer({ recipes: [...testRecipes] }, deleteRecipeAction);
			expect(result).not.toContain(testRecipes.find(recipe => recipe.id === testRecipeId))
			expect(result).toEqual({ recipes: testRecipes.filter(recipe => recipe.id !== testRecipeId) });
		})
	})
	describe("when passed a LOGIN_ERROR action", () => {
		test("sets loginError to the received payload", () => {
			const result = userReducer(initialState, loginErrorAction);
			expect(result.loginError).toEqual(testError);
		})
	})


})