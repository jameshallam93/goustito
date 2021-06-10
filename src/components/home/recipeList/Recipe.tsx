import React from "react";
import { useTogglable } from "../../../hooks/useTogglable";

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

	return (
		<section
			className="recipe"
			onClick={setIsHidden}
		>
			<h1>{label}</h1>
			<div className={`${isHidden && "hide"}`}>
				<ul className="ingredient-list">
					{
						ingredients.map(ingredient => {
							return (<li key={ingredient}>{ingredient}</li>);
						})
					}
				</ul>
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