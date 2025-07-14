import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { LoginPage } from "./login.page";
import { TagsPage } from "./tags.page";


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

    getTagsPage() {
        return new TagsPage(this.page);
    }
}