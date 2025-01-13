const { test, expect } = require('@playwright/test');
const LoginPage = require('../../page-objects/LoginPage.js');
const ApplyPage = require('../../page-objects/ApplyPage.js');

test.describe('Application Form Smoke Test', () => {
  test('should open application form after clicking Apply Now button', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const applyPage = new ApplyPage(page);

    // Step 1: Navigate to the base URL and log in
    await page.goto('/');
    await loginPage.openLoginForm();
    await loginPage.login('dragovicdaris@gmail.com', 'Test123');
    await loginPage.closeLoginForm();

    // Step 2: Navigate to an opportunity details page
    await applyPage.navigateToOpportunity(1);

    // Step 3: Open the application form
    await applyPage.clickApplyNowButton();

    // Step 4: Verify that the application form is visible
    const formVisible = await applyPage.isApplicationFormVisible();
    expect(formVisible).toBeTruthy();

    // Step 5: Submit the application form
    await applyPage.submitApplicationForm();

    // Step 6: Verify success message
    const successMessage = await applyPage.getSuccessMessage();
    expect(successMessage).toContain(
      'You have successfully applied for this opportunity :)'
    );
  });
});
