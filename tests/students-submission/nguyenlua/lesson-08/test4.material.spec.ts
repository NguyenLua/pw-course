import { test } from '@playwright/test';
import { HomePage } from './page/home-page-material';
import { PersonalNotePage } from './page/personal-note-page-material';
import { POMManager } from './page/pom-manager-material';

test.describe('Bai 3: Todo Page', async () => {
    const url = 'https://material.playwrightvn.com/';
    const urlVNExpresss = 'https://vnexpress.net/khoa-hoc-cong-nghe';
    const keySearch = 'Việt Nam';
    let pomManagerMaterial: POMManager;
    let homePage: HomePage;
    let personalNotePage: PersonalNotePage;

    test.beforeEach(async ({ page }) => {
        pomManagerMaterial = new POMManager(page);
        homePage = pomManagerMaterial.getHomePage(url);
        personalNotePage = pomManagerMaterial.getPersonalNotePage(urlVNExpresss);

        await homePage.goToWebsite(url);
        await homePage.goToPersonalNotePage();
    });

    test('Bai 4', async ({ page }) => {
        await test.step('Lay title và content từ page A nhập vào page B', async () => {
            await personalNotePage.goToExpressWebsite(urlVNExpresss);
            await personalNotePage.getContentTitles();
            await personalNotePage.getContentDescription();
            homePage = new HomePage(url, page);
            await homePage.goToWebsite(url);
            await homePage.goToPersonalNotePage();
            await personalNotePage.inputMultiplePersonalNote();
        });

        await test.step('Search Note', async () => {
            await personalNotePage.search(keySearch);
        });

        await test.step('Check key search', async () => {
            await personalNotePage.checkKeySearch();
        });
    });
})