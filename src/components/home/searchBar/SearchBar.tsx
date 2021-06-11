import React from "react";


import "./searchBar.scss";
import { SearchForm } from "./SearchForm";
import { SearchInfo } from "./SearchInfo";

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