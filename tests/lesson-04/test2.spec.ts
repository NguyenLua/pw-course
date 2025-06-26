import { test } from '@playwright/test';

test(('Bai 3'), async ({ page }) => {
    await test.step(('Truy cap page'), async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step(('click vào Bài học 2: Product page'), async () => {
        await page.locator("//*[contains(text(),'Bài học 2: Product page')]").click();
    });
    await test.step(('Them 2 san pham cua san pham 1'), async () => {
        await page.locator("//button[@data-product-id=1]").dblclick();
    });
    await test.step(('Them 3 san pham cua san pham 2'), async () => {
        await page.locator("//button[@data-product-id=2]").click({ clickCount: 3 });
    });
    await test.step(('Them 1 san pham cua san pham 3'), async () => {
        await page.locator("//button[@data-product-id=3]").click();
    });
    await test.step(('Kiem tra da add thanh cong chua'), async () => {
        await page.locator("//*[@class='cart']").scrollIntoViewIfNeeded();
        await page.pause();
    });
})