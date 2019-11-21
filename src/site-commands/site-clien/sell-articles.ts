import { Page } from 'puppeteer';
import { log } from '../../logger';
import { SellArticleResponse, SellArticle } from '../types';

const tag = '[clien-sell-articles]';

type RawNavigation = {
  pageNo: number;
  active: boolean;
};

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
                      articleType === '거래완료' ? 'DONE' :
                      articleType === '구입' ? 'BUY' : 'EXCHANGE',
            title: e.querySelector('.subject_fixed').getAttribute('title'),
            regDate: e.querySelector('.timestamp').innerText,
            site: 'CLIEN',
          };
        }));

    log.debug(`${tag} selling-articles gathering done.`);

    // @ts-ignore
    const rawNavigations: RawNavigation[] =
      await page.$$eval('.board-nav-page', (elems: any[]) =>
        elems.map((e) => ({
          pageNo: e.innerText,
          active: Array.prototype.slice.call(e.classList).includes('active'),
        })));

    let prev: string | null = null;
    let next: string | null = null;

    for (let i = 0; i < rawNavigations.length; i++) {
      const current = rawNavigations[i];
      if (current.active === true && i > 0) {
        prev = `https://www.clien.net/service/board/sold?&od=T31&po=${rawNavigations[i - 1].pageNo}`;
      }
      if (current.active === true && i < rawNavigations.length - 1) {
        next = `https://www.clien.net/service/board/sold?&od=T31&po=${rawNavigations[i + 1].pageNo}`;
      }
    }

    return {
      articles,
      navigation: { prev, next },
    };
  };