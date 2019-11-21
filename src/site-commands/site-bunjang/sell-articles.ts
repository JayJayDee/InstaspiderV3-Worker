import { Page } from 'puppeteer';
import { SellArticleResponse, SellArticle } from '../types';
import { log } from '../../logger';

const tag = '[bunjang-sell-articles]';

export default () =>
  async (page: Page): Promise<SellArticleResponse> => {

    log.debug(`${tag} page loading ...`);
    const rawElems: any[] = [];

    page.on('response', async (response) => {
      if (response.request().resourceType() === 'xhr' &&
            response.request().url().includes('find_v2') === true) {
        const rawText = await response.text();
        const parsed = JSON.parse(rawText);
        parsed.list.map((elem: any) => rawElems.push(elem));
      }
    });

    page.goto('https://m.bunjang.co.kr/categories/600');
    log.debug(`${tag} page loaded.`);

    const prev = '';
    const next = '';

    await page.waitForNavigation({
      waitUntil: 'networkidle2',
    });

    const articles: SellArticle[] =
      rawElems
      .filter((r) => r.ad === false)
      .map((r) => ({
        url: `https://m.bunjang.co.kr/products/${r.pid}`,
        purpose: 'SELL',
        title: r.name,
        regDate: new Date(),
        site: 'BUNJANG',
      }));

    log.debug(`${tag} sell-articles fetched`);

    // TODO: prev, next navigation.

    return {
      articles,
      navigation: { prev, next },
    };
  };