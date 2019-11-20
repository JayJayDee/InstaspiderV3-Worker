import { Page } from 'puppeteer';
import { log } from '../../logger';
import { SellArticleResponse, SellArticle } from '../types';

const tag = '[clien-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticleResponse> => {
    await page.goto('https://www.clien.net/service/board/sold');
    log.debug(`${tag} page loaded`);

    // @ts-ignore
    const articles: SellArticle[] =
      await page.$$eval('[data-role=list-row]', (elems: any[]) =>
        elems.map((e) => {
          const articleType = e.querySelector('.category_fixed').innerText;
          return {
            url: `https://clien.net${e.querySelector('.list_subject').getAttribute('href')}`,
            purpose: articleType === '판매' ? 'SELL' :
                      articleType === '교환' ? 'EXCHANGE' : 'BUY',
            title: e.querySelector('.subject_fixed').getAttribute('title'),
            regDate: e.querySelector('.timestamp').innerText,
          };
        }));

    log.debug(`${tag} selling-articles gathering done.`);

    return {
      articles,
      navigation: {
        prev: null,
        next: null,
      },
    };
  };