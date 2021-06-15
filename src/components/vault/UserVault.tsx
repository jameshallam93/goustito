import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CLEAR_USER_DETAILS } from "../../redux/actions/loginActions";
import { CLEAR_USER_RECIPES } from "../../redux/actions/recipeActions";
import { AppState } from "../../redux/store";
import { RecipeType } from "../../services/recipes";
import { Recipe } from "../home/recipeList/recipe/Recipe";
import { Button } from "../globals/button/Button";

import "./userVault.scss";


const UserVault: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem("token-expiry");
		localStorage.removeItem("username");
		dispatch(CLEAR_USER_DETAILS());
		dispatch(CLEAR_USER_RECIPES());
		history.push("/");
	};

	const recipes = useSelector<AppState, RecipeType[]>(state => state.users.recipes);
	return (
		<section className="user-vault">
			<Button
				onClick={handleLogout}
				label="Logout"
			>
			</Button>
			{
				recipes.map(recipe => {
					return <Recipe key={recipe.id} recipe={recipe} />;
				})
			}
		</section>
	);
};

export { UserVault };