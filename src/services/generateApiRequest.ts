const baseUrl = "https://api.edamam.com/search";


const generateMealTypeString = (mealTypes: string[]): string => {

	if (mealTypes.length === 0) {
		return "";
	}
	let mealTypeString = "";

	mealTypes.forEach(type => {
		mealTypeString = `${mealTypeString}${type}+`;
	});
	return mealTypeString;
};

const generateSearchTermString = (searchTerms: string) => {
	const split = searchTerms.split(" ");
	if (split.length === 1) {
		return split[0];
	}
	return split.join("%20");
};

export const generateApiRequest = (searchTerms: string, mealTypes: string[]): string => {
	const API_ID = process.env.REACT_APP_GOUSTITO_FRONTEND_API_ID;
	const API_KEY = process.env.REACT_APP_GOUSTITO_FRONTEND_EDAMAM_API_KEY;
	const apiVariables = `&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=99`;
	const searchTermsString = generateSearchTermString(searchTerms);
	const mealTypeString = generateMealTypeString(mealTypes);
	console.log(process.env.REACT_APP_GOUSTITO_FRONTEND_API_KEY);
	let requestString = "";

	requestString = `${baseUrl}?q=${searchTermsString}${apiVariables}`;

	if (mealTypeString) {
		requestString = `${requestString}&mealType=${mealTypeString}`;
	}
	return requestString;
};