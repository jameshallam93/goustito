import React, { useState } from "react";
import { recipeRequests } from "../../axios/recipes";

const SearchBar: React.FunctionComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const results = recipeRequests.searchByName(searchTerm)
        console.log(results)

        return;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => handleChange(event)}
            />
            <input
                type="submit"
            />
        </form>
    );
};

export { SearchBar };