import { expect, test } from '@playwright/test';
import { beforeEach } from 'node:test';
import { login } from './login';

test.describe('POST - Post/Tags', async () => {
    //Element
    const posts = '//*[@class="wp-menu-image dashicons-before dashicons-admin-post"]';
    const tags = '//a[contains(text(),"Tags")]';
    const btnAddTag = '//*[@id = "submit"]';
    const noticeError = '//*[@class = "notice notice-error"]';
    const addTagName = '//*[@id = "tag-name"]';
    const slug = '//*[@id="tag-slug"]';
    const noticeSuccess = '//*[@class="notice notice-success is-dismissible"]';
    const itemTag1 = '//tr[.//a[text()="tag Nguyen Lua"]]//a[@class="row-title"]';
    const itemTag2 = '//tr[.//a[text()="tag Nguyen Lua 02"]]//a[@class="row-title"]';
    const itemTag3 = '//tr[.//a[text()="tag Nguyen Lua 03"]]//a[@class="row-title"]';
    const deleteTag = '//*[@id ="delete-link"]';
    const search = '//*[@id="tag-search-input"]';
    const searchSubmit = '//*[@id="search-submit"]';

    //Data Lgoin Success.
    let userNameS = 'p103-lua';
    let passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    let newTagNameF = 'lesson tag';
    let newTagName01 = 'tag Nguyen Lua';
    let newTagName02 = 'tag Nguyen Lua 02';
    let slug02 = 'tag-nguyen-lua-02';
    let newTagName03 = 'tag Nguyen Lua 03';
    let slug03 = 'Đây là tag đặc biệt @100 $200';
    let textSearch = 'nguyen';

    test.beforeEach(async ({ page }) => {
        await login(page, userNameS, passwordS);
        await page.locator(posts).click();
        await page.locator(tags).click();
    });

    test('@POST_TAG_001 - Tag - add tag failed', async ({ page }) => {
        await test.step('step 1', async () => {
            await page.locator(btnAddTag).click();
            await expect(await page.locator(noticeError)).toContainText('A name is required for this term.');
        });

        await test.step('step 2', async () => {
            await page.locator(addTagName).waitFor();
            await page.locator(addTagName).click();
            await page.locator(addTagName).fill(newTagNameF);
            await page.locator(btnAddTag).click();
            await expect(await page.locator(noticeError)).toContainText('A term with the name provided already exists in this taxonomy.');
        });
    });

    test('@POST_TAG_002 - Tag - add tag success', async ({ page }) => {
        await test.step('step 1', async () => {
            await page.locator(addTagName).waitFor();
            await page.locator(addTagName).click();
            await page.locator(addTagName).fill(newTagName01);
            await page.locator(btnAddTag).click();
            await page.locator(noticeSuccess).waitFor();
            await expect(await page.locator(noticeSuccess)).toContainText('Tag added.');
        });

        await test.step('step 2', async () => {
            await page.locator(addTagName).waitFor();
            await page.locator(addTagName).click();
            await page.locator(addTagName).fill(newTagName02);
            await page.locator(slug).waitFor();
            await page.locator(slug).click();
            await page.locator(slug).fill(slug02);
            await page.locator(btnAddTag).click();
            await page.locator(noticeSuccess).waitFor();
            await expect(await page.locator(noticeSuccess)).toContainText('Tag added.');
        });

        await test.step('step 3', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await page.locator(search).waitFor();
            await page.locator(search).fill(textSearch);
            await page.locator(searchSubmit).click();

            //delete tag 1
            await page.locator(itemTag1).waitFor();
            await page.locator(itemTag1).click();
            await page.locator(deleteTag).click();
            //delete tag 2
            await page.locator(itemTag2).waitFor();
            await page.locator(itemTag2).click();
            await page.locator(deleteTag).click();
        });
    });

    test('@POST_TAG_003 Tag - slug auto remove special character', async ({ page }) => {
        await test.step('step 1', async () => {
            await page.locator(addTagName).waitFor();
            await page.locator(addTagName).click();
            await page.locator(addTagName).fill(newTagName03);
            await page.locator(slug).waitFor();
            await page.locator(slug).click();
            await page.locator(slug).fill(slug03);
            await page.locator(btnAddTag).click();
            await page.locator(noticeSuccess).waitFor();
            await expect(await page.locator(noticeSuccess)).toContainText('Tag added.');
        });

        await test.step('step 2', async () => {
            await page.locator(search).waitFor();
            await page.locator(search).fill(textSearch);
            await page.locator(searchSubmit).click();
            await page.locator(itemTag3).waitFor();
            await page.locator(itemTag3).click();
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });
            await page.locator(deleteTag).click();
        });
    });
});

