import { Page } from 'puppeteer';
import { SellArticleResponse, SellArticle } from '../types';
import { log } from '../../logger';

const tag = '[bunjang-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticleResponse> => {
    log.debug(`${tag} page loading ...`);
    page.on('response', (response) => {
      if (response.request().resourceType() === 'xhr') {
            // response.request().url().includes('find_v2') === true) {
        console.log(response.request().url());
      }
    });

    page.goto('https://m.bunjang.co.kr/categories/600');
    log.debug(`${tag} page loaded.`);

    const articles: SellArticle[] = [];
    const prev = '';
    const next = '';

    log.debug(`${tag} sell-articles fetched`);

    return {
      articles,
      navigation: { prev, next },
    };
  };