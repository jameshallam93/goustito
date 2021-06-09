import axios from "axios";
import { generateRequest } from "./generateRequest"

const recipeRequests = {

    async searchByName(searchTerms: string, mealTypes: string[]) {
        const request = generateRequest(searchTerms, mealTypes);
        const response = await axios.get(request);
        return response.data;
    }
};

export { recipeRequests };