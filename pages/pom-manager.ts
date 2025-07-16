import { Page } from "@playwright/test";
import { HomePage } from "./home.paga";
import { LoginPage } from "./login.page";

export class POMManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginPage(url: string) {
        return new LoginPage(url, this.page);
    }

    getHomePage() {
        return new HomePage(this.page);
    }
}