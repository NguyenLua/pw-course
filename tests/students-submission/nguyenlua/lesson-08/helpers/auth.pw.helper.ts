import { expect, test } from '@playwright/test';
import { HomePage } from '../page/home-page-pw';
import { LoginPage } from '../page/login-page-pw';
import { POMManager } from '../page/pom-manager-pw';


export async function DoLoginSuccess(page) {
    let pomManager: POMManager;
    let loginPage: LoginPage;
    let homePage: HomePage;

    //Data Lgoin Success.
    const userNameSuccess = 'p103-lua';
    const passwordSuccess = 'xyg&7E9uQSavPoQIUF7Jl0bw';

    const url = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    const textDashboard = 'Dashboard';
    const textAtAGlance = 'At a Glance';
    const textActivity = 'Activity';

    pomManager = new POMManager(page);
    loginPage = pomManager.getLoginPage(url);
    homePage = pomManager.getHomePage();

    await loginPage.goToWebsite(url);
    await loginPage.inputUserLogin(userNameSuccess);
    await loginPage.inputPassword(passwordSuccess);
    await loginPage.clickButtonLogin();

    //Result
    await expect(homePage.page.locator(homePage.xpathDashboard)).toContainText(textDashboard);
    await expect(homePage.page.locator(homePage.xpathAtAGlance)).toContainText(textAtAGlance);
    await expect(homePage.page.locator(homePage.xpathActivity)).toContainText(textActivity);
}