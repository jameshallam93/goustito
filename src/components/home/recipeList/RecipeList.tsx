import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../../redux/store";
import { RecipeType } from "../../../services/recipes";
import { InfoBar } from "./InfoBar";
import { Recipe } from "./recipe/Recipe";

import "./recipeList.scss";

interface ResultsShown {
	from: number,
	to: number
}

const RecipeList: React.FunctionComponent = () => {

	const [currentRecipes, setCurrentRecipes] = useState<RecipeType[]>([]);

	const allRecipes = useSelector<AppState, any>((state) => state.recipes.recipes[0]); //eslint-disable-line
	const resultsToShow = useSelector<AppState, ResultsShown>((state) => state.recipes.resultsShown);

	useEffect(() => {
		const recipesToShow = allRecipes?.slice(resultsToShow.from, resultsToShow.to);
		setCurrentRecipes(recipesToShow);
	}, [resultsToShow, allRecipes]
	);

	return (
		<section className="recipe-list">
			{
				currentRecipes?.length > 0 &&
				<InfoBar />
			}
			<div />
			<ul>
				{
					currentRecipes && currentRecipes.map((recipe: RecipeType) => {
						return (
							<li key={recipe.id}>
								<Recipe
									recipe={recipe}
								/>
							</li>
						);
					})
				}
			</ul>
		</section>
	);
};

export { RecipeList };