import test, { APIRequestContext, expect } from "@playwright/test";
import { SignInAPI } from "../../pages/api/signin.api";

type fixtures = {
    authRequest: APIRequestContext;
    getToken: string;
}
const userInfor =
{
    email: 'lorem85555512@gmail.com',
    password: '88888888'
}
const testRequest = test.extend<fixtures>({
    authRequest: async ({ request }, use) => {
        let signInAPI: SignInAPI;
        signInAPI = new SignInAPI(request);
        const res = await signInAPI.postSignIn(userInfor);
        const statusCode: number = res.status();
        expect(statusCode).toEqual(200);

        await use(signInAPI.request);

    },

    getToken: async ({ request }, use) => {
        let signInAPI: SignInAPI;
        signInAPI = new SignInAPI(request);
        const token = await signInAPI.getToken(userInfor);
        const authorization = `Token ${token}`;

        await use(authorization);
    }
});

export { testRequest };