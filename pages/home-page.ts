import { Page } from "@playwright/test";

export class HomePage {
    url: string;
    page: Page;
    xpathRegisterPage = "//a[contains(text(),'Bài học 1: Register Page')]";
    xpathProductPage = "//*[contains(text(),'Bài học 2: Product page')]";
    xpathToDoPage = '//*[contains(text(),"Bài học 3: Todo page")]';
    xpathPersonalNotePage = '//*[contains(text(),"Bài học 4: Personal notes")]';

    constructor(url: string, page: Page) {
        this.url = url;
        this.page = page;
    }

    async goToWebsite(url: string) {
        await this.page.goto(this.url);
    }

    async goToRegisterPage() {
        await this.page.locator(this.xpathRegisterPage).click();
    }

    async goToProductPage() {
        await this.page.locator(this.xpathProductPage).click();
    }

    async goToToDoPage() {
        await this.page.locator(this.xpathToDoPage).click();
    }

    async goToPersonalNotePage() {
        await this.page.locator(this.xpathPersonalNotePage).click();
    }
}