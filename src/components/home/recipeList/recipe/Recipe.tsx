import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTogglable } from "../../../../hooks/useTogglable";
import { IngredientList } from "../IngredientList";
import { RecipeType } from "../../../../services/recipes";
import { SaveButton } from "./SaveButton";
import { DELETE_USER_RECIPE, SAVE_USER_RECIPE } from "../../../../redux/actions";
import { AppState } from "../../../../redux/store";
import { MessageType, Notification } from "../../../pageElements/notification/Notification";
import { useNotification } from "../../../../hooks/useNotification";

import "./recipe.scss";

interface RecipeProps {
	recipe: RecipeType
}

const Recipe: React.FunctionComponent<RecipeProps> = ({ recipe }) => {
	const dispatch = useDispatch();

	const { id, label, url, img, calories, source, ingredients, servings } = recipe;

	const savedRecipes = useSelector<AppState, string[]>(state => state.users.recipes);
	const currentUser = useSelector<AppState, string | null>(state => state.users.user.username);

	const [isHidden, setIsHidden] = useTogglable(true);
	const [isSaved, toggleIsSaved] = useTogglable(false);
	const [notification, setNotification] = useNotification();

	useEffect(() => {
		if (savedRecipes.includes(id)) {
			toggleIsSaved(true);
		}
	}, []);

	const saveOrDeleteRecipe = (event: React.MouseEvent) => {
		event.stopPropagation();
		if (currentUser) {
			if (!isSaved) {
				toggleIsSaved();
				dispatch(SAVE_USER_RECIPE(id, currentUser));
				setNotification({ type: MessageType.message, message: "Recipe saved!" });
				return;
			}
			toggleIsSaved();
			dispatch(DELETE_USER_RECIPE(id, currentUser));
			setNotification({ type: MessageType.message, message: "Recipe deleted!" });
			return;
		}
		setNotification({ type: MessageType.error, message: "Must be logged in to save recipes!" });
	};

	//todo -find a way to stop event bubbling when clicking on "a" tag - maybe switch to span?
	return (
		<section
			className="recipe"
			onClick={setIsHidden}
		>
			<h1>{label}</h1>
			<Notification notification={notification} />
			<SaveButton
				onClick={saveOrDeleteRecipe}
				isSaved={isSaved}
			/>

			<div className={`${isHidden && "hide"}`}>
				<IngredientList ingredients={ingredients} />
				<p>Servings: {servings} </p>
				<p>Calories per serving: {Math.floor(calories / servings)}</p>
			</div>

			<img src={img} alt="food"></img>
			<div></div>
			<a href={url}>{source}</a>
		</section>
	);
};

export { Recipe };