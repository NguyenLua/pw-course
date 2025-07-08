import { expect, Page } from "@playwright/test";

export class ProductPage {
    page: Page;
    xpathProduct1 = '//button[@data-product-id="1"]';
    xpathProduct2 = '//button[@data-product-id="2"]';
    xpathProduct3 = '//button[@data-product-id="3"]';
    xpathAddProduct1 = '//*[@id="cart-items"]//tr[td[contains(text(),"Product 1")] and td[text()="2"]]';
    xpathAddProduct2 = '//*[@id="cart-items"]//tr[td[contains(text(),"Product 2")] and td[text()="3"]]';
    xpathAddProduct3 = '//*[@id="cart-items"]//tr[td[contains(text(),"Product 1")] and td[text()="2"]]';
    xpathTotalPrice = '//*[@class="cart"]//tr[td[contains(text(),"Total Price:")] and td[text() ="$110.00"]]';
    constructor(page: Page) {
        this.page = page;
    }
    async addProduct1() {
        await this.page.locator(this.xpathProduct1).dblclick();
    }

    async addProduct2() {
        await this.page.locator(this.xpathProduct2).click({ clickCount: 3 });
    }

    async addProduct3() {
        await this.page.locator(this.xpathProduct3).click();
    }

    //Expected
    async checkQuantityProduct1() {
        await expect(await this.page.locator(this.xpathAddProduct1)).toBeVisible();
    }
    async checkQuantityProduct2() {
        await expect(await this.page.locator(this.xpathAddProduct2)).toBeVisible();
    }

    async checkQuantityProduct3() {
        await expect(await this.page.locator(this.xpathAddProduct3)).toBeVisible();
    }

    async totalPrice() {
        await expect(await this.page.locator(this.xpathTotalPrice)).toBeVisible();
    }
}