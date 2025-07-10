import { expect, test } from '@playwright/test';
import { DoLoginSuccess } from './helpers/auth.pw.helper';
import { LoginPage } from './page/login-page-pw';
import { POMManager } from './page/pom-manager-pw';

test.describe('AUTH - Authentication', async () => {
    let pomManager: POMManager;
    let loginPage: LoginPage;

    //Data Login Fail.
    const userNameFail = 'p103-lua-1';
    const passwordFail = '1234567890';
    const url = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

    test('@AUTH_001 - Login fail', async ({ page }) => {
        pomManager = new POMManager(page);
        loginPage = pomManager.getLoginPage(url);

        await test.step('Open Login Page', async () => {
            await loginPage.goToWebsite(url);
        });

        await test.step('Nhập vào thông tin username, password bị sai', async () => {
            await loginPage.inputUserLogin(userNameFail);
            await loginPage.inputPassword(passwordFail);
        });

        await test.step('Click button login', async () => {
            await loginPage.clickButtonLogin();

            //Verify loi
            await expect(loginPage.page.locator(loginPage.xpathErrorMessage)).toContainText(`The username ${userNameFail} is not registered on this site`);
        });
    });

    test('@AUTH_002 - Login success', async ({ page }) => {
        await DoLoginSuccess(page);
    });
})