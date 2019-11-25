import { Page } from 'puppeteer';

export default () =>
  async (page: Page) => {
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.resourceType() === 'image') {
        request.abort();
      } else {
        request.continue();
      }
    });
  };