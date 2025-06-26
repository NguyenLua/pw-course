import { test } from '@playwright/test';

test(('Bai 1'), async ({ page }) => {
    await test.step(('Truy cap page'), async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step(('click vào Bài học 1: Register Page'), async () => {
        await page.locator("//a[contains(text(),'Bài học 1: Register Page')]").click();
    });
    //Nhap cac thong de register.
    await test.step(('Nhap thong tin va click Register'), async () => {
        await page.locator('//*[@id="username"]').fill('Nguyen Lua');
        await page.locator('//*[@id="email"]').pressSequentially("nguyenlua090196@gmail.com", {
            delay: 100,
        });
        await page.locator('//*[@id="female"]').check();
        await page.locator('//*[@id="traveling"]').check();
        await page.locator('//*[@id="interests"]').selectOption('art');
        await page.locator('//*[@id="country"]').selectOption('canada');

        //select DOB
        await page.locator('//*[@id="dob"]').evaluate(el => {
            (el as HTMLInputElement).value = '05/10/1995';
            el.dispatchEvent(new Event('input', { bubbles: true }));
        });
        await page.locator('//*[@id="profile"]').setInputFiles("tests/lesson-04/new-file.txt");
        await page.locator('//*[@id="bio"]').fill('Lua Test');

        //Kéo rating
        await page.locator('//*[@id="rating"]').focus();
        await page.keyboard.press('ArrowRight');

        //chọn color
        await page.locator('//*[@id="favcolor"]').fill('#6d2222');

        await page.locator('//*[@id="newsletter"]').check();
        await page.locator('//*[@id="toggleOption"]').scrollIntoViewIfNeeded();
        await page.locator('//*[@class="slider round"]').click();

        //select star rating
        await page.locator('//*[@id="starRating"]').evaluate(el => el.setAttribute('data-rating', '4.5'));

        await page.locator('//button[@type ="submit"]').click();
        await page.pause();

    })
})