import React from "react";
import { useSelector } from "react-redux";
import { RecipeType } from "../../redux/actions";
import { AppState } from "../../redux/store";
import { Recipe } from "../home/recipeList/recipe/Recipe";


const UserVault: React.FunctionComponent = () => {

	const recipes = useSelector<AppState, string[]>(state => state.users.recipes);
	return (
		<div>
			<p>test</p>
			{recipes.map(recipe => {
				return (<p key={recipe}>{recipe}</p>);
			})}
		</div>
	);
};

export { UserVault };