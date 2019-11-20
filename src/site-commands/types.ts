import { Page } from 'puppeteer';

export type SiteType = 'CLIEN';

export type SiteCredential = {
  loginId: string;
  password: string;
};

export type SellArticle = {
  url: string;
  purpose: 'SELL' | 'BUY' | 'EXCHANGE';
  title: string;
  regDate: Date;
};

export type SellArticleResponse = {
  articles: SellArticle[];
  navigation: {
    prev: string | null;
    next: string | null;
  }
};

export type Site = {
  site: SiteType;
  login: (page: Page) => Promise<void>;
  sellArticles: (page: Page) => Promise<SellArticleResponse>;
};