import { APIRequestContext, APIResponse } from "@playwright/test";

export class ArticleAPI {
    request: APIRequestContext;
    baseURL = 'https://conduit-api.bondaracademy.com/';
    endpointCreateArticle = 'api/articles/';
    constructor(request: APIRequestContext) {
        this.request = request;
    }
    async createArticle(articleInfor: any) {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}`;
        const response = await this.request.post(requestURL, {
            data: {
                article: articleInfor
            }
        })
        return response;
    }

    async getSlug(articleInfor: any) {
        const response = await this.createArticle(articleInfor);
        const resBody = await response.json();
        return resBody.article.slug;
    }

    async getArticleList() {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}`;
        const response = await this.request.get(requestURL)
        const resBody = await response.json();
        const articles = resBody.articles;
        return {
            body: (i: number) => articles[i]?.body,
            slug: (i: number) => articles[i]?.slug
        };
    }

    async deleteArticle(slug: string) {
        const requestURL = `${this.baseURL}${this.endpointCreateArticle}${slug}/`;
        const response = await this.request.delete(requestURL);
        return response;
    }
}