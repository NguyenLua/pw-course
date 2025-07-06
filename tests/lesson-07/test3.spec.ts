import { APIResponse, test, expect } from '@playwright/test';
import { ArticleAPI } from '../../pages/api/article';
import { CommentAPI } from '../../pages/comment';
import { APISignIn } from './helpers/authAPI.helper';

test.describe("Test 3", async () => {
    let commentAPI: CommentAPI;
    let articleAPI: ArticleAPI;

    test('Them moi comment', async ({ request }) => {
        articleAPI = new ArticleAPI(request);
        const token = await APISignIn(request);
        const authorization = `Token ${token}`;
        const articleInfor = {
            title: "henrytitle",
            description: "henrydescription",
            body: "henrybody",
            tagList: ["henrytitle"]
        }
        const slug = await articleAPI.getSlug(authorization, articleInfor);
        const comment = (i: number) => `comment ${i}`;
        commentAPI = new CommentAPI(request, slug);
        const commentInfor = {
            "body": `${comment}`
        }

        await test.step('test a: Dang ky tai khoan', async () => {
            await APISignIn(request);
        });

        await test.step('them moi 5 comment', async () => {
            for (let i = 0; i < 5; i++) {
                await commentAPI.createComment(authorization, commentInfor);
            }
        })
    })

    test('Test 4: xoa comment 2 va comment 5 da tao o test 3', async ({ request }) => {
        const token = await APISignIn(request);
        const authorization = `Token ${token}`;
        const commentUtils = await commentAPI.getCommentList(authorization);
        const count = await (await commentAPI.getCommentList(authorization)).id.length;
        await test.step('xoa comment 2 va comment 5', async () => {
            for (let i = 0; i < count; i++) {
                const body = commentUtils.body(i);
                const id = commentUtils.id(i);
                if (body == 'comment 2' || body == 'comment 5') {
                    await commentAPI.deleteComment(authorization, id);
                }
            }
        })
    })
})