import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { recipeReducer } from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(recipeReducer, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export { store };