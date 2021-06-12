import axios from "axios";
const baseUrl = "http://localhost:3001";

export const loginService = {
	async attemptLogin(credentials: any): Promise<any> {
		try {
			const request = `${baseUrl}/api/login`;
			const response = await axios.post(request, credentials);
			return response;
		} catch (e) {
			throw { e };

		}

	}
};