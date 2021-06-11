import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useField } from "../../../hooks/useField";
import { GET_RECIPES } from "../../../redux/actions";
import { CheckboxArray } from "../../checkbox/CheckboxArray";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

const SearchForm: React.FunctionComponent = () => {

	const dispatch = useDispatch();
	const searchTerms = useField("text");

	const [checkedMealTypes, setCheckedMealTypes] = useState<Array<string>>([]);

	const handleSearch = async (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(GET_RECIPES(searchTerms.value, mealTypes));
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
		<form onSubmit={handleSearch}>
			<input
				className="search-input"
				type={searchTerms.type}
				value={searchTerms.value}
				onChange={searchTerms.onChange}
				placeholder="search recipes"
			/>
			<CheckboxArray
				categories={mealTypes}
				handleCheckboxChange={handleCheckboxChange}
			/>
			<input
				type="submit"
				className="submit-button"
			/>
		</form>
	);
};

export { SearchForm };