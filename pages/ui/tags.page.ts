import { expect, Page } from "@playwright/test";

export class TagsPage {
    page: Page;

    xpathButtonAddTag = '//*[@id = "submit"]';
    xpathNoticeError = '//*[@class = "notice notice-error"]';
    xpathAddTagName = '//*[@id = "tag-name"]';
    xpathSlug = '//*[@id="tag-slug"]';
    xpathNoticeSuccess = '//*[@class="notice notice-success is-dismissible"]';
    xpathItemTag1 = '//tr[.//a[text()="tag Nguyen Lua"]]//a[@class="row-title"]';
    xpathItemTag2 = '//tr[.//a[text()="tag Nguyen Lua 02"]]//a[@class="row-title"]';
    xpathButtonDeleteTag = '//*[@id ="delete-link"]';
    xpathSearch = '//*[@id="tag-search-input"]';
    xpathButtonSearchSubmit = '//*[@id="search-submit"]';

    constructor(page: Page) {
        this.page = page;
    }

    async inputTagName(tagName: string) {
        await this.page.locator(this.xpathAddTagName).fill(tagName)
    }

    async inputSlug(slug: string) {
        await this.page.locator(this.xpathSlug).fill(slug);
    }

    async clickButtonAddTag() {
        await this.page.locator(this.xpathButtonAddTag).click();
    }
    async inputSearch(textSearch: string) {
        await this.page.locator(this.xpathSearch).fill(textSearch);

    }
    async clickButtonSearchSubmit() {
        await this.page.locator(this.xpathButtonSearchSubmit).click();
    }

    async viewDetailItem(xpathItemTag: string) {
        await this.page.locator(xpathItemTag).click();
    }

    async deleteItem() {
        await this.page.locator(this.xpathButtonDeleteTag).click();
    }
}