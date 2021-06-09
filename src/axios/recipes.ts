import axios from "axios";

const baseUrl = "https://api.edamam.com/search";

const generateRequest = (searchTerms: string, mealTypes: string[]): string => {
    let mealTypeString = ``;
    mealTypes.forEach(type => {
        mealTypeString = mealTypeString.concat(`${type}+`);
    });
    return `${baseUrl}?q=${searchTerms}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}${mealTypes && `&mealType=`}${mealTypeString}`;
};

const recipeRequests = {

    async searchByName(searchTerms: string, mealTypes: string[]) {
        const request = generateRequest(searchTerms, mealTypes);
        const response = await axios.get(request);
        return response.data;
    }
};

export { recipeRequests };