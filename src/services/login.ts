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
			//todo - refactor below
			const token = response.data.token;
			const username = response.data.username;
			localStorage.setItem("token", token);
			localStorage.setItem("username", username);
			delete response.data.token;
			return response;
		} catch (e) {
			throw { e };
		}
	}
};