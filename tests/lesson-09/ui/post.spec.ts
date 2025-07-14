import { expect } from '@playwright/test';
import { logInSuccessful } from '../../../fixtures/ui/login.fixture';
import { HomePage } from '../../../pages/ui/home.page';
import { POMManager } from '../../../pages/ui/pom-manager';
import { TagsPage } from '../../../pages/ui/tags.page';
import { envConf } from '../../../fixtures/ui/envConf.fixture';

const test = logInSuccessful;
test.describe('POST - Post/Tags', async () => {
    let pomManager: POMManager;
    let homePage: HomePage;
    let tagsPage: TagsPage;

    let newTagName01 = 'tag Nguyen Lua';
    let newTagName02 = 'tag Nguyen Lua 02';
    let slug02 = 'tag-nguyen-lua-02';
    let textSearch = 'nguyen';
    const messageAddSuccess = 'Tag added.';

    test.beforeEach(async ({ dashboard }) => {
        pomManager = new POMManager(dashboard);
        homePage = pomManager.getHomePage();
        tagsPage = pomManager.getTagsPage();
        await homePage.item(homePage.xpathPosts);
        await homePage.item(homePage.xpathTags);
    });

    test('@POST_TAG_002 - Tag - add tag success', async ({ page }) => {
        await test.step('Điền thông tin tag: name = "tag {name}" Click button "Add New Tag"', async () => {
            await tagsPage.inputTagName(newTagName01);
            await tagsPage.clickButtonAddTag();

            //result
            await expect(tagsPage.page.locator(tagsPage.xpathNoticeSuccess)).toContainText(messageAddSuccess);

        });

        await test.step('Điền thông tin tag: name = "tag {name} 02", slug = "tag-${name}-02"', async () => {
            await tagsPage.inputTagName(newTagName02);
            await tagsPage.inputSlug(slug02);
            await tagsPage.clickButtonAddTag();

            //result
            await expect(tagsPage.page.locator(tagsPage.xpathNoticeSuccess)).toContainText(messageAddSuccess);
        });

        await test.step('Teardown: xoá các dữ liệu đã thêm vào', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();  // Tự động click OK
            });

            await tagsPage.inputSearch(textSearch);
            await tagsPage.clickButtonSearchSubmit();

            //delete tag 1
            await tagsPage.viewDetailItem(tagsPage.xpathItemTag1);
            await tagsPage.deleteItem();
            //delete tag 2
            await tagsPage.viewDetailItem(tagsPage.xpathItemTag2);
            await tagsPage.deleteItem();
        });
    });
});