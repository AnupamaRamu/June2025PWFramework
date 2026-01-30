import {expect, test} from '@playwright/test'

test('Test FAIL', async ({page}) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', {name: 'Main Menu'})).toBeVisible();
    await page.getByRole('link', {name: 'Login here'}).click();

    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', {name: 'Email Address11'}).click();

});

test('Test PASS', async ({page}) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', {name: 'Main Menu'})).toBeVisible();
    await page.getByRole('link', {name: 'Login here'}).click();

    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', {name: 'Email Address'}).click();

});

test('Test FAIL 1', async ({page}) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', {name: 'Main Menu'})).toBeVisible();
    await page.getByRole('link', {name: 'Login here'}).click();

    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', {name: 'Email Address11'}).click();

 
});