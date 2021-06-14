import React from "react";

import { useTogglable } from "../../../../hooks/useTogglable";
import { IngredientList } from "../IngredientList";
import { RecipeType } from "../../../../services/recipes";
import { SaveButton } from "./SaveButton";

import "./recipe.scss";
import { useDispatch } from "react-redux";
import { SAVE_USER_RECIPE } from "../../../../redux/actions";

interface RecipeProps {
	recipe: RecipeType
}

const Recipe: React.FunctionComponent<RecipeProps> = ({ recipe }) => {
	const dispatch = useDispatch();

	const [isHidden, setIsHidden] = useTogglable(true);
	const [isSaved, setIsSaved] = useTogglable(false);
	//todo -find a way to stop event bubbling when clicking on "a" tag - maybe switch to span?
	const { id, label, url, img, calories, source, ingredients, servings } = recipe;

	const saveRecipe = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsSaved();
		dispatch(SAVE_USER_RECIPE(id));

	};
	return (
		<section
			className="recipe"
			onClick={setIsHidden}
		>
			<h1>{label}</h1>
			<SaveButton
				onClick={saveRecipe}
				isSaved={isSaved}
			/>

			<div className={`${isHidden && "hide"}`}>
				<IngredientList ingredients={ingredients} />
				<p>Calories: {Math.floor(calories)}</p>
				<p>Servings: {servings} </p>
			</div>

			<img src={img} alt="food"></img>
			<div></div>
			<a href={url}>{source}</a>
		</section>
	);
};

export { Recipe };