import { initLogger, log } from './logger';
import { initConfigurations } from './configurations';
import { initSites } from './site-commands';
import { initQueue } from './queue';

const tag = '[app]';

(async () => {
  initLogger();
  initConfigurations();

  initSites();
  await initQueue();

  log.info(`${tag} UsedThings-Worker started`);
})();