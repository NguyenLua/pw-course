import { Page } from "@playwright/test";
import { CategoriesPage } from "./category-page-pw";
import { HomePage } from "./home-page-pw";
import { LibrariesPage } from "./library-page-pw";
import { LoginPage } from "./login-page-pw";
import { TagsPage } from "./tags-page-pw";

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

    getCategoryPage() {
        return new CategoriesPage(this.page);
    }

    getLibraryPage() {
        return new LibrariesPage(this.page);
    }

    getTagsPage() {
        return new TagsPage(this.page);
    }
}