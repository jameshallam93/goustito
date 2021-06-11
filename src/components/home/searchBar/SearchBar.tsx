import React from "react";

import { SearchForm } from "./SearchForm";
import { SearchInfo } from "./SearchInfo";
import "./searchBar.scss";


//todo - create constants file

const SearchBar: React.FunctionComponent = () => {

	return (
		<section className="search-bar">
			<SearchInfo />
			<SearchForm />
		</section>
	);
};

export { SearchBar };