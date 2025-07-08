import { Page } from "@playwright/test";

export class RegisterPage {
    page: Page;
    xpathUserName = '//*[@id="username"]';
    xpathEmail = '//*[@id="email"]';
    xpathGender = '//*[@id="female"]';
    xpathHobbies = '//*[@id="traveling"]';
    xpathInterests = '//*[@id="interests"]';
    xpathCountry = '//*[@id="country"]';
    xpathDOB = '//*[@id="dob"]';
    xpathProfilePicture = '//*[@id="profile"]';
    xpathBiography = '//*[@id="bio"]';
    xpathRating = '//*[@id="rating"]';
    xpathFavoriteColor = '//*[@id="favcolor"]';
    xpathEnableFeature = '//*[@class="slider round"]';
    xpathStarRating = '//*[@id="starRating"]';
    xpathButtonRegister = '//button[@type ="submit"]';

    constructor(page: Page) {
        this.page = page;
    }
    async inputUserName(userName: string): Promise<void> {
        await this.page.locator(this.xpathUserName).fill(userName);
    }

    async inputEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender() {
        await this.page.locator(this.xpathGender).check();
    }

    async checkHobbies() {
        await this.page.locator(this.xpathHobbies).check();
    }

    async clickRegister() {
        await this.page.locator(this.xpathButtonRegister).click();
    }

    //Result new user
    async checkNewEmail(email: string) {
        return `//table[@id="userTable"]//td[contains(text(),"${email}")]`;
    }
}