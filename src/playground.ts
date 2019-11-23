import { launch, Page } from 'puppeteer';
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

  const p1 = fetchArticles('BUNJANG', page);
  const p2 = fetchArticles('CLIEN', page);

  const responses = await Promise.all([p1, p2]);
  console.log(responses);
})();

const fetchArticles = async (siteType: 'BUNJANG' | 'CLIEN', page: Page) => {
  const site = pickSite(siteType);
  const loggedIn = await site.isLoggedIn(page);
  if (loggedIn === false) {
    await site.login(page);
  }
  return await site.sellArticles(page);
};