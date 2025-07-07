import { APIResponse, test, expect } from '@playwright/test';
import { SignUpAPI } from '../../pages/api/signUp';


test.describe("Test 1", async () => {
    let signUpAPI: SignUpAPI;
    const userCredential =
    {
        userName: 'HAhA855555',
        email: 'lorem85555512@gmail.com',
        password: '88888888'
    }

    test('tao moi tai khoan', async ({ request }) => {
        signUpAPI = new SignUpAPI(request);
        const res = await signUpAPI.postSignUp(userCredential);
        const statusCode: number = res.status();
        await expect(statusCode).toEqual(201);
        return await signUpAPI.getToken(userCredential);
    })
})