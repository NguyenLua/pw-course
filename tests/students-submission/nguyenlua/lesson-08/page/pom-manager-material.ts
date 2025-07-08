import { Page } from "@playwright/test";
import { HomePage } from "./home-page-material";
import { PersonalNotePage } from "./personal-note-page-material";
import { ProductPage } from "./product-page-material";
import { RegisterPage } from "./register-page-material";
import { ToDoPage } from "./todo-page-material";

export class POMManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getHomePage(url: string) {
        return new HomePage(url, this.page);
    }

    getPersonalNotePage(urlVNExpress: string) {
        return new PersonalNotePage(urlVNExpress, this.page);
    }

    getProductPage() {
        return new ProductPage(this.page);
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    }

    getToDoPage() {
        return new ToDoPage(this.page);
    }
}