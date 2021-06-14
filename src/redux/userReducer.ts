
export type UserState = {
	user: {
		username: string | null,
		token: string | null
	},
	recipes: string[]
}

const initialState: UserState = {
	user: {
		username: null,
		token: null
	},
	recipes: []
};

export const userReducer = (state: UserState = initialState, action: any): UserState => {
	switch (action.type) {
	case "SET_USER_DETAILS":
		return {
			...state,
			user: {
				username: action.payload.username,
				token: action.payload.token
			}
		};
	case "CLEAR_USER_DETAILS":
		return {
			...state,
			user: {
				username: null,
				token: null
			}
		};
	case "INIT_USER_RECIPES":
		return {
			...state,
			recipes: [
				...action.payload.recipeIds
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

	default:
		return state;
	}
};