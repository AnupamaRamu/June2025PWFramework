import {Browser, chromium, Page} from '@playwright/test';

(async () => {

    let browser:Browser = await chromium.launch({headless:false});

    let page:Page = await browser.newPage();

    await page.goto('https://www.google.com');

    let title:string = await page.title();
    console.log('Page Title: ' + title);
    

    let url:string = page.url();
    console.log('URL: ' + url);

    await page.close();

}) ();