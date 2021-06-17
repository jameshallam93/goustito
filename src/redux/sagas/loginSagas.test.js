import "@testing-library/jest-dom/extend-expect";
import { call, put } from "redux-saga/effects";
/*eslint-disable*/
import { attempt_Login, validateSession } from "./loginSagas";
import { ATTEMPT_LOGIN, INIT_USER_RECIPES, VALIDATE_SESSION_DETAILS } from "../actions/actions";
import { loginService } from "../../services/login";
import { recipeService } from "../../services/recipes";

window.alert = jest.fn();
window.localStorage.removeItem = jest.fn()

const testCredentials = {
    username: "user",
    password: "pass"
};

const testUserData = {
    username: "user",
    recipes: [
        {
            label: "meat"
        },
        {
            label: "veg"
        }
    ]
}
const loginAction = ATTEMPT_LOGIN(testCredentials);
const validateActionInvalid = VALIDATE_SESSION_DETAILS(testCredentials.username, 100);
const validateActionValid = VALIDATE_SESSION_DETAILS(testCredentials.username, 10000000000000000000);
const validateActionNull = VALIDATE_SESSION_DETAILS(null, null);

const loginSaga = attempt_Login(loginAction);
describe("the attempt_Login saga", () => {
    test("first yields a call to loginService.attemptLogin", () => {
        expect(loginSaga.next().value)
            .toEqual(call(loginService.attemptLogin, testCredentials))
    })
    test("then puts a SET_USER_DETAILS action with payload.credentials.username as a parameter", () => {
        expect(loginSaga.next(testUserData).value)
            .toEqual(put({ type: "SET_USER_DETAILS", payload: { username: testCredentials.username } }))
    })
    test("then puts an INIT_USER_RECIPES with the returned userData.recipes as a parameter", () => {
        expect(loginSaga.next().value)
            .toEqual(put({ type: "INIT_USER_RECIPES", payload: { recipes: testUserData.recipes } }))
    })
})

const validateValidSaga = validateSession(validateActionValid);



describe("the validateSession saga, when given a valid expiry", () => {

    test("first puts a CLEAR_USER_DETAILS action with no parameters", () => {
        expect(validateValidSaga.next().value)
            .toEqual(put({ type: "SET_USER_DETAILS", payload: { username: testCredentials.username } }))
    })
    test("then yields a call to recipeService.fetchUserRecipes with the logged user as a parameter", () => {
        expect(validateValidSaga.next().value)
            .toEqual(call(recipeService.fetchUserRecipes, testCredentials.username))
    })
    test("then puts a INIT_USER_RECIPES action with returned recipes as a parameter", () => {
        expect(validateValidSaga.next(testUserData.recipes).value)
            .toEqual(put({ type: "INIT_USER_RECIPES", payload: { recipes: testUserData.recipes } }));
    })
    test("then is done", () => {
        expect(validateValidSaga.next().done).toBeTruthy();
    })
})
const validateInvalidSaga = validateSession(validateActionInvalid)

describe("the validateSession saga, when given an invalid expiry", () => {


    test("first puts a CLEAR_USER_DETAILS action with no parameters", () => {
        expect(validateInvalidSaga.next().value)
            .toEqual(put({ type: "CLEAR_USER_DETAILS" }));
    })
    test("then is done", () => {
        expect(validateInvalidSaga.next().done).toBeTruthy();
        expect(window.alert).toHaveBeenCalled();
    })

})

const noUserValidateSaga = validateSession(validateActionNull);
describe("the validateSession saga, when given a null username", () => {
    test("should do nothing", () => {
        expect(noUserValidateSaga.next().done).toBeTruthy();
    })
})