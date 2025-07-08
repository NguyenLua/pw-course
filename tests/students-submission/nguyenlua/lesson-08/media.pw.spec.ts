import { expect, test } from '@playwright/test';
import { DoLoginSuccess } from './helpers/auth.pw.helper';
import { HomePage } from './page/home-page-pw';
import { LibrariesPage } from './page/library-page-pw';
import { POMManager } from './page/pom-manager-pw';

test.describe('POST - Post', async () => {
    let pomManager: POMManager;
    let homePage: HomePage;
    let libraryPage: LibrariesPage;

    //Data Lgoin Success.
    const userNameS = 'p103-lua';
    const passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    const file = 'tests/students-submission/nguyenlua/lesson-08/lua.txt';
    const nameFile = 'lua.txt';

    test.beforeEach(async ({ page }) => {
        pomManager = new POMManager(page);
        homePage = pomManager.getHomePage();
        libraryPage = pomManager.getLibraryPage();

        await DoLoginSuccess(page);
        await homePage.categoryMedia();
        await homePage.goToLibraryScreen();
    });

    test('@MEDIA_FILES_001 - Media - upload file success', async ({ page }) => {
        await test.step('Tạo file `${name}.txt` bằng tay trong thư mục test của bài học hiện tại.Thực hiện upload file', async () => {
            await libraryPage.uploadFile(file);
        });

        await test.step('F5 trang', async () => {
            await page.reload();
            await expect(libraryPage.page.locator(libraryPage.xpathNameFile)).toContainText(nameFile);
        });

        await test.step('Teardown: xoá các dữ liệu đã thêm vào', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await libraryPage.viewDetailsFile();
            await libraryPage.deleteFile();
        });
    });
})