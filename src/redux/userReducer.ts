import { ActionWithUserPayload } from "./actions";

export type UserState = {
	user: {
		username: string | null,
		token: string | null
	}
}

const initialState: UserState = {
	user: {
		username: null,
		token: null
	}
};

export const userReducer = (state: UserState = initialState, action: ActionWithUserPayload): UserState => {
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
	default:
		return state;
	}
};