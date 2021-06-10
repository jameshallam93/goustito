
export type Recipe = {
	label: string,
	url: string,
}

interface ActionWithPayload {
	type: string,
	payload: {
		recipes: Recipe[]
	}
}

interface PlainAction {
	type: string;
}

export const SET_RECIPES = (recipes: Recipe[]): ActionWithPayload => {
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

