import { expect, test } from "@playwright/test";
import { beforeEach } from "node:test";
import { HomePage } from "../../pages/home-page";
import { RegisterPage } from "../../pages/register-page";


test.describe('Bai 1 - Register Page', async () => {
    //input value
    const url = 'https://material.playwrightvn.com/';
    const userName = 'Xiu';
    const email = 'abce@gmail.com';

    let homePage: HomePage;
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(url, page);
        await homePage.goToWebsite(url);
        await homePage.goToRegisterPage();
    });

    test(('Bai 1'), async ({ page }) => {
        registerPage = new RegisterPage(page);

        await test.step('Nhap day du cac thong tin, click button register', async () => {
            await registerPage.inputUserName(userName);
            await registerPage.inputEmail(email);
            await registerPage.checkGender();
            await registerPage.checkHobbies();
            await registerPage.clickRegister();
        });

        await test.step('kiem tra noi dung da dang ky o bang la dung', async () => {
            const xpathNewEmail = await registerPage.checkNewEmail(email);
            await expect(page.locator(xpathNewEmail)).toBeVisible();
        });
    });
})