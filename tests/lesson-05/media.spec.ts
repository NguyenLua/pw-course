import { expect, test } from '@playwright/test';
import { beforeEach } from 'node:test';
import { login } from './login';
import path from 'path';

test.describe('POST - Post', async () => {
    //Element
    const menu = '//*[@id ="wp-admin-bar-menu-toggle"]';
    const media = '//div[contains(text(),"Media")]';
    const library = '//a[@class="wp-first-item current"]';
    const btnAddMediaFile = '//*[@id="wp-media-grid"]//a[contains(text(),"Add Media File")]';
    const btnSelectFiles = '//*[@class="browser button button-hero"]';
    const inputFile = '//input[@type = "file"]';
    const nameFile = '//div[@class ="filename"]//div[contains(text(),"lua.txt")]//ancestor::li';
    const btnDelete = '//*[@class="button-link delete-attachment"]';

    //Data Lgoin Success.
    const userNameS = 'p103-lua';
    const passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    const file = 'tests/lesson-05/lua.txt';
    const name = 'lua.txt';

    test.beforeEach(async ({ page }) => {
        await login(page, userNameS, passwordS);
        await page.locator(media).click();
        await page.locator(library).click();
    });

    test('@MEDIA_FILES_001 - Media - upload file success', async ({ page }) => {
        await test.step('step 1', async () => {
            await page.locator(btnAddMediaFile).waitFor();
            await page.locator(btnAddMediaFile).click();
            await page.locator(inputFile).setInputFiles(file);
        });

        await test.step('step 2', async () => {
            await page.reload();
            await expect(await page.locator(nameFile)).toContainText(name);
        });

        await test.step('step 2', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });
            await page.locator(nameFile).click();
            await page.locator(btnDelete).click()

        });
    });
})