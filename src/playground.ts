import { launch } from 'puppeteer';
import { join } from 'path';
import { initLogger } from './logger';
import { initConfigurations } from './configurations';
import { initSites, pickSite } from './site-commands';

(async () => {
  initLogger();
  initConfigurations();
  initSites();

  const browser = await launch({
    headless: false,
    userDataDir: `${join(__dirname, 'browser-data')}`,
  });
  const page = (await browser.pages())[0];

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.resourceType() === 'image') {
      request.abort();
    } else {
      request.continue();
    }
  });

  const site = pickSite('CLIEN');
  await site.login(page);

  const resp = await site.sellArticles(page);
  console.log(resp);
})();