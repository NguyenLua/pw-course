import { APIResponse, test, expect } from '@playwright/test';
import { ArticleAPI } from '../../pages/api/article';
import { APISignIn } from './helpers/authAPI.helper';

test.describe("Test 2", async () => {
    let articleAPI: ArticleAPI;
    const articleInfor = {
        title: "henrytitle",
        description: "henrydescription",
        body: "henrybody",
        tagList: ["henrytitle"]
    }

    test('Tao moi article', async ({ request }) => {
        articleAPI = new ArticleAPI(request);
        const token = await APISignIn(request);
        const authorization = `Token ${token}`;

        await test.step('test a: Dang ky tai khoan', async () => {
            await APISignIn(request);
        });

        await test.step('test b: Tao moi article', async () => {
            await articleAPI.createArticle(authorization, articleInfor);
            const res = await articleAPI.createArticle(authorization, articleInfor);
            const statusCode: number = res.status();
            await expect(statusCode).toEqual(201);
        });
    })

    test('Test 5: Xoa article da tao o test 2', async ({ request }) => {
        const token = await APISignIn(request);
        const authorization = `Token ${token}`;
        const articleUtils = await articleAPI.getArticleList(authorization);
        const count = await (await articleAPI.getArticleList(authorization)).slug.length;
        await test.step('xoa comment 2 va comment 5', async () => {
            for (let i = 0; i < count; i++) {
                const body = articleUtils.body(i);
                const slug = articleUtils.slug(i);
                if (body == `${articleInfor.body}`) {
                    await articleAPI.deleteArticle(authorization, slug);
                }
            }
        })
    })
})