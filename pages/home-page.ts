import { expect, Page } from "@playwright/test";

export class HomePage {
    page: Page;

    xpathDashboard = '//h1[contains(text(),"Dashboard")]';
    xpathAtAGlance = '//h2[contains(text(),"At a Glance")]';
    xpathActivity = '//h2[contains(text(),"Activity")]';
    xpathPosts = '//*[@class="wp-menu-image dashicons-before dashicons-admin-post"]';
    xpathTags = '//a[contains(text(),"Tags")]';

    constructor(page: Page) {
        this.page = page;
    }

    async checkLoginSuccess(textDashboard: string, textAtAGlance: string, textActivity: string) {
        await expect(this.page.locator(this.xpathDashboard)).toContainText(textDashboard);
        await expect(this.page.locator(this.xpathAtAGlance)).toContainText(textAtAGlance);
        await expect(this.page.locator(this.xpathActivity)).toContainText(textActivity);
    }
    async categoryPost() {
        await this.page.locator(this.xpathPosts).click();
    }

    async goToTagsScreen() {
        await this.page.locator(this.xpathTags).click();
    }

}