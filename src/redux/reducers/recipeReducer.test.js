import "@testing-library/jest-dom/extend-expect";
/*eslint-disable */

import { recipeReducer, initialState } from "./recipeReducer";
import { RESULTS_PER_PAGE } from "../../constants";
import { GET_RECIPES, SET_RECIPES, NAVIGATION_ACTIONS } from "../actions/actions";

const testSearchTerms = "search terms";
const testMealType = ["lunch", "dinner"];

const testRecipes = [
    {
        label: "meat"
    },
    {
        label: "veg"
    }
];

const getAction = GET_RECIPES(testSearchTerms, testMealType);
const setAction = SET_RECIPES(testRecipes);
const showNextAction = NAVIGATION_ACTIONS.SHOW_NEXT_PAGE();
const showPrevAction = NAVIGATION_ACTIONS.SHOW_PREVIOUS_PAGE();

describe("the recipe reducer", () => {
    describe("when passed a GET_RECIPES action", () => {
        test("sets isLoading to true", () => {
            const result = recipeReducer(initialState, getAction);
            expect(result.isLoading).toBeTruthy();
        })
    })
    describe("when passed a SET_RECIPES action", () => {
        const result = recipeReducer(initialState, setAction)
        test("sets recipes to action.payload.recipes", () => {
            expect(result.recipes[0].recipes).toEqual(testRecipes);
        })
        test("sets results shown to from: 0 and to: RESULTS_PER_PAGE constant", () => {
            expect(result.resultsShown.from).toEqual(0);
            expect(result.resultsShown.to).toEqual(RESULTS_PER_PAGE);
        })
        test("sets isLoading to false", () => {
            expect(result.isLoading).toEqual(false);
        })
    })
    const result = recipeReducer(initialState, showNextAction);
    describe("when passed a SHOW_NEXT_PAGE action", () => {

        test("sets resultsShown.to and resultsShown.from to RESULTS_SHOWN_PER_PAGE higher", () => {
            expect(result.resultsShown.from).toEqual(RESULTS_PER_PAGE);
            expect(result.resultsShown.to).toEqual(RESULTS_PER_PAGE + RESULTS_PER_PAGE);
        })
    })
    describe("when passed a SHOW_PREV_PAGE action", () => {
        const newResult = recipeReducer(result, showPrevAction);
        test("sets resultsShown.to and resultsShown.from to RESULTS_SHOWN_PER_PAGE lower", () => {
            expect(newResult.resultsShown.from).toEqual(0);
            expect(newResult.resultsShown.to).toEqual(RESULTS_PER_PAGE)
        })
    })
    describe("when given an empty action, returns default state", () => {
        const result = recipeReducer(initialState, "DO_NOTHING");
        expect(result).toEqual({
            recipes: [],
            resultsShown: {
                from: 0,
                to: RESULTS_PER_PAGE
            },
            isLoading: false
        });
    })
})