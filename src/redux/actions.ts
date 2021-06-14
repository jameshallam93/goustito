
export type Recipe = {
	label: string,
	url: string,
}

export type ActionWithRecipesPayload = {
	type: string,
	payload: {
		recipes: Recipe[]
	}
}
export type ActionWithSearchPayload = {
	type: string,
	payload: {
		searchTerms: string,
		mealTypes: string[]
	}
}
export type ActionWithUserPayload = {
	type: string,
	payload: {
		username: string | null,
		token: string | null
	}
}

export type PlainAction = {
	type: string;
}

export const GET_RECIPES = (searchTerms: string, mealTypes: string[]): ActionWithSearchPayload => {
	return {
		type: "GET_RECIPES",
		payload: {
			searchTerms,
			mealTypes
		}
	};
};

export const SET_RECIPES = (recipes: Recipe[]): ActionWithRecipesPayload => {
	return {
		type: "SET_RECIPES",
		payload: {
			recipes
		}
	};
};
export const SHOW_NEXT_PAGE = (): PlainAction => {
	return {
		type: "SHOW_NEXT_PAGE"
	};
};
export const SHOW_PREVIOUS_PAGE = (): PlainAction => {
	return {
		type: "SHOW_PREVIOUS_PAGE"
	};
};

export const SET_USER_DETAILS = (username: string, token: string): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username,
			token
		}
	};
};
export const CLEAR_USER_DETAILS = (): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username: null,
			token: null
		}
	};
};

export type Actions = ReturnType<typeof SET_RECIPES>

