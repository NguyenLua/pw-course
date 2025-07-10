import { expect, Page } from "@playwright/test";

export class CategoriesPage {
    page: Page;
    xpathAddNameCategory = '//*[@id="tag-name"]';
    xpathAddSlugCategory = '//*[@id="tag-slug"]';
    xpathSelectParent = '//*[@id="parent"]';
    xpathButtonAddCategory = '//*[@id="submit"]';
    xpathNoticeSuccess = '//*[@class="notice notice-success is-dismissible"]';
    xpathInputSearch = '//*[@id="tag-search-input"]';
    xpathButtonSearch = '//*[@id="search-submit"]';
    xpathItemcategory01 = '//tr[.//a[text()="category nguyen lua 03"]]//a[@class="row-title"]';
    xpathItemcategory02 = '//tr[.//a[text()="category nguyen lua 04"]]//a[@class="row-title"]';
    xpathButtonDeleteTag = '//*[@id ="delete-link"]';

    constructor(page: Page) {
        this.page = page;
    }

    async inputNameCategory(nameCategory01: string) {
        await this.page.locator(this.xpathAddNameCategory).waitFor();
        await this.page.locator(this.xpathAddNameCategory).click();
        await this.page.locator(this.xpathAddNameCategory).fill(nameCategory01);
    }

    async inputSlugCategory(slugCategory01: string) {
        await this.page.locator(this.xpathAddSlugCategory).waitFor();
        await this.page.locator(this.xpathAddSlugCategory).click();
        await this.page.locator(this.xpathAddSlugCategory).fill(slugCategory01);
    }

    async clickButtonAddCatetory() {
        await this.page.locator(this.xpathButtonAddCategory).click();
    }

    async inputSearch(keySearch: string) {
        await this.page.locator(this.xpathInputSearch).waitFor();
        await this.page.locator(this.xpathInputSearch).fill(keySearch);
    }
    async clickButtonSearchSubmit() {
        await this.page.locator(this.xpathButtonDeleteTag).click();
    }


    async viewDetailCategory1() {
        await this.page.locator(this.xpathItemcategory01).waitFor();
        await this.page.locator(this.xpathItemcategory01).click();
    }

    async viewDetailCategory2() {
        await this.page.locator(this.xpathItemcategory02).waitFor();
        await this.page.locator(this.xpathItemcategory02).click();
    }
    async deleteItem() {
        await this.page.locator(this.xpathButtonDeleteTag).click();
    }
}