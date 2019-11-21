import { Page } from 'puppeteer';
import { little } from '../utils';
import { log } from '../../logger';
import { SiteCredential } from '../types';

const tag = '[bunjang-login]';

export default (creds: SiteCredential) =>

  async (page: Page) => {
    log.debug(`${tag} page loaded`);
    await little(1);
    log.debug(`${tag} login success`);
  };