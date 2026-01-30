import {test, expect} from '@playwright/test';

test('check page title', async ({page}) => {

    await page.goto('https://www.google.com');

    let title:string = await page.title();
    console.log('Page Title: ' + title);

    expect(title).toBe('Google');
    
})

test('check page title invalid', async ({page}) => {

    await page.goto('https://www.google.com');

    let title:string = await page.title();
    console.log('Page Title: ' + title);

     expect(title).toBe('junk');
    
})