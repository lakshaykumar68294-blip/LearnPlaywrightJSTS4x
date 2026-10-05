const { test, expect } = require('@playwright/test');

const LOGIN_URL = process.env.LOGIN_URL || 'https://app.vwo.com/#/login';
const VALID_USERNAME = process.env.VALID_USERNAME || 'valid_user@example.com';
const VALID_PASSWORD = process.env.VALID_PASSWORD || 'ValidPass123!';

// This sample is intentionally minimal and educational.
// Replace selector details with the exact approved locators from the application under test.
// Do not execute this file against production without environment validation.

test.describe('VWO login feature example', () => {
  test('TC-LOGIN-01 - success path', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const usernameInput = page.locator('input');
    const passwordInput = page.locator('input[type="password"]');
    const loginButton = page.locator('button');

    await usernameInput.fill(VALID_USERNAME);
    await passwordInput.fill(VALID_PASSWORD);
    await loginButton.click();

    await expect(page).not.toHaveURL(/\/login/i);
  });

  test('TC-LOGIN-02 - invalid credential path', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const usernameInput = page.locator('input');
    const passwordInput = page.locator('input[type="password"]');
    const loginButton = page.locator('button');

    await usernameInput.fill('unknown_user@example.com');
    await passwordInput.fill('WrongPass123!');
    await loginButton.click();

    await expect(page).toHaveURL(/\/login/i);
  });

  test('TC-LOGIN-03 - required field validation', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const usernameInput = page.locator('input');
    const passwordInput = page.locator('input[type="password"]');
    const loginButton = page.locator('button');

    await usernameInput.fill('');
    await passwordInput.fill('');
    await loginButton.click();

    await expect(page).toHaveURL(/\/login/i);
  });
});
