import { Page } from '@playwright/test';

export async function login(page: Page, userName: string, password: string) {
    //Find Element.
    const tfUserName = '//*[@id="user_login"]';
    const tfPassword = '//*[@id="user_pass"]';
    const btnLogIn = '//*[@id="wp-submit"]';

    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    await page.locator(tfUserName).waitFor();
    await page.locator(tfUserName).click();
    await page.locator(tfUserName).fill(userName);
    await page.locator(tfPassword).waitFor();
    await page.locator(tfPassword).click();
    await page.locator(tfPassword).fill(password);
    await page.locator(btnLogIn).click();
}