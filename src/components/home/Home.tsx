import React from "react";
import { PageNavigation } from "./pageNavigation/PageNavigation";
import { RecipeList } from "./recipeList/RecipeList";
import { SearchBar } from "./searchBar/SearchBar";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home">
			<SearchBar />
			<RecipeList />
			<PageNavigation />
		</div>
	);
};
export { Home };