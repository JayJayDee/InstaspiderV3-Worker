import { Page } from 'puppeteer';
import { log } from '../../logger';
import { SellArticle } from '../types';

const tag = '[clien-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticle[]> => {

    await page.goto('https://www.clien.net/service/board/sold');
    log.debug(`${tag} page loaded`);

    const elems = await page.$('[data-role=list-title-text]');
    log.debug(elems);

    log.debug(`${tag} selling-articles gathering done.`);
    return [];
  };