import { test } from '@playwright/test';
test('Bai 4', async ({ page }) => {
    await test.step(('go to page'), async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('click vào Bài học 4: Personal notes', async () => {
        await page.locator("//*[contains(text(),'Bài học 4: Personal notes')]").click();
    });
    await test.step('Lay title và content từ page A nhập vào page B', async () => {
        await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", { waitUntil: 'load' });
        let countTitle = await page.locator('//h4[@class = "title-news"]/a').count();
        let countDescription = await page.locator('//p[@class = "description"]/a').count();
        let titles: string[] = [];
        let contents: string[] = [];

        for (let i = 0; i < countTitle; i++) {

            let title = await page.locator('//h4[@class = "title-news"]/a').nth(i).textContent();
            if (title) {
                titles.push(title);
            }
        }
        for (let j = 0; j < countDescription; j++) {
            let content = await page.locator('//p[@class = "description"]/a').nth(j).textContent();
            if (content) {
                contents.push(content);
            }
        }
        await page.goto("https://material.playwrightvn.com/04-xpath-personal-notes.html");
        for (let i = 1; i <= titles.length; i++) {
            if (i <= 10) {
                await page.locator('//*[@id ="note-title"]').fill(titles[i]);
                await page.locator('//*[@id ="note-content"]').fill(contents[i]);
                await page.locator('//*[@id ="add-note"]').click();
                await page.pause();
            }
        }
    });
    await test.step('Search Note', async () => {
        await page.locator('//*[@id ="search"]').fill('Điện thoại')
        await page.pause();
    })
})