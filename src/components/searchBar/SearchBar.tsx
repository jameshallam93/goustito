import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeRequests } from "../../axios/recipes";
import { SET_RECIPES } from "../../redux/actions";
import { Checkbox } from "../checkbox/Checkbox";

//todo - create constants file
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

const SearchBar: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const [searchTerms, setSearchTerms] = useState<string>("");
    const [checkedMealTypes, setCheckedMealTypes] = useState<Array<string>>([]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        const results = await recipeRequests.searchByName(searchTerms, checkedMealTypes);

        dispatch(SET_RECIPES(results.hits));
        return;
    };

    const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setSearchTerms(event.target.value);
    };

    const handleCheckboxChange = (label: string) => {
        if (checkedMealTypes.includes(label)) {
            const newCheckedMealTypes = checkedMealTypes.filter(type =>
                type !== label
            );
            setCheckedMealTypes(newCheckedMealTypes);
            return;
        }
        setCheckedMealTypes([...checkedMealTypes, label]);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerms}
                onChange={handleTermChange}
                placeholder="name"
            />
            {
                mealTypes.map(type => {
                    return (
                        <Checkbox
                            label={type}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    )
                })
            }

            <input
                type="submit"
            />
        </form>
    );
};

export { SearchBar };