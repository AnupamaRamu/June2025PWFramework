import {test, Page, expect} from '@playwright/test';

test('single scenario', async ({page}) => {

    await page.goto('https://selectorshub.com/xpath-practice-page');

    while(true) {

        let eleExist = page.locator(`//tr[td[2][normalize-space()='mac'] and td[3][normalize-space()='chrome'] and td[4][normalize-space()='Samsun'] and td[5][normalize-space()='Russia']]`).isVisible();

        if(await eleExist) {
            console.log('Element found');
            await page.locator(`//tr[td[2][normalize-space()='mac'] and td[3][normalize-space()='chrome'] and td[4][normalize-space()='Samsun'] and td[5][normalize-space()='Russia']]//input[@type='checkbox']`).check();
            break;
        }

        let next = page.getByRole('link', {name: 'Next'});
        await next.click();

        let eleExist1 = page.locator(`//tr[td[2][normalize-space()='mac'] and td[3][normalize-space()='chrome'] and td[4][normalize-space()='Samsun'] and td[5][normalize-space()='Russia']]`).isVisible();
        if(await eleExist1) {
            console.log('Element found');
            await page.locator(`//tr[td[2][normalize-space()='mac'] and td[3][normalize-space()='chrome'] and td[4][normalize-space()='Samsun'] and td[5][normalize-space()='Russia']]//input[@type='checkbox']`).check();
            break;
        }

        await page.waitForTimeout(2000);

        if(await next.isDisabled()) {
            console.log("Pagination is over...");
            break;
        }

        

    }




});
