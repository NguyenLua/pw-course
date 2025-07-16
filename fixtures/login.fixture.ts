import { expect, Page, test as base } from '@playwright/test';
import { HomePage } from '../pages/home.paga';
import { LoginPage } from '../pages/login.page';
import { POMManager } from '../pages/pom-manager';

type fixtures = {
    dashboard: Page;
    envConf: EnvConf
}
class EnvConf {
    getValue(keyPrefix: string) {
        let keyPostFix = "_PROD";
        if (process.env.ENV === "dev") {
            keyPostFix = "_DEV";
        }
        return process.env[`${keyPrefix}${keyPostFix}`];
    }
}

const logInSuccessful = base.extend<fixtures>({

    envConf: async ({ }, use) => {
        const envConf = new EnvConf();
        await use(envConf);
    },

    dashboard: async ({ page, envConf }, use) => {

        let pomManager: POMManager;
        let loginPage: LoginPage;
        let homePage: HomePage;

        //Data Lgoin Success.
        const userNameSuccess = 'p103-lua';
        const passwordSuccess = 'xyg&7E9uQSavPoQIUF7Jl0bw';
        const url = envConf.getValue('URL') ?? '';
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

        await use(homePage.page);
    }
})

export { logInSuccessful };