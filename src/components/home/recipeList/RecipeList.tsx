import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RecipeState } from "../../../redux/recipeReducer";
import { AppState } from "../../../redux/store";
import { RecipeType } from "../../../services/recipes";
import { InfoBar } from "./InfoBar";
import { Recipe } from "./Recipe";

import "./recipeList.scss";

interface ResultsShown {
	from: number,
	to: number
}

const RecipeList: React.FunctionComponent = () => {

	const [currentRecipes, setCurrentRecipes] = useState<RecipeType[]>([]);

	const allRecipes: any = useSelector<AppState>((state) => state.recipes.recipes[0]); //eslint-disable-line
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
					currentRecipes && currentRecipes.map((recipe: any) => { //eslint-disable-line
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