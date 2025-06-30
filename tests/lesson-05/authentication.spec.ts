import { expect, test } from '@playwright/test';
import { beforeEach } from 'node:test';
import { login } from './login';

test.describe('AUTH - Authentication', async () => {
    //Find Element.
    const tfUserName = '//*[@id="user_login"]';
    const tfPassword = '//*[@id="user_pass"]';
    const btnLogIn = '//*[@id="wp-submit"]';
    const loginError = '//*[@id="login_error"]';
    const dashboard = '//h1[contains(text(),"Dashboard")]';
    const ataGlance = '//h2[contains(text(),"At a Glance")]';
    const activity = '//h2[contains(text(),"Activity")]';

    //Data Login Fail.
    let userNameF = 'p103-lua-1';
    let passwordF = '1234567890';

    //Data Lgoin Success.
    let userNameS = 'p103-lua';
    let passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';

    test('@AUTH_001 - Login fail', async ({ page }) => {
        await login(page, userNameF, passwordF);

        //Show error message.
        await expect(await page.locator(loginError)).toContainText(`The username ${userNameF} is not registered on this site`);
    });

    test('@AUTH_002 - Login success', async ({ page }) => {
        await login(page, userNameS, passwordS);

        //Check result.
        await expect(await page.locator(dashboard)).toContainText('Dashboard');
        await expect(await page.locator(ataGlance)).toContainText('At a Glance');
        await expect(await page.locator(activity)).toContainText('Activity');
    })
})