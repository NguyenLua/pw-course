import { APIRequestContext, APIResponse } from "@playwright/test";

export class ArticleAPI {
    request: APIRequestContext;
    baseURL = 'https://conduit-api.bondaracademy.com/';
    endpointCreateArticle = 'api/articles/';
    constructor(request: APIRequestContext) {
        this.request = request;
    }
    async createArticle(authorization: any, articleInfor: any) {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}`;
        const response = await this.request.post(requestURL, {
            headers: {
                authorization
            },
            data: {
                article: articleInfor
            }
        })
        return response;
    }

    async getSlug(authorization: any, articleInfor: any) {
        const response = await this.createArticle(authorization, articleInfor);
        const resBody = await response.json();
        return resBody.article.slug;
    }

    async getArticleList(authorization: any) {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}`;
        const response = await this.request.get(requestURL, {
            headers: {
                authorization
            }
        })
        const resBody = await response.json();
        const articles = resBody.articles;
        return {
            body: (i: number) => articles[i]?.body,
            slug: (i: number) => articles[i]?.slug
        };
    }

    async deleteArticle(authorization: any, slug: string) {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}${slug}/`;
        const response = await this.request.delete(requestURL, {
            headers: {
                authorization
            }
        });
    }
}