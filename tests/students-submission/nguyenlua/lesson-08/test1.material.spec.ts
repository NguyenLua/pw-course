import { expect, test } from "@playwright/test";
import { beforeEach } from "node:test";
import { HomePage } from "./page/home-page-material";
import { POMManager } from "./page/pom-manager-material";
import { RegisterPage } from "./page/register-page-material";

test.describe('Bai 1 - Register Page', async () => {
    //input value
    const url = 'https://material.playwrightvn.com/';
    const userName = 'Xiu';
    const email = 'abce@gmail.com';

    let pomManagerMaterial: POMManager;
    let homePage: HomePage;
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        pomManagerMaterial = new POMManager(page);
        homePage = pomManagerMaterial.getHomePage(url)
        registerPage = pomManagerMaterial.getRegisterPage();

        await homePage.goToWebsite(url);
        await homePage.goToRegisterPage();
    });

    test(('Bai 1'), async ({ page }) => {

        await test.step('Nhap day du cac thong tin, click button register', async () => {
            await registerPage.inputUserName(userName);
            await registerPage.inputEmail(email);
            await registerPage.checkGender();
            await registerPage.checkHobbies();
            await registerPage.clickRegister();
        });

        await test.step('kiem tra noi dung da dang ky o bang la dung', async () => {
            await expect(registerPage.page.locator(registerPage.xpathNewEmail(email))).toBeVisible();
        });
    });
})