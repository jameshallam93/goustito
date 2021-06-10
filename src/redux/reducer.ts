import { Actions } from "./actions";


export interface RecipeState {
	recipes: string[];
	resultsShown: {
		from: number,
		to: number
	}
}

const initialState = {
	recipes: [],
	resultsShown: {
		from: 0,
		to: 10
	}
};

const recipeReducer: any = (state: RecipeState = initialState, action: Actions) => { //eslint-disable-line
	switch (action.type) {
	case "SET_RECIPES":
		return {
			...state,
			recipes: [action.payload.recipes],
			resultsShown: {
				from: 0,
				to: 10
			}
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