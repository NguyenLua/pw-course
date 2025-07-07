import { APIRequestContext, APIResponse } from "@playwright/test";

export class CommentAPI {
    request: APIRequestContext;
    slug: string;
    baseURL = 'https://conduit-api.bondaracademy.com/';
    constructor(request: APIRequestContext, slug: string) {
        this.request = request;
        this.slug = slug;
    }

    get endpointComment(): string {
        return `api/articles/${this.slug}/comments/ss`;
    }

    async createComment(authorization: any, commentInfor: any) {
        const requestURL = `${this.baseURL}${this.endpointComment}`;
        const response = await this.request.post(requestURL, {
            headers: {
                authorization
            },
            data: {
                comment: commentInfor
            }
        })
        return response;
    }

    async getCommentList(authorization: any) {
        const requestURL = `${this.baseURL}${this.endpointComment}`;
        const response = await this.request.get(requestURL, {
            headers: {
                authorization
            }
        })
        const resBody = await response.json();
        const comments = resBody.comments;
        return {
            body: (i: number) => comments[i]?.body,
            id: (i: number) => comments[i]?.id
        };
    }

    async deleteComment(authorization: any, commentId: number) {
        const requestURL = `${this.baseURL}${this.endpointComment}${commentId}/`;
        const response = await this.request.delete(requestURL, {
            headers: {
                authorization
            }
        });
    }
}