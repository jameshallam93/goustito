import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

import { recipeReducer, RecipeState } from "./recipeReducer";
import { userReducer, UserState } from "./userReducer";
import rootSaga from "./sagas/sagas";

export type AppState = {
	recipes: RecipeState,
	users: UserState
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
	{
		recipes: recipeReducer,
		users: userReducer
	}
);

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export { store };