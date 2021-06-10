import { useState } from "react";

import "./recipe.scss"

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
    const [isHidden, setIsHidden] = useState<Boolean>(true);

    const handleExpand = () => {
        setIsHidden(!isHidden);
    };

    //todo - move this logic to scss file - change handleExpand to alter className of hidden div
    const hiddenStyle = { display: isHidden ? "none" : "" };

    return (
        <section
            className="recipe"
            onClick={handleExpand}
        >
            <h1>{label}</h1>
            <div className="hidden" style={hiddenStyle}>
                <ul className="ingredient-list">
                    {
                        ingredients.map(ingredient => {
                            return (<li>{ingredient}</li>)
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