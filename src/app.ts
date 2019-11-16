import { initLogger, log } from './logger';

const tag = '[app]';

(async () => {
  initLogger();

  log.info(`${tag} instaspider-worker started`);
})();