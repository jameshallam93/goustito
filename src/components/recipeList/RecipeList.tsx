import { useSelector } from "react-redux";
import { Recipe } from "./Recipe";
import { RecipeState } from "../../redux/reducer";



const RecipeList: React.FunctionComponent = () => {

    const currentRecipes: any = useSelector<RecipeState>((state) => state.recipes[0])

    return (
        <section className="recipe-list">
            <ul>
                {currentRecipes && currentRecipes.map((recipe: any) => {
                    return (
                        <li>
                            <Recipe
                                label={recipe.recipe.label}
                                url={recipe.recipe.url}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export { RecipeList };