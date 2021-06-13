import React from "react";

import { useTogglable } from "../../../hooks/useTogglable";
import { IngredientList } from "./IngredientList";
import { RecipeType } from "../../../services/recipes";

import "./recipe.scss";

interface RecipeProps {
	recipe: RecipeType
}

const Recipe: React.FunctionComponent<RecipeProps> = ({ recipe }) => {
	const [isHidden, setIsHidden] = useTogglable(true);
	//todo -find a way to stop event bubbling when clicking on "a" tag - maybe switch to span?
	const { label, url, img, calories, source, ingredients, servings } = recipe;
	return (
		<section
			className="recipe"
			onClick={setIsHidden}
		>
			<h1>{label}</h1>
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