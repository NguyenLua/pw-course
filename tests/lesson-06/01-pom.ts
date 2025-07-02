import { Locator, Page } from "@playwright/test";

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string
    personalNote: Locator;

    construction(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {

    }
    async gotoPage(pageName: string) {

    }
}

class RegisterPage extends MaterialBasePage {
    xpathuserName: string;
    xpathEmail: string;
    xpahtGenderFemal: string;
    xpathGenderMale: string;

    async fillUserName() {

    }

    async fillEmail() {

    }

    async checkGender(gender: string) {

    }
}

