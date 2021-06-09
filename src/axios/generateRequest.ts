const baseUrl = "https://api.edamam.com/search";
const apiVariables = `&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99`

const generateMealTypeString = (mealTypes: string[]): string => {

    if (mealTypes.length === 0) {
        return "";
    }
    let mealTypeString = ``;

    mealTypes.forEach(type => {
        mealTypeString = `${mealTypeString}${type}+`;
    });
    return mealTypeString;
}

export const generateRequest = (searchTerms: string, mealTypes: string[]): string => {
    const mealTypeString = generateMealTypeString(mealTypes)

    let requestString = ``;

    requestString = `${baseUrl}?q=${searchTerms}${apiVariables}`;

    if (mealTypeString) {
        requestString = `${requestString}&mealType=${mealTypeString}`;
    }
    return requestString;
};