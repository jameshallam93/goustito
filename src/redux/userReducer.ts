
export type UserState = {
	user: {
		username: string | null
	},
	recipes: string[],
	loginError: { error: string | null }
}

const initialState: UserState = {
	user: {
		username: null
	},
	recipes: [],
	loginError: {
		error: null
	}
};

export const userReducer = (state: UserState = initialState, action: any): UserState => {
	switch (action.type) {
	case "SET_USER_DETAILS":
		return {
			...state,
			user: {
				username: action.payload.username
			}
		};
	case "CLEAR_USER_DETAILS":
		return {
			...state,
			user: {
				username: null
			}
		};
	case "INIT_USER_RECIPES":
		return {
			...state,
			recipes: [
				...action.payload.recipes
			]
		};
	case "SAVE_RECIPE":
		return {
			...state,
			recipes: [
				...state.recipes,
				action.payload
			]
		};
	case "DELETE_RECIPE":
			const newRecipes = state.recipes.filter(recipe => recipe !== action.payload.recipeId); //eslint-disable-line
		return {
			...state,
			recipes: [
				...newRecipes
			]
		};
	case "LOGIN_ERROR":
		return {
			...state,
			loginError: action.payload.error
		};
	default:
		return state;
	}
};