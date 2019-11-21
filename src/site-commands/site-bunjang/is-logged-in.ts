import { Page } from 'puppeteer';

import { little } from '../utils';
import { log } from '../../logger';

const tag = '[bunjang-is-logged-in]';

export default () =>

  async (page: Page) => {
    await page.goto('https://m.bunjang.co.kr/categories/600');
    log.debug(`${tag} page loaded`);

    await little(1);

    return false;
  };