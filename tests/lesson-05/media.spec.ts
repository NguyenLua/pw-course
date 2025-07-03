import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { DoLoginSuccess } from '../helpers/auth.helper';
import { LibrariesPage } from '../../pages/library-page';


test.describe('POST - Post', async () => {
    let homePage: HomePage;
    let libraryPage: LibrariesPage;

    //Data Lgoin Success.
    const userNameS = 'p103-lua';
    const passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    const file = 'tests/lesson-05/lua.txt';
    const nameFile = 'lua.txt';

    test.beforeEach(async ({ page }) => {
        await DoLoginSuccess(page);
        homePage = new HomePage(page);
        await homePage.categoryMedia();
        await homePage.goToLibraryScreen();
    });

    test('@MEDIA_FILES_001 - Media - upload file success', async ({ page }) => {
        libraryPage = new LibrariesPage(page);
        await test.step('Tạo file `${name}.txt` bằng tay trong thư mục test của bài học hiện tại.Thực hiện upload file', async () => {
            await libraryPage.uploadFile(file);
        });

        await test.step('F5 trang', async () => {
            await page.reload();
            await libraryPage.uploadFileSuccess(nameFile);
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