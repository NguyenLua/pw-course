import { expect, Page } from "@playwright/test";

export class ToDoPage {
    page: Page;
    xpathNewTask = '//*[@id="new-task"]';
    xpathBtnAddTask = '//button[@id="add-task"]';
    xpathDeleteToDoTask = (stt: number) => `//button[@id="todo-${stt}-delete"]`;
    xpathtoDo90 = '//span[contains(text(),"todo 90")]';
    xpathtoDo21 = '//span[contains(text(),"todo 21")]';

    constructor(page: Page) {
        this.page = page;
    }

    async inputNewTask(newTask: string) {
        await this.page.locator(this.xpathNewTask).fill(newTask);
    }
    async clickButtonAddTask() {
        await this.page.locator(this.xpathBtnAddTask).click();
    }

    async deleteTask(stt: number) {
        await this.page.locator(this.xpathDeleteToDoTask(stt)).click();
    }

    //result
    async viewPointToDo90() {
        await expect(this.page.locator(this.xpathtoDo90)).toBeVisible();
    }

    async notViewPointToDo21() {
        await expect(this.page.locator(this.xpathtoDo21)).not.toBeVisible();
    }
}