import { expect, test } from '@playwright/test';
import { HomePage } from './page/home-page-material';
import { POMManager } from './page/pom-manager-material';
import { ProductPage } from './page/product-page-material';


test.describe('Bai 2 : Product Page', async () => {
    const url = 'https://material.playwrightvn.com/';

    let pomManagerMaterial: POMManager;
    let homePage: HomePage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        pomManagerMaterial = new POMManager(page);
        homePage = pomManagerMaterial.getHomePage(url);
        productPage = pomManagerMaterial.getProductPage();
        await homePage.goToWebsite(url);
        await homePage.goToProductPage();
    });

    test('Bai 2', async ({ page }) => {
        await test.step('Them san pham vao gio hang', async () => {
            await productPage.addProduct1();
            await productPage.addProduct2();
            await productPage.addProduct3();
        });

        await test.step('Kiem tra so luong san pham tai gio hang', async () => {
            await expect(await productPage.page.locator(productPage.xpathAddProduct1)).toBeVisible();
            await expect(await productPage.page.locator(productPage.xpathAddProduct2)).toBeVisible();
            await expect(await productPage.page.locator(productPage.xpathAddProduct3)).toBeVisible();
        });

        await test.step('Kiem tra tong tien tai gio hang', async () => {
            await expect(await productPage.page.locator(productPage.xpathTotalPrice)).toBeVisible();
        });
    });
})