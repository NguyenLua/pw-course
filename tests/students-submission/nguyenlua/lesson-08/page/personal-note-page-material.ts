import { expect, Page } from "@playwright/test";

export class PersonalNotePage {
    page: Page;
    urlVNExpress: string;
    titles: string[] = [];
    contents: string[] = [];

    //xpath VNExpress
    xpathTitle = '//h4[@class = "title-news"]/a';
    xpathDescription = '//p[@class = "description"]/a';

    //xpath Material
    xpathNoteTitle = '//*[@id ="note-title"]';
    xpathNoteContent = '//*[@id ="note-content"]';
    xpathButtonAddNote = '//*[@id ="add-note"]';
    xpathSearh = '//*[@id ="search"]';
    xpathResultSearch = '//*[@id="notes-list"]/div[strong and p]';
    xpathTitleSearch = '//*[@id="notes-list"]//strong[contains(text(),"Việt Nam")]';
    xpathContentSearch = '//*[@id="notes-list"]//p[contains(text(),"Việt Nam")]';

    constructor(urlVNExpress: string, page: Page) {
        this.urlVNExpress = urlVNExpress;
        this.page = page;
    }

    async goToExpressWebsite(urlVNExpress) {
        await this.page.goto(urlVNExpress, { waitUntil: 'load' });
    }

    async getContentTitles() {
        let countTitle = await this.page.locator(this.xpathTitle).count();
        for (let i = 0; i < countTitle; i++) {
            let title = await this.page.locator(this.xpathTitle).nth(i).textContent();
            if (title) {
                this.titles.push(title);
            }
        }
    }

    async getContentDescription() {
        let countDescription = await this.page.locator(this.xpathDescription).count();
        for (let i = 0; i < countDescription; i++) {
            let content = await this.page.locator(this.xpathDescription).nth(i).textContent();
            if (content) {
                this.contents.push(content);
            }
        }
    }

    async inputMultiplePersonalNote() {
        for (let i = 0; i < this.titles.length; i++) {
            if (i < 10) {
                await this.page.locator(this.xpathNoteTitle).fill(this.titles[i]);
                await this.page.locator(this.xpathNoteTitle).fill(this.titles[i]);
                await this.page.locator(this.xpathNoteContent).fill(this.contents[i]);
                await this.page.locator(this.xpathButtonAddNote).click();
            }
        }
    }

    async search(keySearch: string) {
        await this.page.locator(this.xpathSearh).fill(keySearch);
    }
    async checkKeySearch() {
        const count = await this.page.locator(this.xpathResultSearch).count();
        for (let i = 0; i < count; i++) {
            let keyTitle = await this.page.locator(this.xpathTitleSearch).nth(i).textContent() || '';
            let keyContent = await this.page.locator(this.xpathContentSearch).nth(i).textContent() || '';
            const hasKeyword = keyTitle.includes('Việt Nam') || keyContent.includes('Việt Nam');
            await expect(hasKeyword).toBeTruthy();
        }
    }
}