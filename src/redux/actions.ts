
export type Recipe = {
	label: string,
	url: string,
}

interface ActionWithRecipesPayload {
	type: string,
	payload: {
		recipes: Recipe[]
	}
}
export interface ActionWithSearchPayload {
	type: string,
	payload: {
		searchTerms: string,
		mealTypes: string[]
	}
}

interface PlainAction {
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

export type Actions = ReturnType<typeof SET_RECIPES>

