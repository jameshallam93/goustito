import React from "react";

interface IngredientListProps {
	ingredients: string[]
}

const IngredientList: React.FunctionComponent<IngredientListProps> = ({ ingredients }) => {
	return (
		<ul className="ingredient-list">
			{
				ingredients.map(ingredient => {
					return (<li key={ingredient}>{ingredient}</li>);
				})
			}
		</ul>
	);
};

export { IngredientList };