import { test } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { ToDoPage } from '../../pages/todo-page';

test.describe('Bai 3: Todo Page', async () => {
    const url = 'https://material.playwrightvn.com/';
    let homePage: HomePage;
    let toDoPage: ToDoPage;
    let newTask = (stt: number) => `todo ${stt}`;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(url, page);
        await homePage.goToWebsite(url);
        await homePage.goToToDoPage();
    });

    test('Bai 3', async ({ page }) => {
        toDoPage = new ToDoPage(page);
        await test.step('add 100 todo', async () => {
            for (let i = 1; i <= 100; i++) {
                await toDoPage.inputNewTask(newTask(i));
                await toDoPage.clickButtonAddTask();
            }
        });

        await test.step('xoa cac todo co so le', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            for (let i = 1; i <= 100; i++) {
                if (i % 2 !== 0) {
                    await toDoPage.deleteTask(i);
                }
            }
        });
        await test.step('kiem tra todo co so thu tu 90 nam trong view point', async () => {
            await toDoPage.viewPointToDo90();
        });

        await test.step('kiem tra todo co so thu tu 21 bi an( khong nam trong DOM)', async () => {
            await toDoPage.notViewPointToDo21();
        });
    });
})