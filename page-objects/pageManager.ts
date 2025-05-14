import { Page } from "@playwright/test"
import { BasePage } from "./basePage"
import { HomePage } from "./homePage"
import { RegistrationForm } from "./registrationForm"

export class PageManager {
    readonly page: Page;
    private readonly baseePage: BasePage;
    private readonly homeePage: HomePage;
    private readonly registrationnForm: RegistrationForm;

    constructor(page: Page) {
        this.page = page;
        this.baseePage = new BasePage(this.page);
        this.homeePage = new HomePage(this.page);
        this.registrationnForm = new RegistrationForm(this.page);

    }

    basePage() {
        return this.baseePage;
    }

    homePage() {
        return this.homeePage;
    }

    registrationForm(){
        return this.registrationnForm;
    }
    
}


