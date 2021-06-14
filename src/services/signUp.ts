import axios, { AxiosResponse } from "axios";
import { Credentials } from "./login";

const baseUrl = "http://localhost:3001";

export const signUpService = {
	async createNewUser(credentials: Credentials): Promise<AxiosResponse> {
		const request = `${baseUrl}/api/user/signup`;
		try {
			const response = await axios.post(request, credentials);
			return response;
		} catch (e) {
			throw { e };
		}
	}
};