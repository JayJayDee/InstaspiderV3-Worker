import { Page } from 'puppeteer';

export type SiteType = 'CLIEN' | 'BUNJANG';

export type SiteCredential = {
  loginId: string;
  password: string;
};

export type SellArticle = {
  site: SiteType;
  url: string;
  purpose: 'SELL' | 'BUY' | 'EXCHANGE' | 'DONE';
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
  isLoggedIn: (page: Page) => Promise<boolean>;
  sellArticles: (page: Page) => Promise<SellArticleResponse>;
};