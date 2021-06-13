import React from "react";

import { SearchForm } from "./SearchForm";
import { SearchInfo } from "./SearchInfo";

import "./searchBar.scss";

const SearchBar: React.FunctionComponent = () => {

	return (
		<section className="search-bar">
			<SearchInfo />
			<SearchForm />
		</section>
	);
};

export { SearchBar };