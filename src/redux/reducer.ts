import { Actions } from "./actions";
import { RESULTS_PER_PAGE } from "../constants";

export type RecipeState = {
	recipes: string[];
	resultsShown: {
		from: number,
		to: number
	},
	isLoading: boolean
}

const initialState = {
	recipes: [],
	resultsShown: {
		from: 0,
		to: RESULTS_PER_PAGE
	},
	isLoading: false
};

const recipeReducer: any = (state: RecipeState = initialState, action: Actions) => { //eslint-disable-line
	switch (action.type) {
	case "GET_RECIPES":
		return {
			...state,
			isLoading: true
		};
	case "SET_RECIPES":
		return {
			...state,
			recipes: [action.payload],
			resultsShown: {
				from: 0,
				to: RESULTS_PER_PAGE
			},
			isLoading: false
		};
	case "ADD_RECIPES":
		return {
			...state,
			recipes: [
				...state.recipes,
				action.payload.recipes
			]
		};
	case "SHOW_NEXT_PAGE":
		return {
			...state,
			resultsShown: {
				from: state.resultsShown.from + RESULTS_PER_PAGE,
				to: state.resultsShown.to + RESULTS_PER_PAGE
			}
		};
	case "SHOW_PREVIOUS_PAGE":
		return {
			...state,
			resultsShown: {
				from: state.resultsShown.from - RESULTS_PER_PAGE,
				to: state.resultsShown.to - RESULTS_PER_PAGE
			}
		};
	default:
		return state;
	}
};

export { recipeReducer };