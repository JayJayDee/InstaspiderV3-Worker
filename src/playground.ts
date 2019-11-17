import { launch } from 'puppeteer';

(async () => {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://clien.net');
})();