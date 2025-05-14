import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"

export class HomePage extends BasePage {

    readonly goToRegistrationButton: Locator
    readonly successMessage: Locator

    constructor(page: Page) {
        super(page)
        this.goToRegistrationButton = page.getByText('Go to Registration');
        this.successMessage = page.getByText('You have registered successfully!');
    }

}
