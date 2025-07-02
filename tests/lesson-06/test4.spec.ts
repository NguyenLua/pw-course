import { test } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { PersonalNotePage } from '../../pages/personal-note-page';

test.describe('Bai 3: Todo Page', async () => {
    const url = 'https://material.playwrightvn.com/';
    const urlVNExpresss = 'https://vnexpress.net/khoa-hoc-cong-nghe';
    const keySearch = 'Việt Nam';
    let homePage: HomePage;
    let personalNotePage: PersonalNotePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(url, page);
        await homePage.goToWebsite(url);
        await homePage.goToPersonalNotePage();
    });

    test('Bai 4', async ({ page }) => {

        personalNotePage = new PersonalNotePage(urlVNExpresss, page);
        await test.step('Lay title và content từ page A nhập vào page B', async () => {
            await personalNotePage.goToExpressWebsite(urlVNExpresss);
            await personalNotePage.getContentTitles();
            await personalNotePage.getContentDescription();
            homePage = new HomePage(url, page);
            await homePage.goToWebsite(url);
            await homePage.goToPersonalNotePage();
            await personalNotePage.inputMultiplePersonalNote();
            await page.pause();
        });

        await test.step('Search Note', async () => {
            await personalNotePage.search(keySearch);
        });

        await test.step('Check key search', async () => {
            await personalNotePage.checkKeySearch();
            await page.pause();
        });
    });
})