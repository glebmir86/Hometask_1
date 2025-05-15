import { test, expect } from '../fixtures/pageManagerFixture';
import userData from '../test-data/registrationUser.json' 
const data: any = userData;

test.beforeEach(async ({page}) => {
  await page.goto('/register');
})

test('open registration page and check title', async ({ page, pageManager }) => {
  await page.goto('/register'); 
  await pageManager.registrationForm().usernameInput.fill(data.username);
  await pageManager.registrationForm().emailInput.fill(data.email);
  await pageManager.registrationForm().passwordInput.fill(data.password);
  await pageManager.registrationForm().confirmPasswordInput.fill(data.confirmPassword);
  await pageManager.basePage().clickButton("Register");
  await expect(pageManager.homePage().successMessage).toBeVisible();
});



