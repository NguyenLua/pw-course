import { expect, Page } from "@playwright/test";

export class LibrariesPage {
    page: Page;

    xpathButtonAddMediaFile = '//*[@id="wp-media-grid"]//a[contains(text(),"Add Media File")]';
    xpathButtonSelectFiles = '//*[@class="browser button button-hero"]';
    xpathInputFile = '//input[@type = "file"]';
    xpathNameFile = '//div[@class ="filename"]//div[contains(text(),"lua.txt")]//ancestor::li';
    xpathButtonDelete = '//*[@class="button-link delete-attachment"]';

    constructor(page: Page) {
        this.page = page;
    }

    async uploadFile(file: string) {
        await this.page.locator(this.xpathButtonAddMediaFile).waitFor();
        await this.page.locator(this.xpathButtonAddMediaFile).click();
        await this.page.locator(this.xpathInputFile).setInputFiles(file);
    }

    async viewDetailsFile() {
        await this.page.locator(this.xpathNameFile).click();
    }

    async deleteFile() {
        await this.page.locator(this.xpathButtonDelete).click()
    }

    //result
    async uploadFileSuccess(fileName: string) {
        await expect(this.page.locator(this.xpathNameFile)).toContainText(fileName);
    }
}