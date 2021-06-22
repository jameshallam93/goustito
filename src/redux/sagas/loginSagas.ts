import { put, call } from "redux-saga/effects";
import { loginService } from "../../services/login";
import { recipeService } from "../../services/recipes";
import { getCurrentTime } from "../../utils/getCurrentTime/getCurrentTime";
import { removeLocalStorageData } from "../../utils/auth/removeLocalStorageData";
/* eslint-disable */

export function* attempt_Login(action: any): Generator<any, void, void> {
    try {
        const userData: any = yield call(
            loginService.attemptLogin,
            action.payload.credentials
        );
        yield put({
            type: "SET_USER_DETAILS",
            payload: {
                username: action.payload.credentials.username
            }
        })
        yield put({
            type: "INIT_USER_RECIPES",
            payload: {
                recipes: userData.recipes
            }
        })
    } catch (e) {
        console.log(e);
        yield put({
            type: "LOGIN_ERROR",
            payload: { error: e.e.response.data }
        })
    }
}

export function* validateSession(action: any): Generator<any, void, void> {
    const currentTime = getCurrentTime();
    if (action.payload.sessionExpiry) {
        if (currentTime > action.payload.sessionExpiry) {
            {
                removeLocalStorageData()
                yield put({ type: "CLEAR_USER_DETAILS" })
                window.alert("Session has expired - please login again");
                return;
            }
        }
    }
    if (action.payload.loggedUser) {
        yield put({
            type: "SET_USER_DETAILS",
            payload: { username: action.payload.loggedUser }
        })
        const recipes = yield call(
            recipeService.fetchUserRecipes,
            action.payload.loggedUser
        );
        yield put({
            type: "INIT_USER_RECIPES",
            payload: { recipes: recipes }
        });
    }
}