import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { TagsPage } from '../../pages/tags-page';
import { DoLoginSuccess } from '../helpers/auth.helper';
import { CategoriesPage } from '../../pages/category-page';

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
    let homePage: HomePage;
    let categoriesPage: CategoriesPage;

    //Data Lgoin Success.
    let userNameS = 'p103-lua';
    let passwordS = 'xyg&7E9uQSavPoQIUF7Jl0bw';
    let nameCategory01 = 'category nguyen lua 03';
    let slugCategory01 = 'Đây là category đặc biệt @100 $200';
    let nameCategory02 = 'category nguyen lua 04';
    let selectParent02 = 'k11 class';
    let keySearch = 'nguyen';
    const noticeSuccess = 'Category added.';

    test.beforeEach(async ({ page }) => {
        await DoLoginSuccess(page);
        homePage = new HomePage(page);
        await homePage.categoryPost();
        await homePage.goToCategoryScreen();
    });

    test('@POST_CATEGORY_001 - Category - create category success', async ({ page }) => {
        categoriesPage = new CategoriesPage(page);
        await test.step('Điền thông tin category: name = "category {name} 03", slug = "Đây là category đặc biệt @100 $200"', async () => {
            await categoriesPage.inputNameCategory(nameCategory01);
            await categoriesPage.inputSlugCategory(slugCategory01);
            await categoriesPage.clickButtonAddCatetory();

            //Result
            await categoriesPage.addCategorySuccess(noticeSuccess);
        });

        await test.step('Điền thông tin category: name = "category {name} 04", parent = "K11 class"', async () => {
            await categoriesPage.inputNameCategory(nameCategory02);
            await categoriesPage.inputSlugCategory(selectParent02);
            await categoriesPage.clickButtonAddCatetory();

            //Result
            await categoriesPage.addCategorySuccess(noticeSuccess);
        });

        await test.step('Teardown: xoá các dữ liệu đã thêm vào', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await categoriesPage.inputSearch(keySearch);
            await categoriesPage.clickButtonSearchSubmit();

            //delete category 1
            await categoriesPage.viewDetailCategory1();
            await categoriesPage.deleteItem();


            //delete category 2
            await categoriesPage.viewDetailCategory2();
            await categoriesPage.deleteItem();
        });
    });
});