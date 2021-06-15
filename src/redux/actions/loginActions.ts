import { MessageType } from "../../components/pageElements/notification/Notification";
import { CredentialsType } from "../../utils/auth/generateCredentials";

export type ActionWithUserPayload = {
	type: string,
	payload: {
		username: string | null,
		password?: string | null
	}
}
export type ActionWithCredentialsPayload = {
	type: string,
	payload: {
		credentials: CredentialsType
	}
}

export type ActionWithErrorPayload = {
	type: string,
	payload: {
		error: {
			type: MessageType.error
			message: string
		}
	}
}
export type ActionWithSessionValidationPayload = {
	type: string,
	payload: {
		loggedUser: string | null,
		sessionExpiry: number
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

export const ATTEMPT_LOGIN = (credentials: CredentialsType): ActionWithCredentialsPayload => {
	return {
		type: "ATTEMPT_LOGIN",
		payload: {
			credentials
		}
	};
};

export const LOGIN_ERROR = (error: { type: MessageType.error, message: string }): ActionWithErrorPayload => {
	return {
		type: "LOGIN_ERROR",
		payload: {
			error
		}
	};
};

export const VALIDATE_SESSION_DETAILS = (loggedUser: string | null, sessionExpiry: number): ActionWithSessionValidationPayload => {
	return {
		type: "VALIDATE_SESSION_DETAILS",
		payload: {
			loggedUser,
			sessionExpiry
		}
	};
};