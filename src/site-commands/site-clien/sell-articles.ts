import { Page } from 'puppeteer';
import { log } from '../../logger';

const tag = '[clien-sell-articles]';

export default async (page: Page) => {
  await page.goto('https://www.clien.net/service/board/sold');
  log.debug(`${tag} page loaded`);

  log.debug(`${tag} login success`);
};