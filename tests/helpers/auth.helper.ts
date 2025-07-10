import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';

export async function DoLoginSuccess(page) {
    let loginPage: LoginPage;
    let homePage: HomePage;

    //Data Lgoin Success.
    const userNameSuccess = 'p103-lua';
    const passwordSuccess = 'xyg&7E9uQSavPoQIUF7Jl0bw';

    const url = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    const textDashboard = 'Dashboard';
    const textAtAGlance = 'At a Glance';
    const textActivity = 'Activity';

    loginPage = new LoginPage(url, page);
    await loginPage.goToWebsite(url);
    homePage = new HomePage(page);
    await loginPage.inputUserLogin(userNameSuccess);
    await loginPage.inputPassword(passwordSuccess);
    await loginPage.clickButtonLogin();

    //Result
    await homePage.checkLoginSuccess(textDashboard, textAtAGlance, textActivity);
}