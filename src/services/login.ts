import axios, { AxiosResponse } from "axios";
const baseUrl = "http://localhost:3001";

export type Credentials = {
	username: string,
	password: string
}

export const loginService = {
	async attemptLogin(credentials: Credentials): Promise<AxiosResponse> {
		try {
			const request = `${baseUrl}/api/login`;
			const response = await axios.post(request, credentials);
			return response;
		} catch (e) {
			throw { e };
		}
	}
};