import { CredentialsType } from "../../auth/generateCredentials";

export type ActionWithUserPayload = {
	type: string,
	payload: {
		username: string | null,
		password?: string | null
	}
}

export const SET_USER_DETAILS = (username: string): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username
		}
	};
};
export const CLEAR_USER_DETAILS = (): ActionWithUserPayload => {
	return {
		type: "SET_USER_DETAILS",
		payload: {
			username: null,
		}
	};
};

export const ATTEMPT_LOGIN = (credentials: CredentialsType) => {
	return {
		type: "ATTEMPT_LOGIN",
		payload: {
			credentials
		}
	};
};

export const LOGIN_ERROR = (error: any) => {
	return {
		type: "LOGIN_ERROR",
		payload: {
			error
		}
	};
};

export const VALIDATE_SESSION_DETAILS = (loggedUser: string | null, sessionExpired: boolean) => {
	return {
		type: "VALIDATE_SESSION_DETAILS",
		payload: {
			loggedUser,
			sessionExpired
		}
	};
};