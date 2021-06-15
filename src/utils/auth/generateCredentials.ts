

export type CredentialsType = {
	username: string,
	password: string
}

export const generateCredentials = (username: string, password: string): CredentialsType => {
	return {
		username,
		password
	};
};