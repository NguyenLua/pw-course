import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { TagsPage } from '../../pages/tags-page';
import { DoLoginSuccess } from '../helpers/auth.helper';

test.describe('POST - Post/Tags', async () => {
    let homePage: HomePage;
    let tagsPage: TagsPage;

    //Data Lgoin Success.
    let newTagNameFail = 'lesson tag';
    let newTagName01 = 'tag Nguyen Lua';
    let newTagName02 = 'tag Nguyen Lua 02';
    let slug02 = 'tag-nguyen-lua-02';
    let newTagName03 = 'tag Nguyen Lua 03';
    let slug03 = 'Đây là tag đặc biệt @100 $200';
    let textSearch = 'nguyen';
    const errorMessageRequiredField = 'A name is required for this term.';
    const errorMessageDuplicate = 'A term with the name provided already exists in this taxonomy.';
    const messageAddSuccess = 'Tag added.';

    test.beforeEach(async ({ page }) => {
        await DoLoginSuccess(page);
        homePage = new HomePage(page);
        await homePage.categoryPost();
        await homePage.goToTagsScreen();
    });

    test('@POST_TAG_001 - Tag - add tag failed', async ({ page }) => {
        tagsPage = new TagsPage(page);
        await test.step('Click button "Add New Tag"', async () => {
            tagsPage = new TagsPage(page);
            await tagsPage.clickButtonAddTag();

            //result
            await tagsPage.addTagFail(errorMessageRequiredField);
        });

        await test.step('Điền thông tin tag: name = "lesson tag", click button "Add New Tag', async () => {
            await tagsPage.inputTagName(newTagNameFail);
            await tagsPage.clickButtonAddTag();

            //result
            await tagsPage.addTagFail(errorMessageDuplicate);
        });
    });

    test('@POST_TAG_002 - Tag - add tag success', async ({ page }) => {
        tagsPage = new TagsPage(page);
        await test.step('Điền thông tin tag: name = "tag {name}" Click button "Add New Tag"', async () => {
            await tagsPage.inputTagName(newTagName01);
            await tagsPage.clickButtonAddTag();

            //result
            await tagsPage.addTagSuccess(messageAddSuccess);
        });

        await test.step('Điền thông tin tag: name = "tag {name} 02", slug = "tag-${name}-02"', async () => {
            await tagsPage.inputTagName(newTagName02);
            await tagsPage.inputSlug(slug02);
            await tagsPage.clickButtonAddTag();

            //result
            await tagsPage.addTagSuccess(messageAddSuccess);
        });

        await test.step('Teardown: xoá các dữ liệu đã thêm vào', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await tagsPage.inputSearch(textSearch);
            await tagsPage.clickButtonSearchSubmit();

            //delete tag 1
            await tagsPage.viewDetailItem1();
            await tagsPage.deleteItem();
            //delete tag 2
            await tagsPage.viewDetailItem2();
            await tagsPage.deleteItem();
        });
    });

    test('@POST_TAG_003 Tag - slug auto remove special character', async ({ page }) => {
        await test.step('Điền thông tin tag: name = "tag {name} 03", slug = "Đây là tag đặc biệt @100 $200"', async () => {
            await tagsPage.inputTagName(newTagName03);
            await tagsPage.inputSlug(slug03);
            await tagsPage.clickButtonAddTag();
            //result
            await tagsPage.addTagSuccess(messageAddSuccess);
        });

        await test.step('Teardown: xoá các dữ liệu đã thêm vào', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await tagsPage.inputSearch(textSearch);
            await tagsPage.clickButtonSearchSubmit();

            //delete tag 1
            await tagsPage.viewDetailItem1();
            await tagsPage.deleteItem();
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