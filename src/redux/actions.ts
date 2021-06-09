
export type Recipe = {
    label: string,
    url: string,
}


const SET_RECIPES = (recipes: Recipe[]) => {
    return {
        type: "SET_RECIPES",
        payload: {
            recipes
        }
    }
}

export type Actions = ReturnType<typeof SET_RECIPES>

export { SET_RECIPES }