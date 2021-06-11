import React from "react";
import { useSelector } from "react-redux";
import { InfoBar } from "./InfoBar";
import { Recipe } from "./Recipe";
import { RecipeState } from "../../../redux/reducer";
import { useEffect, useState } from "react";

import "./recipeList.scss";
interface ResultsShown {
	from: number,
	to: number
}

const RecipeList: React.FunctionComponent = () => {

	const [currentRecipes, setCurrentRecipes] = useState([]);

	const allRecipes: any = useSelector<RecipeState>((state) => state.recipes[0]); //eslint-disable-line
	const resultsToShow = useSelector<RecipeState, ResultsShown>((state) => state.resultsShown);

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
					currentRecipes && currentRecipes.map((recipe: any) => { //eslint-disable-line
						return (
							<li key={recipe.recipe.id}>
								<Recipe
									label={recipe.recipe.label}
									url={recipe.recipe.url}
									img={recipe.recipe.image}
									calories={recipe.recipe.calories}
									source={recipe.recipe.source}
									ingredients={recipe.recipe.ingredientLines}
									servings={recipe.recipe.yield}
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