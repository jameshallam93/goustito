import "@testing-library/jest-dom/extend-expect";
import axios from "../../__mocks__/axios";
import { signUpService } from "../signUp";
/*eslint-disable */

const testUsername = "user";
const testPassword = "pass";
const testCredentials = {
    username: testUsername,
    password: testPassword
};
const testHash = "TestHash";
const testRecipes = [
    {
        label: "Meat"
    },
    {
        label: "Veg"
    }
]
const testResponseData = {
    username: testUsername,
    passwordHash: testHash,
    recipes: [
        ...testRecipes
    ]
}
describe("the createNewUser service", () => {
    jest.mock("axios");
    beforeEach(() => {
        axios.post.mockImplementation(() =>
            Promise.resolve({
                data: {
                    ...testResponseData
                }
            }))
    })
    test("returns username on successful signup", async () => {
        const response = await signUpService.createNewUser(testCredentials);
        expect(response.data.username).toBe(testUsername);
    })
    test("returns passwordHash on successful signup", async () => {
        const response = await signUpService.createNewUser(testCredentials);
        expect(response.data.passwordHash).toBe(testHash);
    })
    test("returns passwordHash on successful signup", async () => {
        const response = await signUpService.createNewUser(testCredentials);
        expect(response.data.recipes).toEqual(testRecipes);
    })

})