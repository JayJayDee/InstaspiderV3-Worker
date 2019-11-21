import { Page } from 'puppeteer';

import { little } from '../utils';
import { log } from '../../logger';

const tag = '[clien-is-logged-in]';

export default () =>

  async (page: Page) => {
    await page.goto('https://clien.net');
    log.debug(`${tag} page loaded`);

    await little(1);

    return false;
  };