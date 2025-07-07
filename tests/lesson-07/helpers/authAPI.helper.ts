import { APIResponse, test, expect } from '@playwright/test';
import { SignInAPI } from '../../../pages/api/signIn';


export async function APISignIn(request) {
    const userInfor =
    {
        email: 'lorem85555512@gmail.com',
        password: '88888888'
    }

    let signInAPI: SignInAPI;
    signInAPI = new SignInAPI(request);
    const res = await signInAPI.postSignIn(userInfor);
    const statusCode: number = res.status();
    await expect(statusCode).toEqual(200);
    return await signInAPI.getToken(userInfor);
}