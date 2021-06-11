import React from "react";

import { PageNavigation } from "./pageNavigation/PageNavigation";
import { RecipeList } from "./recipeList/RecipeList";
import { SearchBar } from "./searchBar/SearchBar";
import { Loading } from "../pageElements/loading/Loading";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home">
			<SearchBar />
			<Loading />
			<RecipeList />
			<PageNavigation />
		</div>
	);
};
export { Home };