import test from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { ProductPage } from '../../pages/product-page';

test.describe('Bai 2 : Product Page', async () => {
    const url = 'https://material.playwrightvn.com/';

    let homePage: HomePage;
    let productPage: ProductPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(url, page);
        await homePage.goToWebsite(url);
        await homePage.goToProductPage();
    });

    test('Bai 2', async ({ page }) => {
        productPage = new ProductPage(page);
        await test.step('Them san pham vao gio hang', async () => {
            await productPage.addProduct1();
            await productPage.addProduct2();
            await productPage.addProduct3();
        });

        await test.step('Kiem tra so luong san pham tai gio hang', async () => {
            await productPage.checkQuantityProduct1();
            await productPage.checkQuantityProduct2();
            await productPage.checkQuantityProduct3();
        });

        await test.step('Kiem tra tong tien tai gio hang', async () => {
            await productPage.totalPrice();
        });
    });
})