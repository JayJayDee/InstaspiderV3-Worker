import { Page } from 'puppeteer';
import { SellArticleResponse, SellArticle } from '../types';
import { log } from '../../logger';

const tag = '[bunjang-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticleResponse> => {
    log.debug(`${tag} page loading ...`);

    const articles: SellArticle[] = [];
    const prev = '';
    const next = '';

    log.debug(`${tag} page loaded.`);

    log.debug(`${tag} sell-articles fetched`);

    return {
      articles,
      navigation: { prev, next },
    };
  };