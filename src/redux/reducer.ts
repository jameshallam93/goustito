import { Actions } from "./actions";


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
		to: 10
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
				to: 10
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
				from: state.resultsShown.from + 10,
				to: state.resultsShown.to + 10
			}
		};
	case "SHOW_PREVIOUS_PAGE":
		return {
			...state,
			resultsShown: {
				from: state.resultsShown.from - 10,
				to: state.resultsShown.to - 10
			}
		};
	default:
		return state;
	}
};

export { recipeReducer };