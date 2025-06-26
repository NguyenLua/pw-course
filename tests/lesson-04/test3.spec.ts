import { test } from '@playwright/test';
test('Bai 3', async ({ page }) => {
    await test.step(('go to page'), async () => {
        await page.goto("https://material.playwrightvn.com/");

    });
    await test.step('click vào Bài học 3: Todo page', async () => {
        await page.locator("//*[contains(text(),'Bài học 3: Todo page')]").click();

    });
    await test.step('add 100 todo', async () => {
        for (let i = 1; i <= 4; i++) {
            await page.locator("//*[@id='new-task']").fill('Todo ' + i);
            await page.locator("//button[@id='add-task']").click();


        }
    });
    await test.step('xoa cac todo co so le', async () => {
        page.on('dialog', async (dialog) => {
            //console.log('Popup nội dung:', dialog.message());
            await dialog.accept();  // Tự động click OK
        });
        for (let i = 1; i <= 4; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
    await page.pause();
})