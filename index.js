import puppeteer from "puppeteer-core";
import { executablePath } from "puppeteer-core";

// Change the URL 
const URL = 'https://stackoverflow.com/';

// Launching Browser
const browser = await puppeteer.launch({
    executablePath: executablePath('chrome'),
});

//creating new page
const page = await browser.newPage();

// browsing url 
await page.goto(URL, {
    waitUntil: 'networkidle2',
});

// Taking Height and Width of targeted URL
const hgt = await page.evaluate(() => {
    return document.body.scrollHeight;    
})
const wdt = await page.evaluate(() => {
    return document.body.scrollWidth;
})

// Setting Viewport of the browser window
await page.setViewport({ width: wdt, height: hgt });

//Taking Screenshot
await page.screenshot({
    path: 'screenshot/default.png',
})

// Closing Browser
await browser.close()



