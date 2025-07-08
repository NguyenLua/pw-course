import { expect, Page } from "@playwright/test";

export class LoginPage {
    url: string;
    page: Page;

    xpathUserName = '//*[@id="user_login"]';
    xpathPassword = '//*[@id="user_pass"]';
    xpathButtonLogIn = '//*[@id="wp-submit"]';
    xpathErrorMessage = '//*[@id="login_error"]';

    constructor(url: string, page: Page) {
        this.url = url;
        this.page = page;
    }

    async goToWebsite(url: string) {
        await this.page.goto(this.url);
    }

    async inputUserLogin(userName: string) {
        await this.page.locator(this.xpathUserName).waitFor();
        await this.page.locator(this.xpathUserName).click();
        await this.page.locator(this.xpathUserName).fill(userName);
    }

    async inputPassword(password: string) {
        await this.page.locator(this.xpathPassword).waitFor();
        await this.page.locator(this.xpathPassword).click();
        await this.page.locator(this.xpathPassword).fill(password);
    }

    async clickButtonLogin() {
        await this.page.locator(this.xpathButtonLogIn).click();
    }
}