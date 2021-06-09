import { useSelector } from "react-redux";
import { Recipe } from "./Recipe";
import { RecipeState } from "../../redux/reducer";
import { useEffect, useState } from "react";

interface ResultsShown {
    from: number,
    to: number
}

const RecipeList: React.FunctionComponent = () => {

    const [currentRecipes, setCurrentRecipes] = useState([])

    const allRecipes: any = useSelector<RecipeState>((state) => state.recipes[0]);
    const resultsToShow = useSelector<RecipeState, ResultsShown>((state) => state.resultsShown)

    useEffect(() => {
        const recipesToShow = allRecipes?.slice(resultsToShow.from, resultsToShow.to)
        setCurrentRecipes(recipesToShow)
    },
        [resultsToShow, allRecipes]
    )
    return (
        <section className="recipe-list">
            <ul>
                {
                    currentRecipes && currentRecipes.map((recipe: any) => {
                        return (
                            <li>
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
                };
            </ul>
        </section>
    );
};

export { RecipeList };