test.describe('POST - Post/Category', async () => {
    //Element
    const posts = '//*[@class="wp-menu-image dashicons-before dashicons-admin-post"]';
    const categories = '//a[contains(text(),"Categories")]';
    const tfNameCategory = '//*[@id="tag-name"]';
    const tfSlugCategory = '//*[@id="tag-slug"]';
    const selectParent = '//*[@id="parent"]';
    const btnAddCategory = '//*[@id="submit"]';
    const noticeSuccess = '//*[@class="notice notice-success is-dismissible"]';
    const tfSearch = '//*[@id="tag-search-input"]';
    const btnSearch = '//*[@id="search-submit"]';
    const itemcategory01 = '//tr[.//a[text()="category nguyen lua 03"]]//a[@class="row-title"]';
    const itemcategory02 = '//tr[.//a[text()="category nguyen lua 04"]]//a[@class="row-title"]';
    const deleteTag = '//*[@id ="delete-link"]';

    //Data Lgoin Success.
    let userNameS = 'p103-lua';
    let passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    let nameCategory01 = 'category nguyen lua 03';
    let slugCategory01 = 'Đây là category đặc biệt @100 $200';
    let nameCategory02 = 'category nguyen lua 04';
    let selectParent02 = 'k11 class';
    let keySearch = 'nguyen';

    test.beforeEach(async ({ page }) => {
        await login(page, userNameS, passwordS);
        await page.locator(posts).click();
        await page.locator(categories).click();
    });

    test('@POST_CATEGORY_001 - Category - create category success', async ({ page }) => {
        await test.step('step 1', async () => {
            await page.locator(tfNameCategory).waitFor();
            await page.locator(tfNameCategory).click();
            await page.locator(tfNameCategory).fill(nameCategory01);
            await page.locator(tfSlugCategory).waitFor();
            await page.locator(tfSlugCategory).click();
            await page.locator(tfSlugCategory).fill(slugCategory01);
            await page.locator(btnAddCategory).click();
            await expect(await page.locator(noticeSuccess)).toContainText('Category added.');
        });

        await test.step('step 2', async () => {
            await page.locator(tfNameCategory).waitFor();
            await page.locator(tfNameCategory).click();
            await page.locator(tfNameCategory).fill(nameCategory02);
            await page.locator(selectParent).waitFor();
            await page.locator(selectParent).click();
            await page.locator(selectParent).selectOption(selectParent02);
            await page.locator(btnAddCategory).click();
            await expect(await page.locator(noticeSuccess)).toContainText('Category added.');
        });

        await test.step('step 3', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await page.locator(tfSearch).waitFor();
            await page.locator(tfSearch).fill(keySearch);
            await page.locator(btnSearch).click();
            await page.locator(itemcategory01).waitFor();
            await page.locator(itemcategory01).click();
            await page.locator(deleteTag).click();
            await page.locator(tfSearch).waitFor();
            await page.locator(tfSearch).fill(keySearch);
            await page.locator(btnSearch).click();
            await page.locator(itemcategory02).waitFor();
            await page.locator(itemcategory02).click();
            await page.locator(deleteTag).click();
        });
    });
});