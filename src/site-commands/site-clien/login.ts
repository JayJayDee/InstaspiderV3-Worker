import { Page } from 'puppeteer';

import { little } from '../utils';
import { log } from '../../logger';
import { SiteCredential } from '../types';

const tag = '[clien-login]';

export default (creds: SiteCredential) =>

  async (page: Page) => {
    await page.goto('https://clien.net');
    log.debug(`${tag} page loaded`);

    await little(1);
    await (await page.$('.input_id')).type(creds.loginId);
    await little(1);
    await (await page.$('.input_pw')).type(creds.password);
    await little(1);

    (await page.$('.check_auto')).click();
    await (await page.$('[name=로그인하기]')).click();

    await page.waitForNavigation({
      waitUntil: 'load',
    });

    log.debug(`${tag} login success`);
  };