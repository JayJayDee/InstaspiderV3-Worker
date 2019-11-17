import { Page } from 'puppeteer';

export type SiteType = 'CLIEN';

type LoginParam = {
  loginId: string;
  password: string;
};

export type Site = {
  site: SiteType;
  login: (page: Page, param: LoginParam) => Promise<void>;
};