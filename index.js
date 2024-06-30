import test from "node:test";
import puppeteer from "puppeteer-core";
import { executablePath } from "puppeteer-core";

run()

async function run() {
    const browser = await puppeteer.launch({

        executablePath: executablePath('chrome'),
    });

    const page = await browser.newPage();

    await page.goto('https://google.com/', {
        waitUntil: 'networkidle2',
    });

    await page.evaluate( () => {
        const hgt = document.body.scrollHeight;
        const wdt = document.body.scrollWidth;
        
    })

    await page.setViewport({ width: wdt, height: hgt });



    await page.screenshot({
        path: 'google.png',
    })

    await browser.close()


}

// 

