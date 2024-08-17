const { test, expect } = require('@playwright/test');
test('Page Load', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    // Check that the page has loaded by ensuring the title is correct
    await expect(page).toHaveTitle(/Instagram/);
    await page.waitForTimeout(5000)
});
~
test('Login Button Present', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    // Check if the login button is present on the home page
    const loginButton = await page.locator('[type="submit"]');
    await expect(loginButton).toBeVisible();
    await page.waitForTimeout(5000) 
});

test('Signup Button Present', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    // Check if the signup button is present on the home page
    const signupButton = await page.locator('a[href="/accounts/emailsignup/"]');
    await expect(signupButton).toBeVisible();
    await page.waitForTimeout(5000)
});
test('Search Bar Present', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    // Check if the search bar is present on the home page
    const searchBar = await page.locator("//input[@name='username']");
    await expect(searchBar).toBeVisible();
    await page.waitForTimeout(5000)
});