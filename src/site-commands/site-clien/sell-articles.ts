import { Page } from 'puppeteer';
import { log } from '../../logger';
import { SellArticle } from '../types';

const tag = '[clien-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticle[]> => {

    await page.goto('https://www.clien.net/service/board/sold');
    log.debug(`${tag} page loaded`);

    // const samples =
    //   await page.$$eval('.list_subject', (elems: any[]) =>
    //     elems
    //     .filter((e) => e.children.length === 2)
    //     .map((e) => ({
    //       url: `https://clien.net${e.getAttribute('href')}`,
    //       purpose: e.children[0].getAttribute('title') === '판매' ? 'SELL' : 
    //                 e.children[0].getAttribute('title') === '교환' ? 'EXCHANGE' : 'BUY',
    //       title: e.children[1].getAttribute('title'),
    //     })));
    // log.debug(samples);

    const samples =
      await page.$$eval('[data-role=list-row]', (elems: any[]) =>
        elems.map((e) => ({
          url: `https://clien.net/${e.querySelector('.list_title').getAttribute('href')}`,
          regDate: e.querySelector('.timestamp').innerText,
        })));

    log.debug(samples);

    log.debug(`${tag} selling-articles gathering done.`);
    return [];
  };