import { Actions } from "./actions";


export interface RecipeState {
    recipes: string[]
}

const initialState = {
    recipes: []
}


const recipeReducer: any = (state: RecipeState = initialState, action: Actions) => {
    switch (action.type) {
        case "SET_RECIPES":
            return {
                ...state,
                recipes: [action.payload.recipes]
            }
        default:
            return state;
    }
}

export { recipeReducer }