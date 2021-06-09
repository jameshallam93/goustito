
export type Recipe = {
    label: string,
    url: string,
}


export const SET_RECIPES = (recipes: Recipe[]) => {
    return {
        type: "SET_RECIPES",
        payload: {
            recipes
        }
    }
}
export const SHOW_NEXT_PAGE = () => {
    return {
        type: "SHOW_NEXT_PAGE"
    }
}
export const SHOW_PREVIOUS_PAGE = () => {
    return {
        type: "SHOW_PREVIOUS_PAGE"
    }
}

export type Actions = ReturnType<typeof SET_RECIPES>

