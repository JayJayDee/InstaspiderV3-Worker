import { initLogger, log } from './logger';
import { initConfigurations } from './configurations';
import { initSites } from './site-commands';

const tag = '[app]';

(async () => {
  initLogger();
  initConfigurations();

  initSites();

  log.info(`${tag} instaspider-worker started`);
})();