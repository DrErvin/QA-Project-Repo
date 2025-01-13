const { test, expect } = require('@playwright/test');

test.describe('Search Button Disappearance', () => {
  test('should hide search button after click', async ({ page }) => {
    // Step 1: Go to the homepage
    await page.goto('http://localhost:8080');

    // Step 2: Verify that the search button is visible
    const searchButton = await page.locator('.btn-search');
    expect(await searchButton.isVisible()).toBeTruthy();

    // Step 3: Click the search button
    await searchButton.click();

    // Step 4: Verify that the search button is no longer visible
    expect(await searchButton.isVisible()).toBeFalsy();
  });
});
