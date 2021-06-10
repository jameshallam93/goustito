import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeRequests } from "../../axios/recipes";
import { useField } from "../../hooks/useField";
import { SET_RECIPES } from "../../redux/actions";
import { Checkbox } from "../checkbox/Checkbox";

//todo - create constants file
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

const SearchBar: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const searchTerms = useField("text");

    const [checkedMealTypes, setCheckedMealTypes] = useState<Array<string>>([]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        const results = await recipeRequests.searchByName(searchTerms.value, checkedMealTypes);

        dispatch(SET_RECIPES(results.hits));
        return;
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
                type={searchTerms.type}
                value={searchTerms.value}
                onChange={searchTerms.onChange}
                placeholder="search recipes"
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