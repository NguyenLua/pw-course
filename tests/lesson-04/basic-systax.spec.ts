import { test } from '@playwright/test';
test("Basic systax", async ({ page }) => {
    await test.step("go to website", async () => {
        //go to material page
        await page.goto("https://material.playwrightvn.com/");

    });
    await test.step("click bai hoc 1", async () => {
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click();
        //db click

        //click count
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click({ clickCount: 5 });
        //Right cinic
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click({ button: "right" });

    })
})