import { expect, Page } from "@playwright/test";

export class HomePage {
    page: Page;

    xpathDashboard = '//h1[contains(text(),"Dashboard")]';
    xpathAtAGlance = '//h2[contains(text(),"At a Glance")]';
    xpathActivity = '//h2[contains(text(),"Activity")]';
    xpathPosts = '//*[@class="wp-menu-image dashicons-before dashicons-admin-post"]';
    xpathTags = '//a[contains(text(),"Tags")]';
    xpathcategories = '//a[contains(text(),"Categories")]';
    xpathMedia = '//div[contains(text(),"Media")]';
    xpathLibrary = '//a[@class="wp-first-item current"]';

    constructor(page: Page) {
        this.page = page;
    }

    async categoryPost() {
        await this.page.locator(this.xpathPosts).click();
    }

    async goToTagsScreen() {
        await this.page.locator(this.xpathTags).click();
    }

    async goToCategoryScreen() {
        await this.page.locator(this.xpathcategories).click();
    }

    async categoryMedia() {
        await this.page.locator(this.xpathMedia).click();
    }

    async goToLibraryScreen() {
        await this.page.locator(this.xpathLibrary).click();
    }
}