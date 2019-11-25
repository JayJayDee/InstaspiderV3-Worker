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
  const page2 = await browser.newPage();

  const p1 = fetchArticles('BUNJANG', page);
  const p2 = fetchArticles('CLIEN', page2);

  const responses = await Promise.all([p1, p2]);
  console.log(responses);
})();

const fetchArticles = async (siteType: 'BUNJANG' | 'CLIEN', page: Page) => {
  const site = pickSite(siteType);
  await site.prepare(page);
  const loggedIn = await site.isLoggedIn(page);
  if (loggedIn === false) {
    await site.login(page);
  }
  return await site.sellArticles(page);
};