import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { RecipeType } from "../../services/recipes";


const UserVault: React.FunctionComponent = () => {

	const recipes = useSelector<AppState, RecipeType[]>(state => state.users.recipes);
	return (
		<div>
			<p>test</p>
			{recipes.map(recipe => {
				return (<p key={recipe.label}>{recipe.label}</p>);
			})}
		</div>
	);
};

export { UserVault };