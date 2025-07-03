import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';
import { DoLoginSuccess } from '../../tests/helpers/auth.helper';

test.describe('AUTH - Authentication', async () => {
    let loginPage: LoginPage;

    //Data Login Fail.
    const userNameFail = 'p103-lua-1';
    const passwordFail = '1234567890';
    const url = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

    test('@AUTH_001 - Login fail', async ({ page }) => {
        loginPage = new LoginPage(url, page);
        test.step('Open Login Page', async () => {
            await loginPage.goToWebsite(url);
        })
        test.step('Nhập vào thông tin username, password bị sai', async () => {
            await loginPage.inputUserLogin(userNameFail);
            await loginPage.inputPassword(passwordFail);
        });

        test.step('Click button login', async () => {
            await loginPage.clickButtonLogin();

            //Result
            await loginPage.checkLoginfail(userNameFail);
        });
    });

    test('@AUTH_002 - Login success', async ({ page }) => {
        await DoLoginSuccess(page);
    });
})