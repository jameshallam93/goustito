import React from "react";

import { useTogglable } from "../../../../hooks/useTogglable";
import { IngredientList } from "../IngredientList";
import { RecipeType } from "../../../../services/recipes";
import { SaveButton } from "./SaveButton";

import "./recipe.scss";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_RECIPE, SAVE_USER_RECIPE } from "../../../../redux/actions";
import { AppState } from "../../../../redux/store";
import { useEffect } from "react";
import { UserValidation } from "../../../../services/recipes";

interface RecipeProps {
	recipe: RecipeType
}



const Recipe: React.FunctionComponent<RecipeProps> = ({ recipe }) => {

	const { id, label, url, img, calories, source, ingredients, servings } = recipe;
	const dispatch = useDispatch();
	//todo - move this up to RecipeList component
	const savedRecipes = useSelector<AppState, string[]>(state => state.users.recipes);
	const currentUser = useSelector<AppState, UserValidation>(state => state.users.user);

	const [isHidden, setIsHidden] = useTogglable(true);
	const [isSaved, setIsSaved] = useTogglable(false);

	useEffect(() => {
		if (savedRecipes.includes(id)) {
			setIsSaved(true);
		}
	}, []);

	const saveOrDeleteRecipe = (event: React.MouseEvent) => {
		event.stopPropagation();
		if (currentUser) {
			if (!isSaved) {
				setIsSaved();
				dispatch(SAVE_USER_RECIPE(id, currentUser));
				return;
			}
			setIsSaved();
			dispatch(DELETE_USER_RECIPE(id, currentUser));
			return;
		}
	};

	//todo -find a way to stop event bubbling when clicking on "a" tag - maybe switch to span?
	return (
		<section
			className="recipe"
			onClick={setIsHidden}
		>
			<h1>{label}</h1>
			<SaveButton
				onClick={saveOrDeleteRecipe}
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