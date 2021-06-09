import axios from "axios";

const baseUrl = "https://api.edamam.com/search";

const generateRequest = (searchTerms: string) => {
    return `${baseUrl}?q=${searchTerms}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
}

const recipeRequests = {
    async searchByName(searchTerms: string) {
        const request = generateRequest(searchTerms)
        const response = await axios.get(request)
        return response.data
    }
}

export { recipeRequests }