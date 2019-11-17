import { Page } from 'puppeteer';
import { log } from '../../logger';
import { little } from '../utils';

const tag = '[clien-sell-articles]';

export default async (page: Page, param: { loginId: string, password: string }) => {
  // await page.goto('https://clien.net');
  log.debug(`${tag} page loaded`);

  // await little(1);
  // await (await page.$('.input_id')).type(param.loginId);
  // await little(1);
  // await (await page.$('.input_pw')).type(param.password);
  // await little(1);
  // await (await page.$('[name=로그인하기]')).click();
  log.debug(`${tag} login success`);
};