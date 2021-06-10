import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeRequests } from "../../../axios/recipes";
import { useField } from "../../../hooks/useField";
import { SET_RECIPES } from "../../../redux/actions";
import { Checkbox } from "../../checkbox/Checkbox";

import "./searchBar.scss";

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
	};

	return (
		<section className="search-bar">
			<h3>Search through over 2.3 million recipes from all over the web!</h3>
			<p>Click on a recipe card to see the ingredients and calories!</p>
			<p>Click the link on the recipe card to visit the recipe page!</p>
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
								key={type}
							/>
						);
					})
				}
				<input
					type="submit"
					className="submit-button"
				/>
			</form>
		</section>
	);
};

export { SearchBar };