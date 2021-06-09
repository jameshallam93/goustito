import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeRequests } from "../../axios/recipes";
import { SET_RECIPES } from "../../redux/actions";

const SearchBar: React.FunctionComponent = () => {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        const results = await recipeRequests.searchByName(searchTerm)

        dispatch(SET_RECIPES(results.hits))
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