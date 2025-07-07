import { APIRequestContext, APIResponse } from "@playwright/test";

export class SignInAPI {
    request: APIRequestContext;
    baseURL = 'https://conduit-api.bondaracademy.com/';
    endpointSignIn = 'api/users/login';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async postSignIn(userInfor: { email: string, password: string }) {
        const requestURL = `${this.baseURL}${this.endpointSignIn}`;
        const res = await this.request.post(requestURL, {
            data: {
                user: userInfor
            }
        })
        return res;
    }

    async getToken(userInfor: { email: string, password: string }) {
        const res = await this.postSignIn(userInfor);
        const resBody = await res.json();
        let token = resBody.user.token;
        return token;
    }
}