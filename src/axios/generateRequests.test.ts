import { generateRequest } from "./generateRequest";
import "@testing-library/jest-dom/extend-expect";

const emptySearchTerm = "";
const emptyMealType: Array<string> = [];

const searchTerm = "chicken";
const mealType = ["Lunch"];

const searchTerms = "chicken garlic";
const mealTypes = ["Lunch", "Snack"];

describe("when provided with only a single search term", () => {

	test("returns expected request string", () => {
		const requestString = generateRequest(searchTerm, emptyMealType);
		expect(requestString).toEqual(`https://api.edamam.com/search?q=${searchTerm}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99`);
	});
});

describe("when provided with a single search term and single mealType", () => {
	test("returns expected request string", () => {
		const requestString = generateRequest(searchTerm, mealType);
		expect(requestString).toEqual(`https://api.edamam.com/search?q=${searchTerm}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99&mealType=${mealType[0]}+`);
	});
});

describe("when provided with two searchTerms and no mealType", () => {
	test("returns expected request string", () => {
		const requestString = generateRequest(searchTerms, emptyMealType);
		console.log(requestString);
		expect(requestString).toEqual(`https://api.edamam.com/search?q=${searchTerms.split(" ").join("%20")}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99`);
	});
});

describe("when provided with two searchTerms and two meal types", () => {
	test("returns expected request string", () => {
		const requestString = generateRequest(searchTerms, mealTypes);
		expect(requestString).toEqual(`https://api.edamam.com/search?q=${searchTerms.split(" ").join("%20")}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99&mealType=${mealTypes[0]}+${mealTypes[1]}+`);
	});
});

//The API seems to allow for empty searches, so I have not put validation checkers in for empty search terms or meal types.

describe("when provided with no search terms and no meal types", () => {
	test("returns expected request string", () => {
		const requestString = generateRequest(emptySearchTerm, emptyMealType);
		expect(requestString).toEqual(`https://api.edamam.com/search?q=&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=99`);
	});
});