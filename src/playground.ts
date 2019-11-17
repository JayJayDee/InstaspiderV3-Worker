import { initLogger } from './logger';
import { initConfigurations } from './configurations';
import { initSites, pickSite } from './site-commands';
import { launch } from 'puppeteer';

(async () => {
  initLogger();
  initConfigurations();
  initSites();

  const browser = await launch({ headless: false });
  const page = (await browser.pages())[0];

  const site = pickSite('CLIEN');
  site.login(page);
})();