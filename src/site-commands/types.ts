import { Page } from 'puppeteer';

export type SiteType = 'CLIEN';

export type SiteCredential = {
  loginId: string;
  password: string;
};

export type SellArticle = {
  url: string;
  title: string;
};

export type Site = {
  site: SiteType;
  login: (page: Page) => Promise<void>;
  sellArticles: (page: Page) => Promise<SellArticle[]>;
};