import { APIRequestContext, APIResponse } from "@playwright/test";

export class SignUpAPI {
    request: APIRequestContext;
    baseURL = 'https://conduit-api.bondaracademy.com/';
    endpointSignIn = 'api/users';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * SignIn successfully
     * @param userName 
     * @param email 
     * @param password 
     * @returns response and contain token.
     */
    async postSignUp(userCredential: { userName: string, email: string, password: string }) {
        const requestURL = `${this.baseURL}${this.endpointSignIn}`;
        const res = await this.request.post(requestURL, {
            data: {
                user: userCredential
            }
        })
        return res;
    }

    /**
     * GET TOKEN
     * @param userCredential 
     * @returns token
     */
    async getToken(userCredential: { userName: string, email: string, password: string }) {
        const res = await this.postSignUp(userCredential);
        const resBody = await res.json();
        let token = resBody.user.token;
        return token;
    }
}