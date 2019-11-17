import { launch } from 'puppeteer';

import { initLogger } from './logger';
import { initConfigurations } from './configurations';
import { pickSite, initSites } from './site-commands';
import sellArticles from './site-commands/site-clien/sell-articles';

(async () => {
  initLogger();
  initConfigurations();
  initSites();

  const browser = await launch({ headless: false });
  const page = await browser.newPage();

  const site = pickSite('CLIEN');
  await site.login(page, { loginId: 'jindongp', password: 'lowlow' });

  await sellArticles(page);
})();