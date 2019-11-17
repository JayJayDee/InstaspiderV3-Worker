import { launch } from 'puppeteer';
import { initLogger } from './logger';
import { pickSite } from './site-commands';

(async () => {
  initLogger();

  const browser = await launch({ headless: false });
  const page = await browser.newPage();

  const site = pickSite('CLIEN');
  await site.login(page, { loginId: 'jindongp', password: 'lowlow' });
})();