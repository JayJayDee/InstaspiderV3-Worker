import { Page } from 'puppeteer';
import { little } from '../utils';
import { log } from '../../logger';
import { SiteCredential } from '../types';

const tag = '[bunjang-login]';

export default (creds: SiteCredential) =>

  async (page: Page) => {
    await page.goto('https://m.bunjang.co.kr');
    log.debug(`${tag} page loaded`);

    await little(1);
    await (await page.$('[autocomplete=username]')).type(creds.loginId);

    await little(1);
    await (await page.$('[autocomplete=current-password]')).type(creds.password);

    await little(1);
    await (await page.$('[type=submit]')).click();

    await page.waitForNavigation({
      waitUntil: 'load',
    });

    log.debug(`${tag} login success`);
  };