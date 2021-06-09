import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { recipeReducer } from "./reducer";


const store = createStore(recipeReducer, composeWithDevTools(
    applyMiddleware()
));

export type RootState = ReturnType<typeof store.getState>;

export { store }