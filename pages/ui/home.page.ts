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

    async item(xpathItems: string) {
        await this.page.locator(xpathItems).click();
    }
}