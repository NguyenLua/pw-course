import { APIResponse, expect } from '@playwright/test';
import { ArticleAPI } from '../../../pages/api/article.api';
import { testRequest } from '../../../fixtures/api/auth.fixture';

const test = testRequest;
test.describe("Test 2", async () => {
    let articleAPI: ArticleAPI;
    const articleInfor = {
        title: "henrytitle",
        description: "henrydescription",
        body: "henrybody",
        tagList: ["henrytitle"]
    }
    test.beforeEach(async ({ authRequest }) => {
        articleAPI = new ArticleAPI(authRequest);
    });
    test('Tao moi article', async () => {
        await test.step('Tao moi article', async () => {
            const res = await articleAPI.createArticle(articleInfor);
            const statusCode: number = res.status();
            expect(statusCode).toEqual(201);
        });

        await test.step('xoa article da tao', async () => {
            const articleUtils = await articleAPI.getArticleList();
            const count = await articleUtils.slug.length;
            for (let i = 0; i < count; i++) {
                const body = articleUtils.body(i);
                const slug = articleUtils.slug(i);
                if (body === articleInfor.body) {
                    await articleAPI.deleteArticle(slug);
                }
            }
        })
    })
})