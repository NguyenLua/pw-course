import { test, Page } from '@playwright/test';

test("Drag and Drop", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//*[contains(text(),"Bài học 5: Puzzle drag and drop game")]').click();
    const dragFrom = (i: any) => page.locator(`//*[@id="piece-${i}"]`);
    const dragToA = (i: any) => page.locator(`//*[@data-piece = "${i}"]`);
    for (let i = 1; i <= 4; i++) {
        await dragFrom(i).dragTo(dragToA(i));
    }
})