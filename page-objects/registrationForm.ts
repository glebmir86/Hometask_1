import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"

export class RegistrationForm extends BasePage {

  readonly usernameInput: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly confirmPasswordInput: Locator
  readonly registerButton: Locator

  constructor(page: Page) {
    super(page)
    this.usernameInput = page.locator('[name="username"]');
    this.emailInput = page.locator('[name="email"]');
    this.passwordInput = page.locator('[name="password"]');
    this.confirmPasswordInput = page.locator('[name="confirmPassword"]');
    this.registerButton = page.getByText('Register');
  }
}

