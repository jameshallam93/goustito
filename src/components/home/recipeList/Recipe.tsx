import React from "react";

import { useTogglable } from "../../../hooks/useTogglable";
import { IngredientList } from "./IngredientList";

import "./recipe.scss";

interface RecipeProps {
	label: string,
	url: string,
	img: string,
	calories: number,
	source: string,
	ingredients: string[],
	servings: number
}

const Recipe: React.FunctionComponent<RecipeProps> = ({ label, url, img, calories, source, ingredients, servings }) => {
	const [isHidden, setIsHidden] = useTogglable(true);
	//todo -find a way to stop event bubbling when clicking on "a" tag - maybe switch to span?
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