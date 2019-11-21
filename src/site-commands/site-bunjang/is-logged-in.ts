import { Page } from 'puppeteer';

import { little } from '../utils';
import { log } from '../../logger';

const tag = '[bunjang-is-logged-in]';

export default () =>

  async (page: Page) => {
    await page.goto('https://m.bunjang.co.kr/categories/600');
    log.debug(`${tag} page loaded`);

    await little(1);

    const logoutText = await page.$('.byhRxB');
    const text = await page.evaluate((elem) => elem.innerText, logoutText);

    if (text === '로그아웃') {
      return true;
    }
    return false;
  };