import { logInSuccessful } from "../../fixtures/login.fixture";
import { expect } from '@playwright/test';
import { HomePage } from "../../pages/home.paga";


const test = logInSuccessful;
test("Login page playwrightvn", async ({ dashboard }) => {
    let homePage = new HomePage(dashboard);

    await test.step("So sánh ảnh chụp màn hình của dashboard", async () => {
        console.log('Login thanh cong');
        const blockActivity = dashboard.locator(homePage.xpathActivity);
        const atAGlance = dashboard.locator(homePage.xpathAtAGlance);
        await expect(dashboard).toHaveScreenshot({
            mask: [blockActivity],
            maskColor: '#7134eb'
        });
        await expect(dashboard).toHaveScreenshot({
            mask: [atAGlance],
            maskColor: '#7134eb'
        });
    })

    await test.step("Đi tới trang Tag. So sánh ảnh chụp màn hình fullPage, che đi danh sách các tag", async () => {
        await homePage.item(homePage.xpathPosts);
        await homePage.item(homePage.xpathTags);
        await expect(dashboard).toHaveScreenshot({
            fullPage: true,
        });
        await expect(dashboard).toHaveScreenshot({
            mask: [dashboard.locator('//*[@id="the-list"]')],
            maskColor: '#00000'
        });
    })
})