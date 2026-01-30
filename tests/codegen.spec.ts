import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://support.orangehrm.com/portal/en/signin');
  await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Email Address' }).click();
  await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Email Address' }).fill('random@gmail.com');
  await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Password' }).click();
  await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Password' }).fill('qwerty');
  await page.locator('#iamFrame').contentFrame().getByRole('button', { name: 'Sign In' }).click();
});